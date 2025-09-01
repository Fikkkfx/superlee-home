import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Lightweight chiptune-style background loop using Web Audio API.
 * - Starts only after a user gesture (autoplay policies)
 * - Persists enabled state in localStorage
 */
export function useChiptuneAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const loopRef = useRef<number | null>(null);
  const pendingStartRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  const stop = useCallback(() => {
    if (loopRef.current) {
      window.clearInterval(loopRef.current);
      loopRef.current = null;
    }
    try {
      gainRef.current?.disconnect();
    } catch {}
    gainRef.current = null;
    if (ctxRef.current) {
      // Close gracefully
      const ctx = ctxRef.current;
      ctxRef.current = null;
      ctx.close().catch(() => {});
    }
    setEnabled(false);
    localStorage.setItem("soundEnabled", "false");
  }, []);

  const startNow = useCallback(() => {
    if (enabled || ctxRef.current) return;
    const AudioCtx =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx: AudioContext = new AudioCtx();
    // Ensure context is running on gesture
    void ctx.resume().catch(() => {});

    const master = ctx.createGain();
    master.gain.value = 0.1; // slightly louder but still subtle
    master.connect(ctx.destination);

    // Safari unlock: play an empty buffer immediately
    try {
      const b = ctx.createBuffer(1, 1, 22050);
      const s = ctx.createBufferSource();
      s.buffer = b;
      s.connect(master);
      s.start(0);
    } catch {}

    ctxRef.current = ctx;
    gainRef.current = master;

    // Simple arpeggio pattern in A minor
    const base = 220; // A3
    const semitone = Math.pow(2, 1 / 12);
    const scale = [0, 3, 7, 10, 12, 15, 19]; // A, C, E, G, A, C, E
    let i = 0;

    loopRef.current = window.setInterval(() => {
      if (!ctxRef.current || !gainRef.current) return;
      const t = ctxRef.current.currentTime;
      const freq = base * Math.pow(semitone, scale[i % scale.length]);

      const osc = ctxRef.current.createOscillator();
      const env = ctxRef.current.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(freq, t);

      // envelope
      env.gain.setValueAtTime(0, t);
      env.gain.linearRampToValueAtTime(0.8, t + 0.015);
      env.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

      osc.connect(env).connect(gainRef.current);
      osc.start(t);
      osc.stop(t + 0.28);

      i++;
    }, 300);

    setEnabled(true);
    localStorage.setItem("soundEnabled", "true");
  }, [enabled]);

  const start = useCallback(() => {
    // Must be called on a user gesture
    pendingStartRef.current = false;
    startNow();
  }, [startNow]);

  const toggle = useCallback(() => {
    if (enabled) stop();
    else start();
  }, [enabled, start, stop]);

  // On mount: restore preference, and arm a one-time listener for first gesture
  useEffect(() => {
    const pref = localStorage.getItem("soundEnabled");
    if (pref === "true") {
      pendingStartRef.current = true;
      setEnabled(false);
    }

    const onFirstGesture = () => {
      if (pendingStartRef.current) start();
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };
    window.addEventListener("pointerdown", onFirstGesture, { passive: true });
    window.addEventListener("keydown", onFirstGesture);
    return () => {
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      stop();
    };
  }, [start, stop]);

  return { enabled, start, stop, toggle };
}

export default useChiptuneAudio;

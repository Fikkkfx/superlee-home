import { useCallback, useEffect, useRef, useState } from "react";

export function useBacksound(src: string, defaultVolume = 0.15) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pendingStartRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  const ensureAudio = useCallback(() => {
    const g = window as any;
    const key = "__backsound_audio__";
    let el: HTMLAudioElement | null = g[key] || null;
    if (!el) {
      el = new Audio(src);
      el.loop = true;
      el.preload = "auto";
      el.crossOrigin = "anonymous";
      el.volume = defaultVolume;
      g[key] = el;
    } else {
      // keep current play state; update src if different
      if (src && el.src !== src) {
        const wasPlaying = !el.paused;
        el.src = src;
        el.load();
        if (wasPlaying) void el.play().catch(() => {});
      }
      if (typeof defaultVolume === "number") el.volume = defaultVolume;
    }
    audioRef.current = el;
    return el;
  }, [src, defaultVolume]);

  const stop = useCallback(() => {
    const el = ensureAudio();
    try {
      el.pause();
    } catch {}
    setEnabled(false);
    localStorage.setItem("soundEnabled", "false");
  }, [ensureAudio]);

  const start = useCallback(async () => {
    const el = ensureAudio();
    try {
      await el.play();
      setEnabled(true);
      localStorage.setItem("soundEnabled", "true");
    } catch {
      // play may fail if not user gesture; keep pending
      pendingStartRef.current = true;
      setEnabled(false);
    }
  }, [ensureAudio]);

  const toggle = useCallback(() => {
    const el = ensureAudio();
    if (!el.paused) stop();
    else void start();
  }, [ensureAudio, start, stop]);

  useEffect(() => {
    const el = ensureAudio();
    setEnabled(!el.paused);

    const pref = localStorage.getItem("soundEnabled");
    if (pref === "true" && el.paused) pendingStartRef.current = true;

    const onFirstGesture = () => {
      if (pendingStartRef.current) {
        pendingStartRef.current = false;
        void start();
      }
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
    };
    window.addEventListener("pointerdown", onFirstGesture, { passive: true });
    window.addEventListener("keydown", onFirstGesture);

    const sync = () => setEnabled(!el.paused);
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);

    return () => {
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      // Do NOT stop or dispose; persist across route changes
    };
  }, [ensureAudio, start]);

  return { enabled, start, stop, toggle };
}

export default useBacksound;

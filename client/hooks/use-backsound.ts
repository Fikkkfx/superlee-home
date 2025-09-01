import { useCallback, useEffect, useRef, useState } from "react";

export function useBacksound(src: string, defaultVolume = 0.15) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pendingStartRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      const el = new Audio(src);
      el.loop = true;
      el.preload = "auto";
      el.crossOrigin = "anonymous";
      el.volume = defaultVolume;
      audioRef.current = el;
    }
    return audioRef.current!;
  }, [src, defaultVolume]);

  const stop = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.pause();
      el.currentTime = 0;
    } catch {}
    setEnabled(false);
    localStorage.setItem("soundEnabled", "false");
  }, []);

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
    if (enabled) stop();
    else void start();
  }, [enabled, start, stop]);

  useEffect(() => {
    const pref = localStorage.getItem("soundEnabled");
    if (pref === "true") pendingStartRef.current = true;

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

    return () => {
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      stop();
      if (audioRef.current) {
        audioRef.current.src = "";
        audioRef.current.load();
        audioRef.current = null;
      }
    };
  }, [start, stop]);

  return { enabled, start, stop, toggle };
}

export default useBacksound;

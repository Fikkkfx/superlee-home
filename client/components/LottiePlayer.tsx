import { useEffect, useId, useRef, useState } from "react";

interface LottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}

// Wrapper around @lottiefiles/lottie-player with graceful fallback when JSON is invalid
export default function LottiePlayer({ src, autoplay = true, loop = true, className, style, speed = 1 }: LottiePlayerProps) {
  const id = useId();
  const ref = useRef<any>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const scriptId = "lottiefiles-player-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      s.type = "module";
      document.head.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    const onError = () => setFailed(true);
    el.addEventListener("error", onError as any);
    return () => {
      el.removeEventListener("error", onError as any);
    };
  }, [ref.current]);

  if (failed) {
    return (
      <div className={className} style={style}>
        <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-center text-white/80">
          Animation gagal dimuat. Mohon kirim file Lottie JSON/.lottie yang valid.
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - JSX intrinsic element will be defined by the web component script at runtime
    <lottie-player
      key={id}
      ref={ref}
      src={src}
      autoplay={autoplay}
      loop={loop}
      speed={speed}
      renderer="svg"
      background="transparent"
      class={className}
      style={style as any}
    />
  );
}

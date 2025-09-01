import { useEffect, useId } from "react";

interface LottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}

// Lightweight wrapper around @dotlottie/player web component to play .json animations without extra deps
export default function LottiePlayer({ src, autoplay = true, loop = true, className, style, speed = 1 }: LottiePlayerProps) {
  const id = useId();

  useEffect(() => {
    const scriptId = "dotlottie-player-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js";
      s.type = "module";
      document.head.appendChild(s);
    }
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - JSX intrinsic element will be defined by the web component script at runtime
    <dotlottie-player
      key={id}
      src={src}
      autoplay={autoplay}
      loop={loop}
      speed={speed}
      class={className}
      style={style as any}
    />
  );
}

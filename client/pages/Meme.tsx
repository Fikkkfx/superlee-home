import SiteLayout from "@/components/SiteLayout";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Meme() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const BASE_W = 1280;
  const BASE_H = 800;
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const compute = () => {
      const w = containerRef.current?.clientWidth ?? BASE_W;
      const s = Math.min(1, w / BASE_W);
      setScale(s);
    };
    compute();
    const ro = new ResizeObserver(() => compute());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  useEffect(() => {
    // Best-effort focus so keyboard works if the app uses shortcuts
    iframeRef.current?.focus();
  }, []);

  return (
    <SiteLayout>
      <section className="relative">
        <div className="container mx-auto px-4 grid grid-rows-[auto,1fr] gap-3 min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] pt-8 md:pt-10">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">
            Meme Generator
          </h1>

          <div
            ref={containerRef}
            className="mx-auto w-full max-w-[1200px] rounded-2xl border border-white/20 bg-white/5 md:backdrop-blur md:animate-enter-blur overflow-hidden"
            style={{ animationDelay: "160ms", height: Math.round(BASE_H * scale) }}
          >
            <div
              className="origin-top mx-auto"
              style={{ width: BASE_W, height: BASE_H, transform: `scale(${scale})` }}
            >
              <iframe
                ref={iframeRef}
                src="https://meme-generator-omega-one.vercel.app/"
                title="Meme Generator"
                className="block"
                style={{ border: 0, width: BASE_W, height: BASE_H }}
                allow="fullscreen; clipboard-write; encrypted-media"
                sandbox="allow-forms allow-scripts allow-same-origin"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

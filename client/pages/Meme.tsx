import SiteLayout from "@/components/SiteLayout";
import { useLayoutEffect, useState } from "react";

export default function Meme() {
  const [height, setHeight] = useState(640);

  useLayoutEffect(() => {
    const compute = () => {
      const vh = typeof window !== "undefined" ? window.innerHeight : 800;
      // Reserve space for header/footer paddings; let embed use full width
      const h = Math.max(520, Math.floor(vh * 0.82));
      setHeight(h);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <SiteLayout>
      <section className="relative">
        <div className="container mx-auto px-4 grid grid-rows-[auto,1fr] gap-3 min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] pt-8 md:pt-10">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">
            Meme Generator
          </h1>

          <div
            className="mx-auto w-full max-w-[1200px] rounded-2xl border border-white/20 bg-white/5 md:backdrop-blur md:animate-enter-blur overflow-hidden"
            style={{ height, animationDelay: "160ms" }}
          >
            <iframe
              src="https://meme-generator-omega-one.vercel.app/"
              title="Meme Generator"
              className="w-full h-full block"
              style={{ border: 0 }}
              allow="fullscreen; clipboard-write; encrypted-media"
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

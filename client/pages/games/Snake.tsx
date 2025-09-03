import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function SnakeSuperlee() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const focusGame = () => {
      iframe?.focus();
      try {
        iframe?.contentWindow?.focus();
      } catch {}
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        const target = e.target as HTMLElement | null;
        const isFormField = !!target && (
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          (target as HTMLElement).isContentEditable === true
        );
        if (!isFormField) {
          e.preventDefault();
          focusGame();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown, { passive: false });
    focusGame();

    const enterHandler = () => focusGame();
    iframe?.addEventListener("mouseenter", enterHandler);
    iframe?.addEventListener("pointerdown", enterHandler);

    return () => {
      document.removeEventListener("keydown", onKeyDown as EventListener);
      iframe!.removeEventListener("mouseenter", enterHandler);
      iframe!.removeEventListener("pointerdown", enterHandler);
    };
  }, []);

  return (
    <SiteLayout>
      <section className="relative">
        <div className="container mx-auto px-4 grid grid-rows-[auto,1fr,auto] gap-3 min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] pt-8 md:pt-10">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">
            Snake Superlee
          </h1>

          <div
            className="mx-auto rounded-2xl border border-white/20 bg-white/5 backdrop-blur animate-enter-blur overflow-hidden"
            style={{ animationDelay: "160ms", width: 432, height: 768 }}
          >
            <iframe
              ref={iframeRef}
              tabIndex={0}
              src="https://snake-superlee.vercel.app/"
              title="Snake Superlee"
              className="w-full h-full block"
              style={{ border: 0 }}
              scrolling="no"
              allow="fullscreen; gamepad; accelerometer; gyroscope; clipboard-write; encrypted-media"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          <div className="flex justify-center pb-4 md:pb-6">
            <Link
              to="/game"
              className="rounded-full bg-white/20 px-5 py-2 text-white hover:bg-white/30 transition animate-retro-pop"
              style={{ animationDelay: "240ms" }}
            >
              Back to Game Menu
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

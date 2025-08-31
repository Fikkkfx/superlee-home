import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

export default function Index() {
  return (
    <SiteLayout>
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/30 to-sky-300/20" />
        <div className="container relative mx-auto text-center">
          <h1 className="title-pop mx-auto max-w-3xl text-[44px] leading-[48px] md:text-[67px] md:leading-[80px]">
            SUPERLEE AI AGENT
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base font-semibold text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
            Meet Ippy, Story's official mascot. Ippy is ever‑changing, shape‑shifting, and can take any form imaginable — just like IP itself.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/how-to-buy"
              className="rounded-xl bg-gradient-to-b from-white to-sky-100 px-6 py-3 text-sm font-extrabold text-sky-800 shadow-[0_6px_0_rgba(0,0,0,0.35)] ring-2 ring-white/70 hover:translate-y-[1px] hover:shadow-[0_4px_0_rgba(0,0,0,0.35)] transition"
            >
              BUY NOW
            </Link>
          </div>
          <div className="pointer-events-auto absolute bottom-6 left-0 right-0 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur hover:bg-white/20 transition"
              aria-label="Scroll down"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
              Scroll Down
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

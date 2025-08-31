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
          <div className="mx-auto mt-5 max-w-[815px] text-sm md:text-base font-semibold text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
            <div>Meet Superlee, From the community, for the community , amplified by innovation.</div>
            <div>SuperLee Agent thrives where trust meets technology, shaping the future of decentralized identity</div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/how-to-buy"
              className="rounded-xl bg-gradient-to-b from-white to-sky-100 px-6 py-3 text-sm font-extrabold text-sky-800 shadow-[0_6px_0_rgba(0,0,0,0.35)] ring-2 ring-white/70 hover:translate-y-[1px] hover:shadow-[0_4px_0_rgba(0,0,0,0.35)] transition"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

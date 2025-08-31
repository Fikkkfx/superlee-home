import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

export default function Index() {
  return (
    <SiteLayout>
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative mx-auto text-center">
          <h1 className="title-pop mx-auto max-w-3xl text-[44px] leading-[48px] md:text-[67px] md:leading-[80px]">
            SUPERLEE AI AGENT
          </h1>
          <div className="mx-auto mt-5 max-w-[815px] text-sm md:text-base font-semibold text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
            <div>Meet Superlee, From the community, for the community , amplified by innovation.</div>
            <div>SuperLee Agent thrives where trust meets technology, shaping the future of decentralized identity</div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

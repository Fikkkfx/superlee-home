import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

export default function Index() {
  return (
    <SiteLayout>
      <section className="relative py-28 md:py-36">
        {/* global overlay applied via body::before */}
        <div className="container relative mx-auto text-center">
          <h1 className="title-pop mx-auto max-w-3xl text-[44px] leading-[48px] md:text-[67px] md:leading-[80px]">
            SUPERLEE AI AGENT
          </h1>
          <div className="mx-auto mt-5 max-w-[815px] font-display uppercase text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)] text-[10px] leading-[18px] sm:text-[11px] sm:leading-[19px] md:text-[12px] md:leading-[20px] lg:text-[13px] lg:leading-[22px] tracking-[0.5px] font-normal">
            <div>
              <p>
                Meet Superlee, By the community, for the community, powered by
                innovation. Superlee agents thrive where trust meets technology,
                shaping the future of decentralized identity.
              </p>
            </div>
            <div>
              SuperLee Agent thrives where trust meets technology, shaping the
              future of decentralized identity
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

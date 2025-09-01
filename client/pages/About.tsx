import SiteLayout from "@/components/SiteLayout";

export default function About() {
  return (
    <SiteLayout>
      <section className="relative py-28">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="title-pop text-center text-[40px] leading-[60px] animate-enter-up">
            ABOUT SUPERLEE AGEnt
          </h1>

          {/* Card */}
          <div className="relative mx-auto mt-8 max-w-4xl rounded-2xl border border-white/20 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur animate-enter-blur">
            {/* subtle gradient frame */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
              style={{
                background:
                  "radial-gradient(1200px 200px at -10% 0%, rgba(255,255,255,0.14), transparent), radial-gradient(1000px 160px at 120% 0%, rgba(255,255,255,0.12), transparent), linear-gradient(135deg, rgba(3,105,161,0.25), rgba(2,132,199,0.18))",
              }}
            />

            <div className="space-y-4 text-sm leading-6 text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] md:text-base md:leading-7">
              <div className="animate-enter-up" style={{ animationDelay: "40ms" }}>
                Superlee is a community-based, multi-purpose AI agent designed
                to help anyone build, manage, and protect identities and work in
                the decentralized era. With a fun yet powerful retro style,
                Superlee prioritizes privacy, transparency, and complete user
                control.
              </div>

              <div className="animate-enter-up" style={{ animationDelay: "120ms" }}>
                Superlee offers a wide range of skills: rapid research,
                information curation, content creation, repetitive task
                automation, community moderation, and on- and off-chain action
                execution. All of these capabilities are modular and extensible,
                allowing Superlee to grow with the needs of the ecosystem and
                the imagination of the community.
              </div>

              <div className="animate-enter-up" style={{ animationDelay: "200ms" }}>
                Our mission is simple: to bridge creativity and trust. With
                verifiable actions and open collaboration, Superlee is an agile,
                everyday partner that fosters the creation of new, sustainable
                work, communities, and economies.
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

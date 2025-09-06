import SiteLayout from "@/components/SiteLayout";

export default function AnnouncementNFT() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <h1 className="title-pop text-3xl md:text-5xl animate-retro-pop">
            SUPERLEE AGENT NFT IS COMING
          </h1>
          <p
            className="mt-3 max-w-3xl text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] animate-enter-blur"
            style={{ animationDelay: "120ms" }}
          >
            Something is moving in the shadows... The wait is almost over. Soon,
            the world will finally meet Superlee Agent NFT. Stay sharp. Stay
            tuned. Get ready to witness the next chapter of Superlee.
          </p>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
            <div className="relative aspect-[16/9] w-full">
              <video
                src="https://cdn.builder.io/o/assets%2F2711b768900f460f84e959042bd91f7e%2Fbaa9f8d990c246f38a95b2de3933a942?alt=media&token=60c29249-b9ee-40f4-978c-5b5ade55dd80&apiKey=2711b768900f460f84e959042bd91f7e"
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
                aria-label="Announcement thumbnail video"
              />
            </div>
            <div className="p-5 md:p-6">
              <p className="text-white/90">
                Follow the announcement on X for more details and live updates.
              </p>
              <div className="mt-4">
                <a
                  href="https://x.com/Superlee_Agent/status/1964016895193207029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600/90 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                >
                  View on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

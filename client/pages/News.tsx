import SiteLayout from "@/components/SiteLayout";

const news = [
  {
    title: "Why We're Building SuperLee Agent",
    excerpt:
      "A look into how community-driven agents can unlock IP-safe, decentralized identity for everyone.",
    href: "#",
  },
  {
    title: "Roadmap: Q4 Launch Milestones",
    excerpt:
      "From beta testers to mainnet-ready tools — what to expect in the next release cycle.",
    href: "#",
  },
  {
    title: "Ecosystem Partners Announced",
    excerpt:
      "New integrations that make SuperLee Agent more useful across your daily workflows.",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <section className="relative">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="title-pop text-4xl md:text-6xl animate-retro-pop">
            News
          </h1>
          <p
            className="mt-4 max-w-3xl text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] animate-enter-blur"
            style={{ animationDelay: "120ms" }}
          >
            Data is the biggest bottleneck in the next wave of AI development.
            SuperLee Agent is the bridge between community, IP, and trustworthy
            data — here are the latest updates.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((_, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur animate-retro-pop opacity-80 cursor-not-allowed select-none"
                style={{ animationDelay: `${80 * i + 80}ms` }}
                aria-disabled
              >
                <div
                  className="flex aspect-[16/9] w-full items-center justify-center"
                  style={{
                    backgroundImage:
                      "radial-gradient(1200px 200px at -10% 0%, rgba(255,255,255,0.2), transparent), radial-gradient(1000px 160px at 120% 0%, rgba(255,255,255,0.18), transparent), linear-gradient(135deg, rgba(3,105,161,0.35), rgba(2,132,199,0.25))",
                    backgroundSize: "cover",
                  }}
                >
                  <span className="font-display text-2xl text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

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
          <h1 className="title-pop text-4xl md:text-6xl">News</h1>
          <p className="mt-4 max-w-3xl text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">
            Data is the biggest bottleneck in the next wave of AI development. SuperLee Agent is the
            bridge between community, IP, and trustworthy data — here are the latest updates.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((n, i) => (
              <a
                key={i}
                href={n.href}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              >
                {/* media */}
                <div
                  className="aspect-[16/9] w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(1200px 200px at -10% 0%, rgba(255,255,255,0.2), transparent), radial-gradient(1000px 160px at 120% 0%, rgba(255,255,255,0.18), transparent), linear-gradient(135deg, rgba(3,105,161,0.35), rgba(2,132,199,0.25))",
                    backgroundSize: "cover",
                  }}
                />
                {/* content */}
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">
                    {n.title}
                  </h3>
                  <p className="text-sm text-white/85 drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">{n.excerpt}</p>
                  <div className="pt-2 text-xs font-extrabold text-sky-200 opacity-0 transition group-hover:opacity-100">
                    Read more →
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0 transition group-hover:ring-2 group-hover:ring-white/60" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

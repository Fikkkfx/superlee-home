import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";

const games = [
  {
    title: "Cooming soon",
    to: "/game/flappy",
    disabled: true as const,
  },
  {
    title: "Cooming soon",
    to: "/game/snake",
    disabled: true as const,
  },
  {
    title: "Cooming soon",
    to: "/game/2048",
    disabled: true as const,
  },
];

export default function Game() {
  return (
    <SiteLayout>
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">Choose a Game</h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/90 animate-enter-blur" style={{ animationDelay: "120ms" }}>
            Pick a game below. Each game opens its own page.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {games.map((g, i) => (
              g.disabled ? (
                <div
                  key={g.to}
                  aria-disabled
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur animate-retro-pop opacity-70 cursor-not-allowed"
                  style={{ animationDelay: `${i * 100 + 160}ms` }}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">{g.title}</h3>
                  </div>
                </div>
              ) : (
                <Link
                  key={g.to}
                  to={g.to}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] animate-retro-pop"
                  style={{ animationDelay: `${i * 100 + 160}ms` }}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">{g.title}</h3>
                    <p className="mt-1 text-sm text-white/85 drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">{g.description}</p>
                    <div className="mt-4 text-xs font-extrabold text-sky-200 opacity-0 transition group-hover:opacity-100">Play →</div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0 transition group-hover:ring-2 group-hover:ring-white/60" />
                </Link>
              )
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

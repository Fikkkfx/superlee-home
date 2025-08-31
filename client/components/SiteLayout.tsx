import { Link, NavLink, useLocation } from "react-router-dom";
import { PropsWithChildren } from "react";

const navItems = [
  { to: "/about", label: "ABOUT" },
  { to: "/ippyfy", label: "AGENT" },
  { to: "/how-to-buy", label: "NEWS" },
  { to: "/faq", label: "FAQ" },
];

function Header() {

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="w-full bg-sky-700/70">
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F881566104a0e4a759178c37402fa6c33?format=webp&width=800"
              alt="SUPERLEE logo"
              className="h-7 w-7 object-contain"
            />
            <span className="font-display text-[10px] leading-7 tracking-[0.75px] text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">SUPERLEE AI AGENT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 justify-start">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `font-semibold text-white/95 tracking-wider text-xs md:text-sm transition hover:text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] ${
                    isActive ? "underline decoration-white/80" : ""
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="X (Twitter)"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <img src="https://cdn.simpleicons.org/x/ffffff" alt="X" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Discord"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <img src="https://cdn.simpleicons.org/discord/ffffff" alt="Discord" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Dexscreener"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2Fca0d034b36c540688dd9993e2895dc92?format=webp&width=800" alt="Dexscreener" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function SiteLayout({ children }: PropsWithChildren) {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="-mt-0.5">
        <div className="w-full bg-sky-700/70 backdrop-blur-md">
          <div className="container mx-auto flex items-center justify-center py-3">
            <span className="text-white/90 text-xs drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">© {new Date().getFullYear()} SUPERLEE AI AGENT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link, NavLink, useLocation } from "react-router-dom";
import { PropsWithChildren, useState } from "react";

const navItems = [
  { to: "/about", label: "ABOUT" },
  { to: "/how-to-buy", label: "HOW TO BUY" },
  { to: "/faq", label: "FAQ" },
  { to: "/ippyfy", label: "IPPYFY" },
];

function Header() {
  const [copied, setCopied] = useState(false);
  const ca = "0xIPPYONSTORY0000000000000000000000000000";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="w-full bg-pink-300/70">
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-pink-500 shadow">★</span>
            <span className="font-display text-xl tracking-wider text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">IPPY</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
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
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(ca);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold text-pink-600 shadow hover:bg-white transition"
          >
            {copied ? "COPIED" : "COPY CA"}
          </button>
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
      <footer className="py-8 text-center text-white/90 text-xs drop-shadow-[0_2px_0_rgba(0,0,0,0.45)]">
        © {new Date().getFullYear()} IPPY ON STORY
      </footer>
    </div>
  );
}

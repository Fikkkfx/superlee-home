import SiteLayout from "@/components/SiteLayout";
import LottiePlayer from "@/components/LottiePlayer";
import { Link } from "react-router-dom";

export default function FlappySuperlee() {
  return (
    <SiteLayout>
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">Flappy Superlee</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/90 animate-enter-blur" style={{ animationDelay: "120ms" }}>
            Tap/Click to flap — simple and fun! This is an early preview of the first game.
          </p>

          <div className="mx-auto mt-10 grid place-items-center">
            <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-4 animate-enter-blur" style={{ animationDelay: "200ms" }}>
              <LottiePlayer
                src="https://cdn.builder.io/o/assets%2F2711b768900f460f84e959042bd91f7e%2Fa3baa3bb62a94d6c9a402a3cdafc9749?alt=media&token=94eddbb2-dfa2-423c-b869-32e5e0d6c8f9&apiKey=2711b768900f460f84e959042bd91f7e"
                autoplay
                loop
                className="w-full h-full"
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button className="rounded-full bg-sky-500 px-5 py-2 text-white font-semibold shadow hover:bg-sky-600 transition animate-retro-pop" style={{ animationDelay: "320ms" }}>
                Play
              </button>
              <Link to="/game" className="rounded-full bg-white/20 px-5 py-2 text-white hover:bg-white/30 transition animate-retro-pop" style={{ animationDelay: "360ms" }}>
                Back to Games
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

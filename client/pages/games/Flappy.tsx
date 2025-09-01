import SiteLayout from "@/components/SiteLayout";
import LottiePlayer from "@/components/LottiePlayer";
import { Link } from "react-router-dom";

export default function FlappySuperlee() {
  return (
    <SiteLayout>
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">
            Flappy Superlee
          </h1>
          <div
            className="mx-auto mt-8 w-full max-w-4xl h-[60vh] md:h-[70vh] rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-2 animate-enter-blur"
            style={{ animationDelay: "180ms" }}
          >
            <LottiePlayer
              src="https://cdn.builder.io/o/assets%2F2711b768900f460f84e959042bd91f7e%2F84a2902c183c431d9f69eeaf98f10d77?alt=media&token=6e33e952-70fb-47fd-8baf-aa1ac2838ef3&apiKey=2711b768900f460f84e959042bd91f7e"
              autoplay
              loop
              className="w-full h-full"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/game"
              className="rounded-full bg-white/20 px-5 py-2 text-white hover:bg-white/30 transition animate-retro-pop"
              style={{ animationDelay: "240ms" }}
            >
              Back to Game Menu
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

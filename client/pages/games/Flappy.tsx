import SiteLayout from "@/components/SiteLayout";
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
            <iframe
              src="https://flappy-superlee.vercel.app/"
              title="Flappy Superlee"
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin"
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

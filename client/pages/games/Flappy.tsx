import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";

export default function FlappySuperlee() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="container mx-auto px-4 grid grid-rows-[auto,1fr,auto] gap-4 min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)]">
          <h1 className="title-pop text-center text-4xl md:text-6xl animate-retro-pop">
            Flappy Superlee
          </h1>
          <div
            className="mx-auto w-full max-w-6xl h-[calc(100vh-220px)] md:h-[calc(100vh-260px)] rounded-2xl border border-white/20 bg-white/5 overflow-hidden animate-enter-blur"
            style={{ animationDelay: "160ms" }}
          >
            <iframe
              src="https://flappy-superlee.vercel.app/"
              title="Flappy Superlee"
              className="w-full h-full"
              style={{ border: 0 }}
              scrolling="no"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          <div className="flex justify-center pb-4 md:pb-6">
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

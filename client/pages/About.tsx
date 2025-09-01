import SiteLayout from "@/components/SiteLayout";

export default function About() {
  return (
    <SiteLayout>
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="title-pop text-center text-5xl md:text-6xl">ABOUT IPPY</h1>

          {/* Card */}
          <div className="relative mx-auto mt-8 max-w-4xl rounded-2xl border border-white/20 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur">
            {/* subtle gradient frame */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
              style={{
                background:
                  "radial-gradient(1200px 200px at -10% 0%, rgba(255,255,255,0.14), transparent), radial-gradient(1000px 160px at 120% 0%, rgba(255,255,255,0.12), transparent), linear-gradient(135deg, rgba(3,105,161,0.25), rgba(2,132,199,0.18))",
              }}
            />

            <div className="space-y-4 text-sm leading-6 text-white/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.45)] md:text-base md:leading-7">
              <p>
                In the wild IP blockchain depths, Ippy burst forth from Story Protocol’s
                AI‑native magic, guarding the world of IP from thieves and copycats. Like
                intellectual property itself, Ippy is amorphous, infinitely malleable, and can
                take any form.
              </p>
              <p>
                Ever morphing like true IP, Ippy shape‑shifts from presidential contender to meme
                king, chomping data pirates and fake assets whenever they appear. Ippy represents,
                literally and figuratively, all of the things we can dream up, create, and define
                as IP.
              </p>
              <p>
                Now, Ippy rocks the Storyverse with wild antics, crazy dances, and even some IRL
                appearances — inspiring the IP revolution through memes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

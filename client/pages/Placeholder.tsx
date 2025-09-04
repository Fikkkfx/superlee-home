import SiteLayout from "@/components/SiteLayout";

export default function Placeholder({ title }: { title: string }) {
  return (
    <SiteLayout>
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="title-pop text-4xl md:text-6xl animate-retro-pop">
            {title}
          </h1>
          <p
            className="mx-auto mt-4 px-4 text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)] font-display text-xs sm:text-sm md:text-base animate-enter-blur"
            style={{ animationDelay: "120ms" }}
          >
            Cooming soon!!!{" "}
            <a
              href="https://x.com/Superlee_Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 md:ml-2.5 text-white underline hover:text-white/90"
            >
              Check out our Twitter for more updates
            </a>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

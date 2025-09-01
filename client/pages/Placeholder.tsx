import SiteLayout from "@/components/SiteLayout";

export default function Placeholder({ title }: { title: string }) {
  return (
    <SiteLayout>
      <section className="relative py-24">
        <div className="container mx-auto text-center">
          <h1 className="title-pop text-5xl md:text-6xl animate-retro-pop">{title}</h1>
          <p className="mx-auto mt-6 text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)] font-display whitespace-nowrap text-xs sm:text-sm md:text-base">
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

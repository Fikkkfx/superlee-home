import SiteLayout from "@/components/SiteLayout";

export default function Placeholder({ title }: { title: string }) {
  return (
    <SiteLayout>
      <section className="relative py-24">
        <div className="container mx-auto text-center">
          <h1 className="title-pop text-5xl md:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
            This page will be filled soon. Follow the instructions in the chat
            to refine the content.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

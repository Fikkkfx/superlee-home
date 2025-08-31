export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="relative py-24">
      <div className="container mx-auto text-center">
        <h1 className="title-pop text-5xl md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
          Halaman ini akan segera diisi. Lanjutkan instruksi di chat untuk menyempurnakan konten.
        </p>
      </div>
    </section>
  );
}

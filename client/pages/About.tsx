import SiteLayout from "@/components/SiteLayout";

export default function About() {
  return (
    <SiteLayout>
      <section className="relative py-28">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="title-pop text-center text-[40px] leading-[60px]">ABOUT SUPERLEE AGEnt</h1>

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
                Superlee adalah AI Agent serba‑guna yang lahir dari komunitas—dirancang untuk
                membantu siapa pun membangun, mengelola, dan melindungi identitas serta karya di
                era terdesentralisasi. Dengan gaya retro yang fun namun bertenaga, Superlee tetap
                mengutamakan privasi, transparansi, dan kontrol penuh di tangan pengguna.
              </p>
              <p>
                Superlee memiliki banyak “skills”: riset cepat, kurasi informasi, pembuatan konten,
                otomasi tugas berulang, moderasi komunitas, hingga eksekusi aksi on/off‑chain.
                Semua kemampuan ini modular dan dapat diperluas, sehingga Superlee tumbuh
                seiring kebutuhan ekosistem dan imajinasi komunitas.
              </p>
              <p>
                Misi kami sederhana: menjembatani kreativitas dan kepercayaan. Dengan aksi yang
                dapat diverifikasi dan kolaborasi terbuka, Superlee menjadi partner harian yang
                gesit—mendorong lahirnya karya, komunitas, dan ekonomi baru yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

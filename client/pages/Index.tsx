import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as { message: string };
      setExampleFromServer(data.message);
    } catch (error) {
      // ignore
    }
  };

  return (
    <SiteLayout>
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-200/30 to-fuchsia-300/20" />
        <div className="container relative mx-auto text-center">
          <h1 className="title-pop mx-auto max-w-3xl text-[44px] leading-[48px] md:text-[67px] md:leading-[80px]">
            SUPERLEE AI AGENT
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base font-semibold text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
            Meet Ippy, Story's official mascot. Ippy is ever‑changing, shape‑shifting, and can take any form imaginable — just like IP itself.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/how-to-buy"
              className="rounded-xl bg-gradient-to-b from-white to-fuchsia-100 px-6 py-3 text-sm font-extrabold text-fuchsia-700 shadow-[0_6px_0_rgba(0,0,0,0.35)] ring-2 ring-white/70 hover:translate-y-[1px] hover:shadow-[0_4px_0_rgba(0,0,0,0.35)] transition"
            >
              BUY NOW
            </Link>
          </div>
          <p className="mt-10 hidden">{exampleFromServer}</p>
        </div>
      </section>
    </SiteLayout>
  );
}

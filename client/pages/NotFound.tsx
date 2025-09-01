import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="title-pop text-6xl">404</h1>
          <p className="mt-4 text-white/95 drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]">
            Oops! Page not found
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-md bg-white/90 px-4 py-2 font-bold text-pink-600 shadow"
          >
            Return to Home
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;

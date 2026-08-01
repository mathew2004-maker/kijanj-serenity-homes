import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="heroGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="30" height="30" fill="white" opacity="0.03" />
                  <rect x="30" y="30" width="30" height="30" fill="white" opacity="0.03" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroGrid)" />
            </svg>
          </div>
          <div className="relative flex flex-col items-center px-6 py-20 text-center md:py-28">
            <h1 className="max-w-2xl text-4xl font-medium leading-tight text-white md:text-5xl">
              Quality rental homes you can trust
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Clean, safe, and affordable properties managed with care. Find your next home with a landlord who listens.
            </p>
            <a
              href="#properties"
              onClick={handleScroll}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-medium text-slate-900 transition-all duration-200 hover:bg-slate-100"
            >
              View properties
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
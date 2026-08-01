import { useEffect, useRef } from "react";
import { Home } from "lucide-react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-6");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-6");
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-slate-50 px-6 py-20">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-14 transition-all duration-700 ease-out md:grid-cols-2"
      >
      <div className="flex h-80 items-center justify-center overflow-hidden rounded-xl md:h-auto">
        <img
          src="/photo.jpg"
          alt="About the business"
          className="h-full w-full object-cover"
        />
      </div>
        <div>
          <p className="mb-3 text-sm font-medium text-slate-400">About us</p>
          <h2 className="text-3xl font-medium leading-snug text-slate-900">
            One Year of Putting tenants first
          </h2>
          <p className="mt-5 text-base text-slate-500">
            For one year now, we have been matching families,comrades and professionals with rental homes that feel right from day one. We believe everyone deserves a clean, safe, and well-maintained place to live.
          </p>
          <p className="mt-4 text-base text-slate-500">
            Our properties are regularly inspected, promptly repaired, and priced fairly. When you rent with us, you get more than a key — you get peace of mind.
          </p>
          <div className="mt-8 flex gap-10">
            <div>
              <p className="text-3xl font-medium text-slate-900">1+</p>
              <p className="mt-1 text-sm text-slate-400">Years experience</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-slate-900">20+</p>
              <p className="mt-1 text-sm text-slate-400">Happy tenants</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-slate-900">0</p>
              <p className="mt-1 text-sm text-slate-400">Available spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
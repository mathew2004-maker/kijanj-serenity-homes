import { useEffect, useRef } from "react";
import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function Properties() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="mb-12 text-center transition-all duration-700 ease-out"
        >
          <p className="mb-3 text-sm font-medium text-slate-400">Our rentals</p>
          <h2 className="text-3xl font-medium text-slate-900">
            Property gallery
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            A glimpse into our houses — interiors, exteriors, and the details that matter.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
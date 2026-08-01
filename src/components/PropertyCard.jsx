import { MapPin, Bed, Bath, ArrowRight } from "lucide-react";

export default function PropertyCard({ property, index }) {
  return (
    <article
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-900 hover:bg-slate-50">
          View details
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>
    </article>
  );
}
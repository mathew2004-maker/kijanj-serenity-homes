import { Home } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    svg: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 pt-12 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 text-lg font-medium text-slate-900">
            <Home className="h-5 w-5" strokeWidth={1.8} />
            KIJANJ SERENITY
          </a>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
          <p className="text-sm text-slate-400">
             KIJANJ SERENITY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
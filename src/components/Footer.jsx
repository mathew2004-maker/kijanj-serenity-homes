import { Home, ArrowUpRight } from "lucide-react";

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

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of service", href: "#" },
  { label: "Rental agreement", href: "#" },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="flex items-center gap-2 text-lg font-medium text-slate-900">
              <Home className="h-5 w-5" strokeWidth={1.8} />
              Kijani Serenity Homes
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Quality rental homes managed with care. Clean, safe, and affordable properties for families and professionals.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">Quick links</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">Legal</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="text-sm font-medium text-slate-900">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <li>Cedar along Meru-Maua Road</li>
              <li>Close to Meru University</li>
              <li className="pt-1">
                <a href="tel:+254 (727) 311 599" className="transition-colors hover:text-slate-900">+254 (727) 311 599</a>
              </li>
              <li>
                <a href="mailto:hello@kijaniserenity.rent" className="transition-colors hover:text-slate-900">hello@kijaniserenity.rent</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm text-slate-400"> Kijani Serenity Homes. All rights reserved.</p>
          <p className="text-sm text-slate-400">Crafted with care for quality living.</p>
        </div>
      </div>
    </footer>
  );
}
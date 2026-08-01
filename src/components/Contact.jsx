import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="grid gap-14 transition-all duration-700 ease-out md:grid-cols-2"
        >
          <div>
            <p className="mb-3 text-sm font-medium text-slate-400">Get in touch</p>
            <h2 className="text-3xl font-medium text-slate-900">
              Ready to move in?
            </h2>
            <p className="mt-5 text-base text-slate-500">
              Send us a message and we will get back to you within one business day. You can also call or message us directly.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Phone className="h-5 w-5 text-slate-600" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium text-slate-900">+254 97 038-831</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Mail className="h-5 w-5 text-slate-600" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium text-slate-900">hello@kijanjserenity.rent</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <MessageCircle className="h-5 w-5 text-slate-600" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="font-medium text-slate-900">+254 97 038-831</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/15559876543"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
              Message on WhatsApp
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                  <svg className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">Message sent!</h3>
                <p className="mt-2 text-sm text-slate-500">We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block text-sm text-slate-500">Full name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-slate-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-500">Email address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-slate-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-500">Phone number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-slate-900"
                    placeholder="+254 000-0000"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-500">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-slate-900"
                    placeholder="I am interested in..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-slate-800"
                >
                  Send message
                  <Send className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.906174445336!2d37.719542200000014!3d0.13866445000000424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17883c9c8a6c55e5%3A0xe97690d5690c3599!2sNkomo!5e0!3m2!1sen!2ske!4v1785598895159!5m2!1sen!2ske"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
      </div>
    </section>
  );
}


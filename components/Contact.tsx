"use client";
import { useInView } from "react-intersection-observer";

const contacts = [
  { icon: "📧", label: "Email", value: "yohansaleba@gmail.com", href: "mailto:yohansaleba@gmail.com" },
  { icon: "📱", label: "Phone", value: "+251 92 288 9499", href: "tel:+251922889499" },
  { icon: "✈️", label: "Telegram", value: "@Johnyohans", href: "https://t.me/Johnyohans" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#F5C518]" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Let&apos;s Connect</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Get in Touch</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm sm:text-base">
            Open to entry-level legal roles, internships, and research opportunities.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-2xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex flex-col items-center gap-3 p-6 sm:p-7 rounded-2xl border border-gray-100 bg-[#FAFAFA] text-center hover:border-[#F5C518] transition-colors shadow-sm"
            >
              <span className="text-3xl">{c.icon}</span>
              <span className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">{c.label}</span>
              <span className="text-gray-400 text-xs break-all">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="flex justify-center pb-16">
          <a
            href="/cv/Yohans Alebachew Professional CV Resume A4.pdf"
            download
            className="px-8 py-3 rounded-full font-bold text-[#1a1a1a] bg-[#F5C518] hover:bg-[#E6B800] transition-colors text-sm text-center"
          >
            ⬇ Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

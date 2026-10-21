"use client";
import { useEffect, useState } from "react";

const roles = ["Political Science Professional", "Gold Medalist 🥇", "NGO & Public Policy Ready", "Graduated with Distinction"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const cur = roles[idx];
    if (typing) {
      if (text.length < cur.length) {
        const t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2200);
      return () => clearTimeout(t);
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 28);
        return () => clearTimeout(t);
      }
      setIdx((i) => (i + 1) % roles.length);
      setTyping(true);
    }
  }, [text, typing, idx]);

  return (
    <section id="hero" className="relative min-h-screen stripe-bg flex items-center" style={{ overflowX: "hidden" }}>
      {/* Yellow corner — clipped so it never causes overflow */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-bl-full bg-[#F5C518]/90 -z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 md:gap-10 md:items-center">

          {/* Avatar */}
          <div className="flex justify-center md:order-2 md:justify-end">
            <div className="w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full bg-[#F5C518] border-4 border-white shadow-xl overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fasik.JPG"
                alt="Fasikaw Getachew"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:order-1 w-full text-center md:text-left">


            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-4 break-words">
              Hello, I am{" "}
              <span className="relative inline-block">
                Fasikaw Getachew
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F5C518]/40 -z-10 rounded" />
              </span>
            </h1>

            <div className="h-7 mb-5 overflow-hidden">
              <span className="text-sm sm:text-base font-semibold text-gray-500">
                {text}<span className="cursor text-[#F5C518]">|</span>
              </span>
            </div>

            <p className="text-gray-500 leading-relaxed mb-8 text-sm max-w-xs sm:max-w-sm mx-auto md:mx-0">
              Gold Medalist seeking impactful roles
              in governance, public policy, and international relations.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full font-bold text-[#1a1a1a] bg-[#F5C518] hover:bg-[#E6B800] transition-colors text-sm"
              >
                Hire Me
              </a>
              <a
                href="/cv/FASIKAW GETACHEW.pdf"
                download
                className="px-5 py-2.5 rounded-full font-bold text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

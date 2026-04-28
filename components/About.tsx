"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const strengths = [
  { icon: "🧠", title: "Analytical Thinker", desc: "Data-driven decisions backed by strategic management training" },
  { icon: "🤝", title: "Natural Leader", desc: "Proven ability to coordinate teams and drive results" },
  { icon: "💬", title: "Clear Communicator", desc: "Strong written and verbal skills in English and Amharic" },
  { icon: "🎯", title: "Highly Disciplined", desc: "Consistent top performer throughout 4 years of study" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="relative stripe-bg py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">About me</h2>
        </div>

        <div
          ref={ref}
          className={`space-y-8 sm:space-y-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Bio */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F5C518] overflow-hidden relative mx-auto mb-5 border-4 border-white shadow-md">
              <Image src="/abrham.jpg" alt="Abrham Demse" fill className="object-cover object-top" />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              I am a Management graduate from <span className="font-bold text-[#1a1a1a]">Woldia University</span>, honored with the <span className="font-bold text-[#1a1a1a]">Gold Medal</span> for graduating with distinction in recognition of outstanding academic performance and dedication. My academic journey equipped me with a strong foundation in organizational behavior, human resource management, strategic planning, leadership, marketing, and financial management. Through these studies, I developed the ability to analyze business challenges, make informed decisions, and create practical solutions that improve organizational performance.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              I am highly motivated, detail-oriented, and committed to continuous learning and professional growth. I possess strong communication, teamwork, problem-solving, and time-management skills, enabling me to adapt effectively in dynamic work environments. I am passionate about contributing to organizations through efficient management practices, ethical leadership, and innovative thinking.
            </p>
            <blockquote className="border-l-4 border-[#F5C518] pl-4 italic text-gray-400 text-xs sm:text-sm text-left">
              &quot;My goal is to create measurable impact from day one by improving productivity, supporting team success, and helping organizations achieve their strategic objectives while maintaining integrity and excellence.&quot;
            </blockquote>
          </div>

          {/* Strengths */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="card-hover rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm hover:border-[#F5C518] transition-colors">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{s.icon}</div>
                <h3 className="font-bold text-xs sm:text-sm text-[#1a1a1a] mb-1">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Open to */}
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Open to opportunities in</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["NGO / Development", "Banking & Finance", "Administration", "HR & People Ops", "Project Coordination"].map((f) => (
                <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F5C518]/20 text-[#1a1a1a] border border-[#F5C518]/40">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

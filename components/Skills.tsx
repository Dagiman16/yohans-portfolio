"use client";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Leadership & Management", level: 92 },
  { name: "Communication", level: 90 },
  { name: "Teamwork & Collaboration", level: 95 },
  { name: "Report Writing", level: 88 },
  { name: "Project Coordination", level: 82 },
  { name: "Microsoft Office Suite", level: 85 },
  { name: "Data Entry & Analysis", level: 80 },
  { name: "Time Management", level: 90 },
];

const soft = [
  "Critical Thinking", "Decision Making", "Conflict Resolution",
  "Adaptability", "Ethical Leadership", "Attention to Detail",
  "Customer Focus", "Presentation Skills",
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="stripe-bg py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Skills</h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 sm:gap-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Core skills */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-5 sm:mb-6">Core Skills</h3>
            <div className="space-y-4 sm:space-y-5">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{s.name}</span>
                    <span className="text-xs sm:text-sm font-bold text-[#F5C518]">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: inView ? `${s.level}%` : "0%", transitionDelay: `${i * 70}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills + languages */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {soft.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">Languages</h3>
              {[
                { name: "Amharic", level: "Native", pct: 100 },
                { name: "English", level: "Professional", pct: 85 },
              ].map((l) => (
                <div key={l.name} className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{l.name}</span>
                    <span className="text-xs text-[#F5C518] font-semibold">{l.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useInView } from "react-intersection-observer";

const strengths = [
  { icon: "🧠", title: "Analytical Thinker", desc: "Ability to analyze political issues and evaluate public policies critically" },
  { icon: "🏛️", title: "Governance Expert", desc: "Strong foundation in political theory, democracy, and public administration" },
  { icon: "💬", title: "Clear Communicator", desc: "Strong research, communication, and problem-solving skills" },
  { icon: "🎯", title: "Highly Disciplined", desc: "Gold Medal graduate committed to continuous learning and professional growth" },
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
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F5C518] overflow-hidden mx-auto mb-5 border-4 border-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fasik.JPG" alt="Fasikaw Getachew" className="w-full h-full object-cover object-top" />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              My name is <span className="font-bold text-[#1a1a1a]">Demeke Fasikaw Getachew</span>, a Political Science and International Relations graduate from <span className="font-bold text-[#1a1a1a]">Woldia University</span>, honored with the <span className="font-bold text-[#1a1a1a]">Gold Medal</span> for graduating with distinction in recognition of outstanding academic performance and dedication. My academic journey equipped me with a strong foundation in political theory, governance, public policy, international relations, political institutions, democracy, and public administration. Through these studies, I developed the ability to analyze political issues, evaluate public policies, understand governance systems, and contribute to informed decision-making and sustainable social development.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              I am highly motivated, analytical, and committed to continuous learning and professional growth. I possess strong research, critical-thinking, communication, teamwork, and problem-solving skills, enabling me to understand complex political issues and work effectively in diverse environments. I am passionate about promoting good governance, democratic values, social justice, and public service while contributing to evidence-based policymaking, institutional development, and positive societal change.
            </p>
            <blockquote className="border-l-4 border-[#F5C518] pl-4 italic text-gray-400 text-xs sm:text-sm text-left">
              &quot;My goal is to promote good governance, democratic values, and social justice — contributing to evidence-based policymaking, institutional development, and positive societal change.&quot;
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
              {["Government & Public Policy", "NGO / Development", "International Relations", "Public Administration", "Research & Analysis"].map((f) => (
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

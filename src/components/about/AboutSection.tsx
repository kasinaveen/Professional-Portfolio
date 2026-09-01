import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Code2, Target, Sparkles, BookOpen, Layers, Users, Cpu, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  playHover: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ playHover }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          idPrefix="WHO I AM"
          title="ABOUT ME"
          subtitle="Curiosity drives me. Engineering gives it direction."
          accent="green"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Career Narrative & Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Career Objective Card */}
            <div
              onMouseEnter={playHover}
              className="p-6 sm:p-8 rounded-2xl bg-[#030712]/80 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-3">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>OFFICIAL CAREER OBJECTIVE</span>
              </div>
              <p className="text-base sm:text-lg text-slate-100 font-sans leading-relaxed italic">
                "{PERSONAL_INFO.careerObjective}"
              </p>
            </div>

            {/* In-Depth Engineering Background */}
            <div
              onMouseEnter={playHover}
              className="p-6 sm:p-8 rounded-2xl bg-[#030712]/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 transition-all duration-300 space-y-4"
            >
              <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Software Engineering &amp; Problem Solving
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                As a Computer Science &amp; Engineering student at Government College of Engineering, Sengipatti, I combine solid academic rigor (8.9 CGPA) with hands-on development. I specialize in building complete software systems—from responsive client interfaces to multithreaded Java backends, database architectures, and cross-platform mobile apps.
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                My approach emphasizes clean architecture, practical problem solving, robust networking integration (TCP/SMTP), and continuous learning to create scalable, impactful digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Pillars of Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              {
                title: "Full-Stack & Application Engineering",
                desc: "End-to-end software delivery from frontend UI components to relational database management and REST APIs.",
                icon: Layers,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20"
              },
              {
                title: "Java Specialization & Systems",
                desc: "Primary focus on Java OOP architecture, database persistence (JDBC), and custom network socket daemons.",
                icon: Code2,
                color: "text-cyan-400",
                bg: "bg-cyan-500/10",
                border: "border-cyan-500/20"
              },
              {
                title: "Practical Innovation & Hackathons",
                desc: "Proven under pressure with 2nd Prize at BIT Erode in Game Prototype Innovation and competitive problem solving.",
                icon: Cpu,
                color: "text-violet-400",
                bg: "bg-violet-500/10",
                border: "border-violet-500/20"
              },
              {
                title: "Technical Presentations & Collaboration",
                desc: "Active presentation record across intra/inter-campus symposiums, communicating technical ideas clearly.",
                icon: Users,
                color: "text-pink-400",
                bg: "bg-pink-500/10",
                border: "border-pink-500/20"
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={playHover}
                  className="p-5 rounded-2xl bg-[#030712]/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className={`p-2.5 rounded-xl ${pillar.bg} ${pillar.border} border ${pillar.color} shrink-0 mt-1`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

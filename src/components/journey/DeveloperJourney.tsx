import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap, Coffee, Layers, FolderGit2, Building2, Smartphone, Sparkles, Trophy, Presentation, Flame, CheckCircle2 } from 'lucide-react';

interface DeveloperJourneyProps {
  playHover: () => void;
}

const JOURNEY_MILESTONES = [
  {
    step: "01",
    title: "Computer Science & Engineering",
    desc: "Enrolled in B.E. CSE at Government College of Engineering, Sengipatti, establishing 8.9 CGPA across foundational computer science and engineering coursework.",
    icon: GraduationCap,
    category: "FOUNDATION"
  },
  {
    step: "02",
    title: "Java Programming",
    desc: "Achieved deep mastery of Object-Oriented Programming, Java collections, multithreading, and earned elite NPTEL certification in Programming in Java.",
    icon: Coffee,
    category: "PRIMARY LANGUAGE"
  },
  {
    step: "03",
    title: "Full-Stack Development",
    desc: "Architected complete web workflows, connecting modern frontend components with robust backend routing and relational database management systems.",
    icon: Layers,
    category: "SYSTEMS"
  },
  {
    step: "04",
    title: "Student Management System",
    desc: "Engineered full-stack academic administration software featuring complete CRUD operations, database constraints, and cross-language Python/Java modules.",
    icon: FolderGit2,
    category: "PROJECT 01"
  },
  {
    step: "05",
    title: "Hostel Management System",
    desc: "Constructed comprehensive campus living software with role-based auth, automatic attendance tracking, TCP socket query dispatching, and SMTP email alerts.",
    icon: Building2,
    category: "PROJECT 02 (MAJOR)"
  },
  {
    step: "06",
    title: "Mobile Application Development",
    desc: "Expanded hostel software ecosystem to cross-platform mobile environments, delivering synchronized native Android and iOS client applications.",
    icon: Smartphone,
    category: "WEB TO MOBILE"
  },
  {
    step: "07",
    title: "AI Interview Knowledge Assessment",
    desc: "Engineered an intelligent 7-stage assessment system evaluating programming proficiency, communication clarity, and candidate readiness.",
    icon: Sparkles,
    category: "PROJECT 03 (AI)"
  },
  {
    step: "08",
    title: "Hackathons",
    desc: "Participated in 2 competitive hackathons, securing 2nd Prize at Bannari Amman Institute of Technology (BIT), Erode for Game Prototype Software Innovation.",
    icon: Trophy,
    category: "ACHIEVEMENTS"
  },
  {
    step: "09",
    title: "Technical Presentations",
    desc: "Authored and presented technical papers across multiple intra-college and inter-college symposiums, defending architectural models before panels.",
    icon: Presentation,
    category: "COMMUNICATION"
  },
  {
    step: "10",
    title: "Continuous Learning",
    desc: "Actively exploring system design, advanced JVM internals, distributed backend caching, and next-generation AI software workflows.",
    icon: Flame,
    category: "GROWTH"
  }
];

export const DeveloperJourney: React.FC<DeveloperJourneyProps> = ({ playHover }) => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          idPrefix="EVOLUTION"
          title="MY DEVELOPMENT JOURNEY"
          subtitle="A progressive timeline illustrating continuous growth, from core academics to complex multi-platform systems and competitive engineering."
          accent="green"
        />

        <div className="relative mt-16 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-10">
          {/* Scroll Progress Vertical Glowing Line */}
          <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-[2px] bg-slate-800">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-500 origin-top shadow-[0_0_12px_rgba(16,185,129,0.9)]"
            />
          </div>

          {/* Timeline Nodes */}
          {JOURNEY_MILESTONES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseEnter={playHover}
                className="relative group"
              >
                {/* Node Dot on Glowing Line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-[#020611] border-2 border-emerald-400 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-cyan-400" />
                </div>

                {/* Milestone Card */}
                <div className="p-6 rounded-2xl bg-[#030712]/80 backdrop-blur-md border border-slate-800 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        STEP {item.step} &bull; {item.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

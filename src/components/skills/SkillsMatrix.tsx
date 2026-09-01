import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SkillConstellation } from './SkillConstellation';
import { SKILLS_DATA } from '../../data/portfolioData';
import { Coffee, Binary, Cpu, Layers, Smartphone, Database, Globe, Boxes, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface SkillsMatrixProps {
  playClick: () => void;
  playHover: () => void;
}

const CATEGORY_GROUPS = [
  {
    title: "PROGRAMMING LANGUAGES",
    subtitle: "Core algorithmic and systems implementation languages",
    skills: [
      { name: "Java", isPrimary: true, tag: "PRIMARY LANGUAGE", desc: "Core OOP, Collections, Multithreading, JVM, Sockets, and JDBC architecture." },
      { name: "Python", isPrimary: false, tag: "Proficient", desc: "Backend scripting, AI module pipelines, data processing, and rapid prototyping." },
      { name: "C", isPrimary: false, tag: "Foundational", desc: "Low-level memory management, pointers, system data structures, and algorithmic logic." }
    ]
  },
  {
    title: "FULL-STACK DEVELOPMENT",
    subtitle: "End-to-end web architectures and API protocols",
    skills: [
      { name: "Frontend Development", desc: "Modern reactive user interfaces, component architectures, and responsive web design." },
      { name: "Backend Development", desc: "Server controllers, business logic execution, request lifecycle, and data validation." },
      { name: "REST API Development", desc: "Clean HTTP/REST endpoints, JSON payloads, status code handling, and security gateways." },
      { name: "Database Integration", desc: "Connecting backend controllers with relational engines via connection-pooled JDBC/SQL queries." },
      { name: "Full-Stack Application Architecture", desc: "Coordinating multi-tier applications from client browser to database persistence." }
    ]
  },
  {
    title: "APPLICATION DEVELOPMENT",
    subtitle: "Cross-platform mobile and desktop application workflows",
    skills: [
      { name: "Application UI Development", desc: "Touch-optimized mobile screens designed for Android and iOS ergonomics." },
      { name: "Backend Integration", desc: "Asynchronous endpoint mapping and live data polling between mobile clients and servers." },
      { name: "API Integration", desc: "Consuming REST endpoints and streaming socket pipelines into mobile app states." },
      { name: "Database Connectivity in Apps", desc: "Managing persistent mobile data cache and synchronized relational records." }
    ]
  },
  {
    title: "CORE COMPUTER SCIENCE",
    subtitle: "Fundamental academic foundations from 8.9 CGPA CSE curriculum",
    skills: [
      { name: "Object-Oriented Programming (OOP)", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, and interface design." },
      { name: "Data Structures & Algorithms", desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Hash Tables, and complexity analysis." },
      { name: "Database Management Systems (DBMS)", desc: "Relational schemas, normalization (1NF-3NF), ER modeling, and ACID transactions." },
      { name: "Operating Systems", desc: "Process scheduling, thread concurrency, memory virtualization, and file systems." },
      { name: "Computer Networks", desc: "OSI & TCP/IP protocols, client-server models, IP routing, and socket layers." }
    ]
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    subtitle: "Engineering practices, quality assurance, and teamwork",
    skills: [
      { name: "Problem Solving", desc: "Systematic root-cause diagnosis, algorithmic optimization, and edge-case handling." },
      { name: "Debugging", desc: "Stack trace inspection, breakpoint analysis, and step-through code diagnostics." },
      { name: "Version Control (Git)", desc: "Branching strategies, commits, pull requests, and repository management." },
      { name: "Software Design", desc: "Modular separation of concerns, DRY principles, and structured software architecture." },
      { name: "Team Collaboration", desc: "Agile sprints, code reviews, technical presentations, and hackathon co-development." }
    ]
  },
  {
    title: "ADDITIONAL KNOWLEDGE",
    subtitle: "Protocols, database concepts, and AI systems",
    skills: [
      { name: "Database Concepts", desc: "Relational normalization, foreign keys, indexing, and transactional integrity." },
      { name: "Networking Concepts", desc: "Client-server architecture, OSI model, packet flow, and port addressing." },
      { name: "TCP Protocol", desc: "Reliable byte-stream transmission, connection handshake, and socket packets." },
      { name: "SMTP Protocol", desc: "Automated mail server pipelines, mail headers, and email alert integration." },
      { name: "AI-Powered Application Concepts", desc: "7-stage evaluation pipelines, knowledge assessment, and dynamic readiness reports." }
    ]
  }
];

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ playClick, playHover }) => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          idPrefix="EXPERTISE"
          title="TECHNICAL SKILLS"
          subtitle="A comprehensive inventory of software engineering competencies, categorised accurately without generic percentage bars."
          accent="green"
        />

        {/* 1. Visual Constellation Metaphor Skill Map */}
        <SkillConstellation playClick={playClick} playHover={playHover} />

        {/* 2. Structured Categorized Skill Grid */}
        <div className="space-y-12">
          {CATEGORY_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-800/80">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-wide flex items-center gap-2">
                  <span className="text-emerald-400 font-mono text-sm">0{gIdx + 1}.</span>
                  {group.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  {group.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, sIdx) => {
                  const isJava = skill.name === 'Java';

                  return (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      onMouseEnter={playHover}
                      className={`p-5 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between ${
                        isJava
                          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border-2 border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.25)]'
                          : 'bg-[#030712]/70 border border-slate-800/80 hover:border-slate-700 hover:bg-[#030712]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`text-base font-bold font-display ${isJava ? 'text-emerald-300 text-lg' : 'text-white group-hover:text-emerald-300 transition-colors'}`}>
                            {skill.name}
                          </h4>
                          {skill.tag && (
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              isJava ? 'bg-emerald-500 text-black shadow-sm' : 'bg-slate-800 text-cyan-300 border border-slate-700'
                            }`}>
                              {skill.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isJava ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <span>Verified Competency</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

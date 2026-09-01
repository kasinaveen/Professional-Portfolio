import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { HostelArchitectureDiagram } from './HostelArchitectureDiagram';
import { HostelSpecialFeatures } from './HostelSpecialFeatures';
import { AIAssessmentFlow } from './AIAssessmentFlow';
import { StudentArchitectureDiagram } from './StudentArchitectureDiagram';
import { ProjectGallery, GalleryImage } from './ProjectGallery';
import { 
  Github, ExternalLink, Download, Layers, CheckCircle2, 
  Sparkles, Image as ImageIcon, ZoomIn, ArrowRight, Smartphone,
  Database, Server, Globe
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenLightbox: (imageUrl: string, caption: string, allImages?: GalleryImage[], initialIndex?: number) => void;
  playClick: () => void;
  playHover: () => void;
}

const TABS: Array<'hostel' | 'student' | 'ai'> = ['hostel', 'student', 'ai'];

const projectSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 70 : -70,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -70 : 70,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenLightbox,
  playClick,
  playHover
}) => {
  const [activeProjectTab, setActiveProjectTab] = useState<'hostel' | 'student' | 'ai'>('hostel');
  const [direction, setDirection] = useState<number>(0);

  const handleTabChange = (newTab: 'hostel' | 'student' | 'ai') => {
    const currentIdx = TABS.indexOf(activeProjectTab);
    const nextIdx = TABS.indexOf(newTab);
    setDirection(nextIdx > currentIdx ? 1 : -1);
    setActiveProjectTab(newTab);
    playClick();
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          idPrefix="SOFTWARE ENGINEERING"
          title="THINGS I'VE BUILT"
          subtitle="In-depth presentations of full-stack systems, campus-scale mobile applications, and AI evaluation engines."
          accent="green"
        />

        {/* Project Selection Tabs with Directional Indicators */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 border-b border-slate-800 custom-scrollbar">
          {[
            { id: 'hostel', label: '01. Hostel Management System (Major)', badge: 'Web + Android + iOS', color: 'emerald' },
            { id: 'student', label: '02. Student Management System', badge: 'Full-Stack CRUD & DBMS', color: 'cyan' },
            { id: 'ai', label: '03. AI Interview Assessment', badge: 'AI & Knowledge Scoring', color: 'violet' }
          ].map((tab) => {
            const isActive = activeProjectTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as typeof activeProjectTab)}
                onMouseEnter={playHover}
                className={`px-5 py-3 rounded-2xl font-mono text-xs transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-[0_0_25px_rgba(16,185,129,0.45)]'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${
                  isActive ? 'bg-black/25 text-black font-bold' : 'bg-slate-950 text-emerald-400'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Side-Way Animated Project Container */}
        <div className="relative w-full overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            {/* PROJECT 01: HOSTEL MANAGEMENT SYSTEM */}
            {activeProjectTab === 'hostel' && (
              <motion.div
                key="hostel"
                custom={direction}
                variants={projectSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-12 w-full"
              >
                {/* Top Project Narrative Card */}
                <div className="p-6 sm:p-10 rounded-3xl bg-[#030712]/90 border border-emerald-500/40 backdrop-blur-xl shadow-2xl space-y-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                          MAJOR FULL-STACK &amp; MULTI-PLATFORM PROJECT
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                          Web + Android + iOS
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                        Hostel Management System
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                        A comprehensive Hostel Management System designed to simplify and digitize hostel-related administrative activities across Web, Android, and iOS platforms. Integrated with automated attendance tracking, TCP socket query processing, SMTP email notices, and role-based access for Hostel Officers, Admins, and Hostellers.
                      </p>
                    </div>

                    {/* Project Verified Action Links */}
                    <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 font-mono text-xs">
                      {PROJECTS_DATA[0]?.liveDemoUrl && PROJECTS_DATA[0].liveDemoUrl.startsWith('http') && (
                        <a
                          href={PROJECTS_DATA[0].liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Live Demo</span>
                        </a>
                      )}
                      {PROJECTS_DATA[0]?.githubUrl && PROJECTS_DATA[0].githubUrl.startsWith('http') && (
                        <a
                          href={PROJECTS_DATA[0].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5 text-emerald-400" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Technologies Strip */}
                  <div>
                    <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      TECHNOLOGY STACK &amp; PROTOCOLS:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Full-Stack Development", "Java Backend", "Database Management (DBMS)",
                        "Computer Networks", "TCP Protocol & Sockets", "SMTP Mail Protocol",
                        "Android Mobile App", "iOS Mobile App", "Role-Based Authentication"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Student hostel registration & profile lifecycle management",
                      "Room & allocation management with double-booking prevention",
                      "Automatic attendance tracking with digital night roll calls",
                      "Hosteller query processing & advanced TCP ticket resolution",
                      "Multi-channel notifications via in-app mobile push and SMTP email alerts",
                      "Secure role-based authentication: Admin, Hostel Officer & Hosteller portals"
                    ].map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Diagram */}
                <HostelArchitectureDiagram playHover={playHover} />

                {/* Special Features Panels */}
                <HostelSpecialFeatures playClick={playClick} playHover={playHover} />

                {/* Project Gallery & Lightbox Trigger */}
                <ProjectGallery
                  projectName="Hostel Management System"
                  accentColor="emerald"
                  screenshots={PROJECTS_DATA[0]?.screenshots}
                  images={PROJECTS_DATA[0]?.images}
                  onOpenLightbox={onOpenLightbox}
                  playClick={playClick}
                  playHover={playHover}
                />
              </motion.div>
            )}

            {/* PROJECT 02: STUDENT MANAGEMENT SYSTEM */}
            {activeProjectTab === 'student' && (
              <motion.div
                key="student"
                custom={direction}
                variants={projectSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-12 w-full"
              >
                <div className="p-6 sm:p-10 rounded-3xl bg-[#030712]/90 border border-cyan-500/40 backdrop-blur-xl shadow-2xl space-y-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                    <div className="space-y-3 max-w-3xl">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                        FULL-STACK &bull; DBMS &bull; NETWORKING
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                        Student Management System
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                        Developed a complete Student Management System designed to efficiently manage student-related information and administrative operations. Built with end-to-end full-stack integration, Python &amp; Java backends, and relational database storage.
                      </p>
                    </div>

                    {/* Project Verified Action Links */}
                    <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 font-mono text-xs">
                      {PROJECTS_DATA[1]?.liveDemoUrl && PROJECTS_DATA[1].liveDemoUrl.startsWith('http') && (
                        <a
                          href={PROJECTS_DATA[1].liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Live Demo</span>
                        </a>
                      )}
                      {PROJECTS_DATA[1]?.githubUrl && PROJECTS_DATA[1].githubUrl.startsWith('http') && (
                        <a
                          href={PROJECTS_DATA[1].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5 text-cyan-400" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      TECHNOLOGY STACK:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Full-Stack Web Development", "Java Implementation", "Python Implementation",
                        "Database Management (DBMS)", "Core Networking Concepts", "CRUD Architecture"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Student registration: Form validation and structured onboarding",
                      "Student profile management: Comprehensive academic records and contact data",
                      "Complete CRUD operations: Create, update, view, and delete student records safely",
                      "Frontend and backend integration: Dynamic asynchronous UI updates",
                      "Database-driven storage: Relational tables with strict primary & foreign keys",
                      "User-friendly administrative interface: Rapid search and filtering tools"
                    ].map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Flow */}
                <StudentArchitectureDiagram playHover={playHover} />

                {/* Gallery */}
                <ProjectGallery
                  projectName="Student Management System"
                  accentColor="cyan"
                  screenshots={PROJECTS_DATA[1]?.screenshots}
                  images={PROJECTS_DATA[1]?.images}
                  onOpenLightbox={onOpenLightbox}
                  playClick={playClick}
                  playHover={playHover}
                />
              </motion.div>
            )}

            {/* PROJECT 03: AI INTERVIEW ASSESSMENT */}
            {activeProjectTab === 'ai' && (
              <motion.div
                key="ai"
                custom={direction}
                variants={projectSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-12 w-full"
              >
                <div className="p-6 sm:p-10 rounded-3xl bg-[#030712]/90 border border-violet-500/40 backdrop-blur-xl shadow-2xl space-y-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                    <div className="space-y-3 max-w-3xl">
                      <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs font-bold">
                        AI-POWERED &bull; OPEN-SOURCE ASSESSMENT
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                        AI Open-Source Interview Knowledge Assessment
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                        An AI-powered/open-source interview knowledge assessment solution designed to assess a person's ability to approach technical interviews across technical knowledge, programming depth, communication skills, and problem-solving readiness.
                      </p>
                    </div>

                    {/* Project Verified Action Links */}
                    <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 font-mono text-xs">
                      {PROJECTS_DATA[2]?.liveDemoUrl && PROJECTS_DATA[2].liveDemoUrl.startsWith('http') && (
                        <a
                          href={PROJECTS_DATA[2].liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="px-4 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-black font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Live Demo</span>
                        </a>
                      )}
                      {PROJECTS_DATA[2]?.githubUrl && PROJECTS_DATA[2].githubUrl.startsWith('http') && (
                        <a
                          href={PROJECTS_DATA[2].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-violet-400 text-slate-200 hover:text-violet-300 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5 text-violet-400" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      TECHNOLOGY &amp; EVALUATION FOCUS:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI Assessment Concepts", "Open-Source Architecture", "Technical Knowledge Evaluation",
                        "Programming Depth Analysis", "Communication Assessment", "Interview Readiness Report"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-violet-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Evaluation Dimensions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Technical Knowledge Evaluation: Java, OOP principles, and systems fundamentals",
                      "Programming Knowledge Depth: Algorithm choices, edge cases, and code efficiency",
                      "Communication Skills Assessment: Structured articulation and technical vocabulary",
                      "Problem-Solving Ability: Step-by-step reasoning and solution decomposition",
                      "Automated Readiness Report: Synthesis of strengths, improvement areas, and next steps"
                    ].map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive 7-Stage Flow */}
                <AIAssessmentFlow playClick={playClick} playHover={playHover} />

                {/* Gallery */}
                <ProjectGallery
                  projectName="AI Interview Assessment"
                  accentColor="violet"
                  screenshots={PROJECTS_DATA[2]?.screenshots}
                  images={PROJECTS_DATA[2]?.images}
                  onOpenLightbox={onOpenLightbox}
                  playClick={playClick}
                  playHover={playHover}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

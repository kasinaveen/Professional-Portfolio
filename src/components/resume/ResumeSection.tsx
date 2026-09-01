import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PERSONAL_INFO, EDUCATION_DATA, SOCIAL_LINKS } from '../../data/portfolioData';
import { FileText, Download, ExternalLink, CheckCircle2, Award, GraduationCap, Code2, Sparkles, Layers } from 'lucide-react';

interface ResumeSectionProps {
  playClick: () => void;
  playHover: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ playClick, playHover }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          idPrefix="OFFICIAL RESUME"
          title="THE COMPLETE PROFILE"
          subtitle="Everything in one document."
          accent="green"
        />

        <div className="p-8 sm:p-12 rounded-3xl bg-[#030712]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">
                  VERIFIED CURRICULUM VITAE
                </span>
              </div>
              <h3 className="text-3xl font-extrabold font-display text-white">
                Kasi Naveen K — Professional Resume
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Contains verified academic history (8.9 CGPA at GCE Sengipatti), comprehensive Java &amp; full-stack competencies, detailed project architectures, hackathon achievements (2nd Prize at BIT Erode), NPTEL credentials, and technical paper presentations.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0 font-sans">
              <button
                onClick={() => {
                  setIsPreviewOpen(!isPreviewOpen);
                  playClick();
                }}
                onMouseEnter={playHover}
                className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-slate-100 font-bold text-sm transition-all flex items-center gap-2 shadow-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{isPreviewOpen ? 'HIDE PREVIEW' : 'VIEW RESUME'}</span>
              </button>

              <a
                href={SOCIAL_LINKS.resumePdf}
                download="Kasi_Naveen_K_Resume.pdf"
                onClick={playClick}
                onMouseEnter={playHover}
                className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>

          {/* Animated Document Interactive Preview Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#02050e] border border-slate-800 space-y-6 font-sans text-xs text-slate-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
              <div>
                <h4 className="text-lg font-bold font-display text-white">
                  KASI NAVEEN K
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  B.E. Computer Science &amp; Engineering &bull; Full-Stack &bull; App Developer &bull; Java Specialist
                </p>
              </div>

              <div className="text-right font-mono text-[11px] text-slate-400">
                <span>Email: kkasinaveen@gmail.com</span> &bull; <span>Phone: 6381246015</span>
              </div>
            </div>

            {/* Document Highlight Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Col 1: Education */}
              <div className="space-y-2">
                <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education &amp; Academics
                </span>
                <p className="text-slate-200 font-semibold">{EDUCATION_DATA.degree}</p>
                <p className="text-slate-400 text-[11px]">{EDUCATION_DATA.institution}, Sengipatti</p>
                <p className="text-emerald-400 font-mono font-bold">CGPA: 8.9 / 10.0 (Up to 4th Sem)</p>
              </div>

              {/* Col 2: Core Stack */}
              <div className="space-y-2">
                <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  Core Programming &amp; Skills
                </span>
                <p className="text-slate-200"><strong>Primary:</strong> Java (OOP, Sockets, JDBC)</p>
                <p className="text-slate-400"><strong>Supporting:</strong> Python, C</p>
                <p className="text-slate-400">Full-Stack, Android/iOS, DBMS, TCP, SMTP</p>
              </div>

              {/* Col 3: Key Honors */}
              <div className="space-y-2">
                <span className="font-mono text-violet-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Recognitions &amp; Certs
                </span>
                <p className="text-slate-200">2nd Prize: BIT Erode Hackathon</p>
                <p className="text-slate-200">2nd Prize: Game Prototype Innovation</p>
                <p className="text-slate-400">NPTEL Certified: Programming in Java</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

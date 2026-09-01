import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SOCIAL_LINKS } from '../../data/portfolioData';
import { Github, GitPullRequest, GitBranch, Sparkles, ExternalLink, Code2 } from 'lucide-react';

interface OpenSourceSectionProps {
  playClick: () => void;
  playHover: () => void;
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({ playClick, playHover }) => {
  return (
    <section id="open-source" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          idPrefix="COLLABORATION"
          title="OPEN SOURCE"
          subtitle="Community code contributions, developer tooling, and modular architectures."
          accent="green"
        />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#030712]/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
                <Github className="w-5 h-5 text-emerald-400" />
                Open-Source Repositories &amp; Contributions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans">
                Open-source contributions and repositories will be showcased here as active public releases are published.
              </p>
            </div>

            <a
              href={SOCIAL_LINKS.github === 'YOUR_GITHUB_URL' ? '#contact' : SOCIAL_LINKS.github}
              onClick={playClick}
              onMouseEnter={playHover}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 font-mono text-xs font-bold transition-all flex items-center gap-2 w-fit shrink-0"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>VISIT GITHUB PROFILE</span>
            </a>
          </div>

          {/* Structured Showcase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                repo: "hostel-management-engine",
                category: "Enterprise System",
                desc: "Modular Java backend daemons for TCP ticket routing and SMTP alert dispatchers.",
                tech: "Java &bull; TCP Sockets &bull; DBMS",
                status: "Public Repository"
              },
              {
                repo: "student-crud-architecture",
                category: "Full-Stack Portal",
                desc: "Cross-language CRUD administrative framework with database transactional rollback safeguards.",
                tech: "Python &bull; Java &bull; Relational SQL",
                status: "Public Repository"
              },
              {
                repo: "ai-interview-assessment-core",
                category: "AI Evaluation Tool",
                desc: "7-stage evaluation pipeline parsing code logic, OOP mastery, and candidate readiness metrics.",
                tech: "AI Pipelines &bull; Knowledge Evaluation",
                status: "Open-Source Prototype"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={playHover}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{item.status}</span>
                  </div>

                  <h4 className="text-base font-bold font-mono text-white flex items-center gap-1.5 pt-1">
                    <GitBranch className="w-4 h-4 text-cyan-400" />
                    <span>{item.repo}</span>
                  </h4>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400" dangerouslySetInnerHTML={{ __html: item.tech }} />
                  <span className="text-emerald-400">READY</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Globe, Smartphone, Apple, Layers, Database, ArrowRight, ExternalLink, Download, CheckCircle2 } from 'lucide-react';

interface WebToMobileSectionProps {
  playClick: () => void;
  playHover: () => void;
}

export const WebToMobileSection: React.FC<WebToMobileSectionProps> = ({ playClick, playHover }) => {
  const hostelProject = PROJECTS_DATA[0];

  return (
    <section id="mobile" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          idPrefix="ECOSYSTEM"
          title="ONE SYSTEM. MULTIPLE PLATFORMS."
          subtitle="How the Hostel Management System architecture spans across responsive Web browsers, Android APKs, and iOS client apps via unified APIs and database synchronization."
          accent="green"
        />

        {/* Central Architecture Connector Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#030712]/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Platform 1: Web Application */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={playHover}
              className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Web Application Portal
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Comprehensive administrative dashboard for hostel wardens and chief officers. Provides multi-room allocation grids, batch attendance exports, and audit trails.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-emerald-300 text-[10px] font-mono border border-slate-800">
                    Admin Command
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] font-mono border border-slate-800">
                    Desktop Optimized
                  </span>
                </div>
              </div>

              {hostelProject?.liveDemoUrl && hostelProject.liveDemoUrl.startsWith('http') && (
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs font-mono">
                  <a
                    href={hostelProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live Deployment</span>
                  </a>
                </div>
              )}
            </motion.div>

            {/* Platform 2: Android Application */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={playHover}
              className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Android Mobile Client
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Tailored for hostellers on Android devices. Features one-tap night roll-call verification, maintenance ticket tracking, and offline data cache synchronization.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-cyan-300 text-[10px] font-mono border border-slate-800">
                    Hosteller Self-Service
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] font-mono border border-slate-800">
                    Android Client
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Platform Mobile Sync</span>
              </div>
            </motion.div>

            {/* Platform 3: iOS Application */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={playHover}
              className="p-6 rounded-2xl bg-slate-900/80 border border-violet-500/30 hover:border-violet-500/60 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Apple className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  iOS Mobile Application
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Native-styled iOS interface for mobile hostel officers and students, featuring rapid attendance scanning, instant SMTP broadcasts, and push alerts.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-violet-300 text-[10px] font-mono border border-slate-800">
                    iOS Platform
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] font-mono border border-slate-800">
                    Officer Controls
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-violet-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Synchronized Endpoints</span>
              </div>
            </motion.div>
          </div>

          {/* Unified Middleware & Persistence Layer */}
          <div className="p-6 rounded-2xl bg-[#02050e] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-base font-bold font-display text-white">
                  Unified REST API &amp; Relational Database Engine
                </h5>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  All 3 clients interface with identical Java business logic, ACID transactions, and MySQL/PostgreSQL relational schemas.
                </p>
              </div>
            </div>

            {hostelProject?.liveDemoUrl && hostelProject.liveDemoUrl.startsWith('http') && (
              <div className="flex items-center gap-3 shrink-0 text-xs font-mono">
                <a
                  href={hostelProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Access Live Portal</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

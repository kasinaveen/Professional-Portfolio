import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { AchievementItem } from '../../types/portfolio';
import { CertificateModal } from './CertificateModal';
import { Trophy, Award, Sparkles, CheckCircle2, ZoomIn, Gamepad2, Users, Flame } from 'lucide-react';

interface HackathonSectionProps {
  playClick: () => void;
  playHover: () => void;
}

export const HackathonSection: React.FC<HackathonSectionProps> = ({ playClick, playHover }) => {
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(null);

  const getCertImage = (id: string) => {
    if (id === 'hackathon-bit-erode') return '/images/certificates/hackathon-2nd-prize.png';
    return '/images/certificates/prototype-innovation.jpg';
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          idPrefix="COMPETITIVE ENGINEERING"
          title="HACKATHON ACHIEVEMENTS"
          subtitle="Proven track record in high-intensity competitive hackathons and prototype innovation challenges."
          accent="green"
        />

        {/* 2 Hackathon Verified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: 2nd Prize BIT Erode Hackathon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={playHover}
            className="p-8 rounded-3xl bg-[#030712]/90 border border-emerald-500/40 backdrop-blur-xl shadow-2xl space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40">
                  2ND PRIZE SECURED
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                  Hackathon 2nd Prize / Winner Distinction
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Bannari Amman Institute of Technology (BIT), Erode
                </p>
              </div>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Participated in 2 hackathon events. Secured 2nd Prize in the hackathon conducted by Bannari Amman Institute of Technology in Erode. Developed rapid application prototypes under time constraints, demonstrating teamwork, ideation, and architectural presentation.
              </p>

              {/* Experience Gained Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 font-semibold">Experience Gained:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Rapid Application Development", "Problem Solving", "Teamwork",
                    "Technical Presentation", "Ideation", "Time-Constrained Engineering"
                  ].map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedCert(ACHIEVEMENTS_DATA[0]);
                playClick();
              }}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-98"
            >
              <ZoomIn className="w-4 h-4" />
              <span>VIEW 2ND PRIZE CERTIFICATE</span>
            </button>
          </motion.div>

          {/* Card 2: Prototype Software Innovation in Game Development */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onMouseEnter={playHover}
            className="p-8 rounded-3xl bg-[#030712]/90 border border-violet-500/40 backdrop-blur-xl shadow-2xl space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 font-mono text-xs font-bold border border-violet-500/40">
                  SECOND PRIZE
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-violet-300 transition-colors">
                  Prototype Software Innovation — Game Development
                </h3>
                <p className="text-xs font-mono text-violet-400 mt-1">
                  Bannari Amman Institute of Technology (BIT), Erode
                </p>
              </div>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Awarded Second Prize for prototype software innovation in game development using well-defined technologies. Built interactive gameplay logic, responsive state management, and real-time player mechanics.
              </p>

              {/* Experience Gained Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 font-semibold">Technical Highlights:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Prototype Software Innovation", "Game Development", "Logic Systems",
                    "Second Prize Distinction", "Interactive State Engine"
                  ].map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedCert(ACHIEVEMENTS_DATA[1]);
                playClick();
              }}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-violet-400 text-violet-400 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-98"
            >
              <ZoomIn className="w-4 h-4" />
              <span>VIEW INNOVATION CERTIFICATE</span>
            </button>
          </motion.div>
        </div>

        {/* Certificate Modal Trigger */}
        {selectedCert && (
          <CertificateModal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            title={selectedCert.title}
            issuer={selectedCert.institution}
            certificateUrl={getCertImage(selectedCert.id)}
            description={selectedCert.description}
            tags={selectedCert.tags}
            playClick={playClick}
          />
        )}
      </div>
    </section>
  );
};

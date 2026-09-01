import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRESENTATIONS_DATA } from '../../data/portfolioData';
import { PresentationItem } from '../../types/portfolio';
import { CertificateModal } from './CertificateModal';
import { Presentation, Award, Calendar, MapPin, ExternalLink, ZoomIn, CheckCircle2, MessageSquare } from 'lucide-react';

interface PresentationsSectionProps {
  playClick: () => void;
  playHover: () => void;
}

export const PresentationsSection: React.FC<PresentationsSectionProps> = ({ playClick, playHover }) => {
  const [selectedPres, setSelectedPres] = useState<PresentationItem | null>(null);

  return (
    <div className="my-12 p-8 sm:p-10 rounded-3xl bg-[#030712]/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
            RESEARCH &amp; COMMUNICATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Technical Paper Presentations
          </h3>
        </div>

        <span className="text-xs font-mono text-slate-400">
          Intra-College &bull; Inter-College &bull; Outside-Campus
        </span>
      </div>

      <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
        Active participation across technical presentation symposiums, defending software architectures, exploring computing research, and sharing knowledge before academic judging panels.
      </p>

      {/* Presentations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRESENTATIONS_DATA.map((pres, idx) => (
          <motion.div
            key={pres.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onMouseEnter={playHover}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/30">
                  {pres.award}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {pres.date}
                </span>
              </div>

              <h4 className="text-lg font-bold font-display text-white">
                {pres.title}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{pres.institution}</span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {pres.description}
              </p>
            </div>

            {/* Editable Action Link Placeholders */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
              <a
                href="#contact"
                onClick={playClick}
                className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{pres.presentationLink}</span>
              </a>

              <button
                onClick={() => {
                  setSelectedPres(pres);
                  playClick();
                }}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>View Cert</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPres && (
        <CertificateModal
          isOpen={!!selectedPres}
          onClose={() => setSelectedPres(null)}
          title={selectedPres.title}
          issuer={selectedPres.institution}
          certificateUrl={selectedPres.certificatePlaceholder || "/images/certificates/hackathon-2nd-prize.png"}
          description={selectedPres.description}
          tags={["Paper Presentation", "Technical Defense", "Symposium"]}
          playClick={playClick}
        />
      )}
    </div>
  );
};

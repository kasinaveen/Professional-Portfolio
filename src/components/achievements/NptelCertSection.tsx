import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NPTEL_CERTIFICATION } from '../../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Award, CheckCircle2, ZoomIn, Coffee, ShieldCheck, Sparkles } from 'lucide-react';

interface NptelCertSectionProps {
  playClick: () => void;
  playHover: () => void;
}

export const NptelCertSection: React.FC<NptelCertSectionProps> = ({ playClick, playHover }) => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <div className="my-12 p-8 sm:p-10 rounded-3xl bg-[#030712]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            ACADEMIC CERTIFICATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            NPTEL Certification — Programming in Java
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            COURSE COMPLETED / CERTIFIED
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {NPTEL_CERTIFICATION.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Core Object-Oriented Architecture (OOP)",
              "Multithreading, Sockets & Concurrency",
              "Collections Framework & Java Memory Model",
              "I/O Streams & Exception Handling Safety"
            ].map((topic, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <button
            onClick={() => {
              setCertModalOpen(true);
              playClick();
            }}
            onMouseEnter={playHover}
            className="w-full py-4 px-6 rounded-2xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-emerald-300 font-mono text-xs font-bold flex flex-col items-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] group"
          >
            <Award className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>[ VIEW NPTEL CERTIFICATE ]</span>
            <span className="text-[10px] text-slate-500 font-normal">NPTEL_CERTIFICATE</span>
          </button>
        </div>
      </div>

      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        title="NPTEL — Programming in Java"
        issuer="NPTEL (Ministry of Education, Govt of India)"
        certificateUrl="/images/certificates/nptel-java.svg"
        description={NPTEL_CERTIFICATION.description}
        tags={["Java", "OOP", "NPTEL Certified", "Elite Completion"]}
        playClick={playClick}
      />
    </div>
  );
};

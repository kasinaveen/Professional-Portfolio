import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { CASE_STUDIES } from '../../data/portfolioData';
import { 
  AlertCircle, Lightbulb, Workflow, Cpu, ShieldAlert, 
  CheckCircle2, Trophy, BookOpen, ArrowRight, ChevronRight
} from 'lucide-react';

interface CaseStudiesSectionProps {
  playClick: () => void;
  playHover: () => void;
}

type StageKey = 'problem' | 'approach' | 'architecture' | 'implementation' | 'challenges' | 'solution' | 'result' | 'learnings';

const STAGES: { id: StageKey; label: string; icon: React.ElementType }[] = [
  { id: 'problem', label: '01. The Problem', icon: AlertCircle },
  { id: 'approach', label: '02. Engineering Approach', icon: Lightbulb },
  { id: 'architecture', label: '03. System Architecture', icon: Workflow },
  { id: 'implementation', label: '04. Implementation', icon: Cpu },
  { id: 'challenges', label: '05. Challenges Encountered', icon: ShieldAlert },
  { id: 'solution', label: '06. Resolution & Fixes', icon: CheckCircle2 },
  { id: 'result', label: '07. Result & Impact', icon: Trophy },
  { id: 'learnings', label: '08. Key Learnings', icon: BookOpen }
];

const sideSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.99
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    scale: 0.99,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ playClick, playHover }) => {
  const [selectedCaseStudyIndex, setSelectedCaseStudyIndex] = useState(0);
  const [activeStage, setActiveStage] = useState<StageKey>('problem');
  const [direction, setDirection] = useState(1);

  const currentStudy = CASE_STUDIES[selectedCaseStudyIndex];

  const handleStudyChange = (newIdx: number) => {
    setDirection(newIdx > selectedCaseStudyIndex ? 1 : -1);
    setSelectedCaseStudyIndex(newIdx);
    setActiveStage('problem');
    playClick();
  };

  const handleStageChange = (newStage: StageKey) => {
    const currentStageIdx = STAGES.findIndex(s => s.id === activeStage);
    const nextStageIdx = STAGES.findIndex(s => s.id === newStage);
    setDirection(nextStageIdx >= currentStageIdx ? 1 : -1);
    setActiveStage(newStage);
    playClick();
  };

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          idPrefix="ENGINEERING JOURNEY"
          title="CASE STUDIES"
          subtitle="A systematic breakdown of the problems solved, architectural hurdles overcome, and real-world engineering takeaways."
          accent="green"
        />

        {/* Project Selector Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.projectId}
              onClick={() => handleStudyChange(idx)}
              onMouseEnter={playHover}
              className={`px-4 py-2.5 rounded-2xl font-mono text-xs transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                selectedCaseStudyIndex === idx
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              <span>{study.projectTitle.split('—')[0]}</span>
            </button>
          ))}
        </div>

        {/* Split-Screen Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Overview & Sticky Stage Selector */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#030712]/90 border border-slate-800 backdrop-blur-xl shadow-xl space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/30">
                CASE STUDY 0{selectedCaseStudyIndex + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {currentStudy.projectTitle}
              </h3>

              {/* Stage Navigation List */}
              <div className="pt-4 border-t border-slate-800 space-y-1.5 font-mono text-xs">
                {STAGES.map((stg) => {
                  const Icon = stg.icon;
                  const isCurrent = activeStage === stg.id;

                  return (
                    <button
                      key={stg.id}
                      onClick={() => handleStageChange(stg.id)}
                      onMouseEnter={playHover}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isCurrent ? 'text-emerald-400' : 'text-slate-500'}`} />
                        <span>{stg.label}</span>
                      </div>
                      {isCurrent && <ChevronRight className="w-4 h-4 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Stage Content with Side-Way Animated Layer Transition */}
          <div className="lg:col-span-7 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${currentStudy.projectId}-${activeStage}`}
                custom={direction}
                variants={sideSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-6 sm:p-8 rounded-3xl bg-[#030712]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{STAGES.find(s => s.id === activeStage)?.label.toUpperCase()}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    STAGE {STAGES.findIndex(s => s.id === activeStage) + 1} OF 8
                  </span>
                </div>

                {/* Stage Text Render */}
                {activeStage === 'problem' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">What problem was being solved?</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.problem}</p>
                  </div>
                )}

                {activeStage === 'approach' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">How was the solution planned?</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.research}</p>
                  </div>
                )}

                {activeStage === 'architecture' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">How were components connected?</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.architecture}</p>
                  </div>
                )}

                {activeStage === 'implementation' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">How was the system constructed?</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.implementation}</p>
                  </div>
                )}

                {activeStage === 'challenges' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">Technical challenges encountered:</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.challenges}</p>
                  </div>
                )}

                {activeStage === 'solution' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">How were challenges addressed?</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.solution}</p>
                  </div>
                )}

                {activeStage === 'result' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">What was achieved?</h4>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">{currentStudy.result}</p>
                  </div>
                )}

                {activeStage === 'learnings' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold font-display text-white">What did the project teach?</h4>
                    <div className="space-y-2.5 pt-2">
                      {currentStudy.learnings.map((learning, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-200 font-sans">{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Next Stage Step Forward */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500">ENGINEERING CASE DOSSIER</span>
                  <button
                    onClick={() => {
                      const currentIndex = STAGES.findIndex(s => s.id === activeStage);
                      const nextIndex = (currentIndex + 1) % STAGES.length;
                      handleStageChange(STAGES[nextIndex].id);
                    }}
                    onMouseEnter={playHover}
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold cursor-pointer"
                  >
                    <span>Next Stage: {STAGES[(STAGES.findIndex(s => s.id === activeStage) + 1) % STAGES.length].label.split('.')[1]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

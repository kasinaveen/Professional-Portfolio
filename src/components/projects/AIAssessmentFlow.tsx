import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, FileCheck, CheckCircle2, RefreshCw, BarChart3, MessageSquare, Code2, Cpu } from 'lucide-react';

interface AIAssessmentFlowProps {
  playClick: () => void;
  playHover?: () => void;
}

const STAGES = [
  { step: '01', title: 'Candidate Input', desc: 'Code solution & explanation submitted', icon: <Terminal className="w-4 h-4 text-cyber-green" /> },
  { step: '02', title: 'Question Assessment', desc: 'Evaluates against domain criteria', icon: <FileCheck className="w-4 h-4 text-cyber-blue" /> },
  { step: '03', title: 'Knowledge Analysis', desc: 'Theoretical & OOP fundamentals check', icon: <Cpu className="w-4 h-4 text-cyber-cyan" /> },
  { step: '04', title: 'Technical Evaluation', desc: 'Time/space complexity & edge cases', icon: <Code2 className="w-4 h-4 text-amber-400" /> },
  { step: '05', title: 'Communication Check', desc: 'Clarity, jargon accuracy & structure', icon: <MessageSquare className="w-4 h-4 text-cyber-violet" /> },
  { step: '06', title: 'AI Synthesis Engine', desc: 'Aggregates multi-parameter matrix', icon: <Sparkles className="w-4 h-4 text-cyber-pink" /> },
  { step: '07', title: 'Readiness Dossier', desc: 'Final scorecard & actionable roadmap', icon: <BarChart3 className="w-4 h-4 text-emerald-400" /> }
];

export const AIAssessmentFlow: React.FC<AIAssessmentFlowProps> = ({ playClick, playHover }) => {
  const [selectedTopic, setSelectedTopic] = useState<'Java OOP' | 'Data Structures' | 'DBMS / SQL'>('Java OOP');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [scoreReport, setScoreReport] = useState<{
    overallScore: number;
    techDepth: number;
    communication: number;
    edgeCaseScore: number;
    readinessRating: string;
    summary: string;
  }>({
    overallScore: 92,
    techDepth: 94,
    communication: 89,
    edgeCaseScore: 90,
    readinessRating: 'INTERVIEW READY (TIER 1)',
    summary: 'Candidate demonstrated strong mastery of encapsulation, polymorphic interfaces, and multithreaded synchronization.'
  });

  const handleSimulateAssessment = (topic: 'Java OOP' | 'Data Structures' | 'DBMS / SQL') => {
    playClick();
    setSelectedTopic(topic);
    setIsEvaluating(true);

    setTimeout(() => {
      setIsEvaluating(false);
      if (topic === 'Java OOP') {
        setScoreReport({
          overallScore: 92,
          techDepth: 94,
          communication: 89,
          edgeCaseScore: 90,
          readinessRating: 'INTERVIEW READY (TIER 1)',
          summary: 'Candidate demonstrated solid mastery of OOP abstraction, immutable objects, and Java concurrency models.'
        });
      } else if (topic === 'Data Structures') {
        setScoreReport({
          overallScore: 88,
          techDepth: 91,
          communication: 86,
          edgeCaseScore: 87,
          readinessRating: 'HIGH READINESS',
          summary: 'Good understanding of logarithmic search trees, hash table collisions, and Big-O trade-offs.'
        });
      } else {
        setScoreReport({
          overallScore: 90,
          techDepth: 93,
          communication: 88,
          edgeCaseScore: 89,
          readinessRating: 'INTERVIEW READY',
          summary: 'Accurate SQL join structuring, index awareness, and relational normalization rationale.'
        });
      }
    }, 600);
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyber-pink/30 font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center gap-2 text-cyber-pink">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span className="font-bold text-sm">7-STAGE AI INTERVIEW EVALUATION PIPELINE</span>
        </div>
        <span className="text-[11px] text-slate-400">OPEN-SOURCE KNOWLEDGE SCORING</span>
      </div>

      {/* 7-Stage Process Flow Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
        {STAGES.map((s, idx) => (
          <div
            key={s.step}
            className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span>{s.icon}</span>
              <span className="text-[10px] text-slate-500 font-bold">{s.step}</span>
            </div>
            <div>
              <h6 className="font-bold text-slate-200 text-[11px] leading-tight">{s.title}</h6>
              <p className="text-[9px] text-slate-400 mt-0.5 leading-snug">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Evaluation Playground */}
      <div className="bg-slate-900/80 rounded-xl p-5 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs">Select Simulation Topic:</span>
            {(['Java OOP', 'Data Structures', 'DBMS / SQL'] as const).map((topic) => (
              <button
                key={topic}
                onClick={() => handleSimulateAssessment(topic)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedTopic === topic
                    ? 'bg-cyber-pink text-white font-bold shadow-neon-pink'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-cyber-cyan flex items-center gap-1">
            <RefreshCw className={`w-3.5 h-3.5 ${isEvaluating ? 'animate-spin' : ''}`} />
            {isEvaluating ? 'SYNTHESIZING REPORT...' : 'LIVE SCORING ENGINE'}
          </span>
        </div>

        {/* Dynamic Generated Scorecard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="p-4 rounded-xl bg-slate-950 border border-cyber-pink/40 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-mono">OVERALL READINESS</span>
            <div className="text-3xl font-bold font-display text-cyber-pink mt-1">
              {scoreReport.overallScore}%
            </div>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 inline-block mt-1">
              {scoreReport.readinessRating}
            </span>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-sans">Technical Depth & Accuracy</span>
              <span className="text-cyber-green font-bold">{scoreReport.techDepth}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div className="h-full bg-cyber-green rounded-full" style={{ width: `${scoreReport.techDepth}%` }} />
            </div>

            <div className="flex justify-between text-xs pt-1">
              <span className="text-slate-300 font-sans">Communication & Articulation</span>
              <span className="text-cyber-blue font-bold">{scoreReport.communication}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div className="h-full bg-cyber-blue rounded-full" style={{ width: `${scoreReport.communication}%` }} />
            </div>

            <div className="flex justify-between text-xs pt-1">
              <span className="text-slate-300 font-sans">Edge Case & Optimization Handling</span>
              <span className="text-amber-400 font-bold">{scoreReport.edgeCaseScore}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: `${scoreReport.edgeCaseScore}%` }} />
            </div>

            <p className="text-xs text-slate-300 font-sans italic pt-2 border-t border-slate-800">
              "{scoreReport.summary}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

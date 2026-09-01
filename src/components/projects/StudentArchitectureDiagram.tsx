import React from 'react';
import { motion } from 'framer-motion';
import { User, Layout, Server, Database, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StudentArchitectureDiagramProps {
  playHover?: () => void;
}

export const StudentArchitectureDiagram: React.FC<StudentArchitectureDiagramProps> = ({ playHover }) => {
  const steps = [
    {
      id: 'user',
      title: 'Admin User',
      sub: 'Student Data Input & CRUD Requests',
      icon: User,
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5'
    },
    {
      id: 'frontend',
      title: 'Frontend Portal',
      sub: 'Responsive UI • Input Validation',
      icon: Layout,
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/5'
    },
    {
      id: 'backend',
      title: 'Backend Controller',
      sub: 'Java & Python Business Logic • API Layer',
      icon: Server,
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/5'
    },
    {
      id: 'database',
      title: 'Database (DBMS)',
      sub: 'Relational Records • Foreign Keys • ACID',
      icon: Database,
      color: 'border-violet-500/40 text-violet-400 bg-violet-500/5'
    }
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#02050e] border border-emerald-500/30 font-mono text-xs shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <span className="font-bold text-sm text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          STUDENT MANAGEMENT SYSTEM // ARCHITECTURE PIPELINE
        </span>
        <span className="text-[11px] text-slate-400">DATA FLOW: USER → FRONTEND → BACKEND → DATABASE</span>
      </div>

      {/* 4-Tier Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onMouseEnter={playHover}
                className={`p-4 rounded-xl border ${step.color} flex flex-col justify-between relative group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">0{idx + 1}</span>
                </div>
                <h5 className="font-bold font-display text-white text-xs mb-1">{step.title}</h5>
                <p className="text-[10px] text-slate-400 font-sans">{step.sub}</p>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Networking & DBMS Concepts Highlight */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 font-sans text-xs">
        <span className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
          Integrated Core Computer Science Concepts:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Relational DBMS Schemas &amp; Referential Integrity</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Client-Server Networking &amp; Socket I/O Pipelines</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dual Java &amp; Python Multi-Backend Modules</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Input Sanitization &amp; Transaction Rollback Protection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

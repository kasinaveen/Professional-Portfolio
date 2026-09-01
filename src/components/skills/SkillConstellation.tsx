import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Layers, Database, Globe, Smartphone, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';

interface ConstellationNode {
  id: string;
  name: string;
  category: string;
  x: number; // percentage
  y: number; // percentage
  isPrimary?: boolean;
  icon: React.ElementType;
  description: string;
  relatedProjects: string[];
  connections: string[]; // target node IDs
}

const CONSTELLATION_NODES: ConstellationNode[] = [
  {
    id: 'java',
    name: 'JAVA (PRIMARY)',
    category: 'Core Language',
    x: 50,
    y: 22,
    isPrimary: true,
    icon: Coffee,
    description: 'Primary programming language with deep OOP architecture, multithreading, enterprise backend services, and TCP/JDBC integration.',
    relatedProjects: ['Student Management System', 'Hostel Management System'],
    connections: ['fullstack', 'database', 'networking']
  },
  {
    id: 'fullstack',
    name: 'FULL-STACK ARCHITECTURE',
    category: 'Engineering',
    x: 24,
    y: 50,
    icon: Layers,
    description: 'Tiered web and service architecture linking responsive client frontends to secure API routing and persistence layers.',
    relatedProjects: ['Hostel Management System', 'Student Management System', 'AI Interview Assessment'],
    connections: ['database', 'appdev']
  },
  {
    id: 'database',
    name: 'DATABASE SYSTEMS (DBMS)',
    category: 'Data Layer',
    x: 50,
    y: 78,
    icon: Database,
    description: 'Relational schema modeling, normalization, foreign key constraints, ACID transaction safety, and JDBC querying.',
    relatedProjects: ['Student Management System', 'Hostel Management System'],
    connections: ['networking', 'appdev']
  },
  {
    id: 'networking',
    name: 'COMPUTER NETWORKING',
    category: 'Protocols',
    x: 76,
    y: 50,
    icon: Globe,
    description: 'Low-latency TCP socket communication, SMTP mail delivery pipelines, port handling, and client-server protocols.',
    relatedProjects: ['Hostel Management System (TCP Queries & SMTP Alerts)'],
    connections: ['ai', 'java']
  },
  {
    id: 'appdev',
    name: 'APPLICATION DEVELOPMENT',
    category: 'Cross-Platform',
    x: 18,
    y: 82,
    icon: Smartphone,
    description: 'Engineering responsive Android and iOS application clients synchronized with centralized cloud/local backend databases.',
    relatedProjects: ['Hostel Management Android & iOS Apps'],
    connections: ['fullstack']
  },
  {
    id: 'ai',
    name: 'AI-POWERED SYSTEMS',
    category: 'Intelligent Logic',
    x: 82,
    y: 82,
    icon: Sparkles,
    description: 'Multi-stage automated assessment pipelines, knowledge extraction, scoring algorithms, and dynamic feedback synthesis.',
    relatedProjects: ['AI Open-Source Interview Knowledge Assessment'],
    connections: ['networking']
  }
];

interface SkillConstellationProps {
  playClick: () => void;
  playHover: () => void;
}

export const SkillConstellation: React.FC<SkillConstellationProps> = ({ playClick, playHover }) => {
  const [activeNode, setActiveNode] = useState<ConstellationNode>(CONSTELLATION_NODES[0]);

  return (
    <div className="rounded-3xl bg-[#030712]/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-mono text-emerald-400 tracking-wider">
            INTERACTIVE SYSTEM ARCHITECTURE METAPHOR
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Skill Constellation Map
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Hover or click any node to explore technical relationships
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
        {/* Left / Center: Interactive SVG Constellation Canvas */}
        <div className="lg:col-span-7 relative h-[380px] sm:h-[440px] rounded-2xl bg-[#02050e] border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
          {/* Constellation Connector Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {CONSTELLATION_NODES.map((node) =>
              node.connections.map((targetId) => {
                const targetNode = CONSTELLATION_NODES.find((n) => n.id === targetId);
                if (!targetNode) return null;
                const isConnectedToActive = activeNode.id === node.id || activeNode.id === targetId;

                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isConnectedToActive ? '#10b981' : '#334155'}
                    strokeWidth={isConnectedToActive ? '2.5' : '1'}
                    strokeDasharray={isConnectedToActive ? 'none' : '3 3'}
                    opacity={isConnectedToActive ? 0.9 : 0.4}
                    className="transition-all duration-300"
                  />
                );
              })
            )}
          </svg>

          {/* Interactive Nodes */}
          {CONSTELLATION_NODES.map((node) => {
            const isSelected = activeNode.id === node.id;
            const Icon = node.icon;

            return (
              <motion.button
                key={node.id}
                onClick={() => {
                  setActiveNode(node);
                  playClick();
                }}
                onMouseEnter={() => {
                  setActiveNode(node);
                  playHover();
                }}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute z-10 p-3 sm:p-3.5 rounded-2xl transition-all duration-300 flex flex-col items-center gap-1.5 focus:outline-none ${
                  isSelected
                    ? node.isPrimary
                      ? 'bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.9)] ring-4 ring-emerald-400/40'
                      : 'bg-cyan-500 text-black shadow-[0_0_25px_rgba(6,182,212,0.8)] ring-4 ring-cyan-400/40'
                    : node.isPrimary
                    ? 'bg-slate-900 border-2 border-emerald-500 text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-slate-900/90 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[10px] font-mono font-bold tracking-tight whitespace-nowrap">
                  {node.name.split(' ')[0]}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Active Node Detail Inspector */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-emerald-500/40 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold">
                  {activeNode.category}
                </span>
                {activeNode.isPrimary && (
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-bold font-mono">
                    PRIMARY SPECIALIZATION
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-2xl font-bold font-display text-white">
                  {activeNode.name}
                </h4>
                <p className="text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              {/* Related Projects */}
              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-cyan-400" />
                  <span>APPLIED IN PROJECTS:</span>
                </div>
                <div className="space-y-1.5">
                  {activeNode.relatedProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-sans text-slate-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

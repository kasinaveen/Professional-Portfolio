import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ShieldCheck, Layout, Server, Database, Mail, 
  Workflow, CheckCircle2, ArrowDown, Activity, Sparkles, Radio
} from 'lucide-react';

interface HostelArchitectureDiagramProps {
  playHover?: () => void;
}

export const HostelArchitectureDiagram: React.FC<HostelArchitectureDiagramProps> = ({ playHover }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'client',
      title: 'Multi-Platform Client',
      sub: 'Web Browser • Android APK • iOS App',
      icon: <Users className="w-5 h-5 text-cyber-green" />,
      color: 'border-cyber-green/40 bg-cyber-green/5 text-cyber-green',
      desc: 'Responsive user interfaces designed for Admins, Hostel Officers, and Hostellers with role-based dashboard views.'
    },
    {
      id: 'auth',
      title: 'Security & Auth Gateway',
      sub: 'Token Verification • Role-Based Access',
      icon: <ShieldCheck className="w-5 h-5 text-cyber-blue" />,
      color: 'border-cyber-blue/40 bg-cyber-blue/5 text-cyber-blue',
      desc: 'Guards endpoints against unauthorized access, enforcing granular privileges for room management and attendance.'
    },
    {
      id: 'api',
      title: 'REST API & Socket Router',
      sub: 'HTTP Endpoints • Low-Latency Routing',
      icon: <Layout className="w-5 h-5 text-cyber-cyan" />,
      color: 'border-cyber-cyan/40 bg-cyber-cyan/5 text-cyber-cyan',
      desc: 'Centralized routing layer handling asynchronous client payloads and dispatching events to backend services.'
    },
    {
      id: 'backend',
      title: 'Core Java / Python Backend',
      sub: 'Business Logic • Transaction Orchestrator',
      icon: <Server className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/40 bg-amber-500/5 text-amber-400',
      desc: 'Processes business operations, room allocations, query lifecycles, and transactional rollbacks.'
    },
    {
      id: 'db',
      title: 'DBMS Relational Persistence',
      sub: 'Normalized Relational Schemas • ACID',
      icon: <Database className="w-5 h-5 text-cyber-pink" />,
      color: 'border-cyber-pink/40 bg-cyber-pink/5 text-cyber-pink',
      desc: 'Stores student profiles, room capacity records, attendance logs, and ticket threads with strict key constraints.'
    }
  ];

  const microservices = [
    {
      id: 'attendance',
      name: 'Automatic Attendance Tracking',
      protocol: 'Batch Sync Engine',
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
      desc: 'Digital daily roll call logging and automated absence calculation.'
    },
    {
      id: 'query',
      name: 'Hosteller Query Resolution',
      protocol: 'TCP Socket Protocol',
      icon: <Workflow className="w-4 h-4 text-cyber-cyan" />,
      desc: 'Direct maintenance complaint logging and real-time resolution status dispatch.'
    },
    {
      id: 'email',
      name: 'Email Alerts Service',
      protocol: 'SMTP Protocol',
      icon: <Mail className="w-4 h-4 text-cyber-blue" />,
      desc: 'Automated notification daemons dispatching disciplinary, curfew, and fee alerts.'
    },
    {
      id: 'room',
      name: 'Room Allocation Engine',
      protocol: 'Transactional Locker',
      icon: <Radio className="w-4 h-4 text-cyber-violet" />,
      desc: 'Manages room capacities, asset checklists, and room swap requests.'
    }
  ];

  return (
    <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyber-green/30 font-mono text-xs shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-6">
        <div className="flex items-center gap-2 text-cyber-green">
          <Activity className="w-4 h-4 animate-pulse" />
          <span className="font-bold text-sm">HOSTEL SYSTEM INTERACTIVE ARCHITECTURE PIPELINE</span>
        </div>
        <span className="text-[11px] text-slate-400">DATA FLOW & DAEMON MICROSERVICES</span>
      </div>

      {/* Main Flow Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-6">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={playHover}
            onClick={() => setActiveNode(node.id)}
            className={`p-4 rounded-xl border ${node.color} flex flex-col justify-between cursor-pointer transition-all duration-300 relative group`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {node.icon}
                </span>
                <span className="text-[10px] text-slate-500 font-bold">0{index + 1}</span>
              </div>
              <h5 className="font-bold font-display text-slate-100 text-xs mb-1">{node.title}</h5>
              <p className="text-[10px] text-slate-400 font-mono">{node.sub}</p>
            </div>

            {/* Connecting Arrow for Desktop */}
            {index < nodes.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 group-hover:text-cyber-green transition-colors">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Active Node Detail Drawer */}
      {activeNode && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-cyber-cyan/40 text-slate-200"
        >
          <div className="flex items-center justify-between font-bold text-cyber-cyan mb-1">
            <span>NODE INSPECTION: {nodes.find(n => n.id === activeNode)?.title}</span>
            <button onClick={() => setActiveNode(null)} className="text-slate-400 hover:text-white">[X CLOSE]</button>
          </div>
          <p className="text-xs font-sans text-slate-300">{nodes.find(n => n.id === activeNode)?.desc}</p>
        </motion.div>
      )}

      {/* Auxiliary Microservices Grid */}
      <div>
        <h5 className="text-slate-400 uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyber-green" />
          STANDALONE BACKGROUND DAEMONS & PROTOCOL SERVICES:
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {microservices.map((svc) => (
            <div
              key={svc.id}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="p-1.5 rounded-md bg-slate-950 border border-slate-800">
                  {svc.icon}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-cyber-cyan border border-slate-800">
                  {svc.protocol}
                </span>
              </div>
              <h6 className="font-bold text-slate-200 text-xs font-sans">{svc.name}</h6>
              <p className="text-[11px] text-slate-400 font-sans mt-1 leading-snug">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

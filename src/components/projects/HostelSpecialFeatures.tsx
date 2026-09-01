import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, HelpCircle, Mail, Bell, ShieldCheck, 
  Layers, Smartphone, Database, Workflow, Radio, Sparkles 
} from 'lucide-react';

interface HighlightCard {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: React.ElementType;
  color: 'emerald' | 'cyan' | 'violet' | 'pink' | 'amber';
  description: string;
  architecturePoints: string[];
}

const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: 'multi_platform',
    title: 'Multi-Platform Client Ecosystem',
    category: 'CLIENT ARCHITECTURE',
    badge: 'Web + Android + iOS',
    icon: Smartphone,
    color: 'emerald',
    description: 'Constructed responsive client interfaces sharing unified RESTful endpoints, ensuring consistent state across web browsers, Android APKs, and iOS mobile devices.',
    architecturePoints: [
      'Role-tailored interfaces for Admins, Officers, and Hostellers',
      'Shared RESTful API payloads preventing data fragmentation'
    ]
  },
  {
    id: 'auth_security',
    title: 'Role-Based Authentication & Access Control',
    category: 'SECURITY & GATEWAYS',
    badge: 'Token Authorization',
    icon: ShieldCheck,
    color: 'cyan',
    description: 'Enforces strict separation of concerns with granular authorization tokens for Hostel Officers, System Admins, and Hostellers to guarantee data isolation.',
    architecturePoints: [
      'Token-authenticated endpoint verification',
      'Restricted administrative actions and operational CRUD'
    ]
  },
  {
    id: 'auto_attendance',
    title: 'Automated Night Attendance Engine',
    category: 'ATTENDANCE AUTOMATION',
    badge: 'Scheduled Batch Engine',
    icon: Clock,
    color: 'emerald',
    description: 'Replaces manual paper registers with digital evening roll calls, automated absence calculations, and live summary logging to officer dashboards.',
    architecturePoints: [
      'Timestamped digital check-ins during curfew hours',
      'Automated disciplinary and parent absence logging'
    ]
  },
  {
    id: 'query_tcp',
    title: 'Hosteller Query & TCP Socket Pipeline',
    category: 'NETWORKING PROTOCOLS',
    badge: 'TCP Socket Integration',
    icon: Workflow,
    color: 'cyan',
    description: 'Low-latency complaint tracking system that routes room maintenance, electrical, and plumbing tickets directly to administrators with instant status feedback.',
    architecturePoints: [
      'Multi-tier ticket priority classification (High / Normal / Low)',
      'Low-latency socket events and resolution status dispatch'
    ]
  },
  {
    id: 'smtp_alerts',
    title: 'SMTP Email Notification Daemon',
    category: 'COMMUNICATION SERVICES',
    badge: 'SMTP Background Daemon',
    icon: Mail,
    color: 'violet',
    description: 'Asynchronous background mail daemon utilizing standard SMTP protocol handshakes to dispatch emergency announcements, fee receipts, and curfew alerts.',
    architecturePoints: [
      'Non-blocking background mail queue processing',
      'Automated dispatch to hosteller and guardian inboxes'
    ]
  },
  {
    id: 'room_inventory',
    title: 'Room Allocation & Relational DBMS',
    category: 'DATABASE & TRANSACTIONS',
    badge: 'ACID Persistence',
    icon: Database,
    color: 'amber',
    description: 'Relational DBMS schema normalization maintaining room capacity thresholds, student asset records, and transactional consistency preventing double bookings.',
    architecturePoints: [
      'Transactional locking preventing room over-allocation',
      'Foreign-key bound audit trails for room changes'
    ]
  }
];

const COLOR_CLASSES = {
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]'
  },
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]'
  },
  violet: {
    border: 'border-violet-500/30 hover:border-violet-400',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]'
  },
  pink: {
    border: 'border-pink-500/30 hover:border-pink-400',
    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
    iconBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    glow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]'
  },
  amber: {
    border: 'border-amber-500/30 hover:border-amber-400',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]'
  }
};

interface HostelSpecialFeaturesProps {
  playClick?: () => void;
  playHover?: () => void;
}

export const HostelSpecialFeatures: React.FC<HostelSpecialFeaturesProps> = ({ playHover }) => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#030712]/90 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold tracking-wider uppercase block">
            ARCHITECTURAL HIGHLIGHTS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
            Hostel System Core Architectural &amp; Engineering Workflows
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>6 Core Distributed Components</span>
        </div>
      </div>

      {/* Natural Responsive Grid — Strictly NO Internal Scrolling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {HIGHLIGHT_CARDS.map((card) => {
          const Icon = card.icon;
          const style = COLOR_CLASSES[card.color];

          return (
            <motion.div
              key={card.id}
              whileHover={{ y: -3 }}
              onMouseEnter={playHover}
              className={`p-5 rounded-2xl bg-[#02050e] border ${style.border} ${style.glow} transition-all duration-300 flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                {/* Top Card Bar */}
                <div className="flex items-center justify-between gap-2">
                  <div className={`p-2 rounded-xl border ${style.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-lg border text-[10px] font-mono font-semibold ${style.badge} truncate`}>
                    {card.badge}
                  </span>
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase">
                    {card.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-display text-white mt-0.5 leading-snug break-words">
                    {card.title}
                  </h4>
                </div>

                {/* Clear Description */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed break-words">
                  {card.description}
                </p>
              </div>

              {/* Architectural Highlights Bullet Points */}
              <div className="pt-3 border-t border-slate-800/80 space-y-1.5 font-mono text-[11px]">
                {card.architecturePoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-slate-400">
                    <span className="text-emerald-400 shrink-0 mt-0.5">&#9656;</span>
                    <span className="leading-tight text-slate-300 break-words">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

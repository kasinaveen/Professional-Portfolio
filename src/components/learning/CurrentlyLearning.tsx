import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, Compass, CheckCircle2, Flame, Layers, Coffee, Smartphone, Database, Globe, Network, Cpu } from 'lucide-react';

interface CurrentlyLearningProps {
  playHover: () => void;
}

const LEARNING_TOPICS = [
  {
    title: "Advanced Full-Stack Development",
    category: "DEEPENING",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    desc: "Microservices orchestration, server-side caching with Redis, GraphQL schema integration, and high-concurrency state machines.",
    icon: Layers,
    focus: ["Microservices", "Redis Caching", "GraphQL", "Reactive State"]
  },
  {
    title: "Advanced Java & JVM Architecture",
    category: "DEEPENING",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    desc: "Spring Boot enterprise patterns, JVM memory model, garbage collection optimization, and reactive Java stream pipelines.",
    icon: Coffee,
    focus: ["Spring Boot", "JVM Tuning", "Reactive Streams", "Concurrency"]
  },
  {
    title: "Mobile Application Ecosystems",
    category: "PRACTICING",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    desc: "Background daemon synchronization, mobile push notification architectures, touch ergonomics, and offline cache hydration.",
    icon: Smartphone,
    focus: ["Background Sync", "Push Daemons", "Offline Hydration", "Touch UX"]
  },
  {
    title: "AI-Powered Applications & Systems",
    category: "EXPLORING",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    desc: "7-stage evaluation pipelines, LLM endpoint integration, automated assessment scoring matrices, and knowledge graph mapping.",
    icon: Sparkles,
    focus: ["AI Pipelines", "Scoring Algorithms", "LLM APIs", "Readiness Synthesis"]
  },
  {
    title: "Database Systems & Scalability",
    category: "PRACTICING",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    desc: "Relational query execution plans, indexing strategies, distributed ACID transactions, and database connection pooling.",
    icon: Database,
    focus: ["Query Optimization", "Indexing Strategies", "ACID Safety", "Connection Pools"]
  },
  {
    title: "Computer Networks & Protocol Daemons",
    category: "PRACTICING",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    desc: "TCP socket multiplexing, low-latency packet streaming, SMTP mail transaction handshakes, and network security gateways.",
    icon: Globe,
    focus: ["TCP Sockets", "SMTP Handshakes", "Port Handling", "Network I/O"]
  },
  {
    title: "Software Architecture & System Design",
    category: "EXPLORING",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    desc: "Decoupled service design, load balancing trade-offs, fault tolerance, and separation of concerns across multi-tier applications.",
    icon: Network,
    focus: ["System Design", "Decoupling", "Load Balancing", "Fault Tolerance"]
  },
  {
    title: "Problem Solving & Algorithmic Rigor",
    category: "DEEPENING",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    desc: "Continuous refinement of data structures, algorithmic complexity optimization, and competitive hackathon engineering.",
    icon: Cpu,
    focus: ["DSA Mastery", "Time Complexity", "Competitive Problem Solving", "Edge Cases"]
  }
];

export const CurrentlyLearning: React.FC<CurrentlyLearningProps> = ({ playHover }) => {
  return (
    <section id="learning" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          idPrefix="CONTINUOUS GROWTH"
          title="CURRENTLY LEARNING"
          subtitle="Areas of ongoing exploration, engineering practice, and architectural deepening—categorised clearly without fake metrics."
          accent="green"
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
          <span className="text-slate-400 font-sans">Active Learning Categories:</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
            DEEPENING
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
            PRACTICING
          </span>
          <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-bold">
            EXPLORING
          </span>
        </div>

        {/* Grid of Learning Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_TOPICS.map((topic, idx) => {
            const Icon = topic.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={playHover}
                className="p-6 rounded-3xl bg-[#030712]/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold border ${topic.badgeColor}`}>
                      {topic.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                    {topic.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {topic.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {topic.focus.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

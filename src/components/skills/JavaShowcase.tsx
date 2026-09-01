import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Coffee, Play, Terminal, CheckCircle2, Award, Sparkles, Layers, Cpu } from 'lucide-react';
import { NPTEL_CERTIFICATION } from '../../data/portfolioData';

interface JavaShowcaseProps {
  playClick: () => void;
  playHover: () => void;
  playSuccess: () => void;
}

const EXACT_JAVA_CODE = `public class Developer {

    public static void main(String[] args) {

        String developer = "Kasi Naveen K";

        System.out.println(
            "Building practical software solutions."
        );
    }
}`;

export const JavaShowcase: React.FC<JavaShowcaseProps> = ({
  playClick,
  playHover,
  playSuccess,
}) => {
  const [typedCode, setTypedCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= EXACT_JAVA_CODE.length) {
        setTypedCode(EXACT_JAVA_CODE.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  const handleRunJava = () => {
    playClick();
    setIsRunning(true);
    setConsoleOutput(['$ javac Developer.java', '$ java Developer']);

    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput(prev => [
        ...prev,
        'Building practical software solutions.',
        '[Process finished with exit code 0]'
      ]);
      playSuccess();
    }, 700);
  };

  return (
    <section id="java" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          idPrefix="PRIMARY SPECIALIZATION"
          title="JAVA — MY PRIMARY LANGUAGE"
          subtitle="A dedicated deep dive into enterprise OOP design, robust socket programming, and database architecture powered by Java."
          accent="green"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10">
          {/* Left Column: Language Profile & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-[#030712]/80 backdrop-blur-md border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.12)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                  <Coffee className="w-5 h-5 text-emerald-400" />
                  <span>PRIMARY LANGUAGE</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/40">
                  JAVA SE / OOP
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                Java at the Core of My Software
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Java serves as my core foundation for constructing robust, maintainable systems. Its strict type safety, multithreading primitives, and rich ecosystem make it my tool of choice for backend engineering, socket daemons, and database persistence.
              </p>

              {/* Verified NPTEL Certification Banner */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-mono text-xs font-bold text-emerald-300">
                    NPTEL: {NPTEL_CERTIFICATION.courseTitle}
                  </h5>
                  <p className="text-xs text-slate-300 font-sans mt-0.5 leading-relaxed">
                    Certified completion of rigorous curriculum covering OOP, Collections, Multithreading, and Exception Handling.
                  </p>
                </div>
              </div>

              {/* Supporting Languages */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400">Supporting Languages:</span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-xs">
                    Python (Scripting &amp; AI Integration)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs">
                    C (Systems &amp; Memory)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Panel & Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-[#02050e] shadow-2xl font-mono text-xs"
          >
            {/* Window Title Bar */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-300 font-sans text-xs ml-2 flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-emerald-400" />
                  <span>Developer.java</span>
                </span>
              </div>

              <button
                onClick={handleRunJava}
                disabled={isRunning}
                onMouseEnter={playHover}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-1.5 transition-all text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>{isRunning ? 'EXECUTING...' : 'RUN JAVA CODE'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 sm:p-6 bg-[#02050e] text-slate-200 min-h-[220px] overflow-x-auto selection:bg-emerald-500/30">
              <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                <code>
                  {typedCode}
                  <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block ml-0.5" />
                </code>
              </pre>
            </div>

            {/* Console Output Simulator */}
            <div className="bg-[#030712] border-t border-slate-800/80 p-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 border-b border-slate-800/60 pb-1.5">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Terminal className="w-3.5 h-3.5" />
                  JVM RUNTIME CONSOLE
                </span>
                <span className="text-slate-500">OpenJDK 64-Bit VM</span>
              </div>

              <div className="space-y-1 text-xs">
                {consoleOutput.length === 0 ? (
                  <p className="text-slate-500 italic">Click 'RUN JAVA CODE' to compile and execute Developer.java...</p>
                ) : (
                  consoleOutput.map((log, idx) => (
                    <p
                      key={idx}
                      className={
                        log.includes('Building practical software')
                          ? 'text-emerald-300 font-bold'
                          : log.startsWith('$')
                          ? 'text-slate-400'
                          : 'text-cyan-400'
                      }
                    >
                      {log}
                    </p>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

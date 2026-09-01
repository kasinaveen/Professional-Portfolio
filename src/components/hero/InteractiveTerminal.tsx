import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, SOCIAL_LINKS } from '../../data/portfolioData';

interface TerminalOutput {
  id: string;
  command: string;
  response: string | React.ReactNode;
  timestamp: string;
}

interface InteractiveTerminalProps {
  playTerminalKey: () => void;
  playSuccess: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  playTerminalKey,
  playSuccess,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalOutput[]>([
    {
      id: 'init-1',
      command: 'whoami',
      response: (
        <div className="space-y-1 text-cyber-green-bright">
          <p className="font-bold">Kasi Naveen K</p>
          <p className="text-slate-300">
            Computer Science & Engineering Student (3rd Year, 8.9 CGPA)
          </p>
          <p className="text-cyber-blue">
            Full-Stack Developer • App Developer • Java Specialist
          </p>
        </div>
      ),
      timestamp: '17:51:00'
    },
    {
      id: 'init-2',
      command: 'java --version',
      response: (
        <div className="text-slate-300">
          <span className="text-amber-400 font-bold">openjdk 21.0.2 (LTS) - Primary Language: Java</span>
          <p className="text-xs text-slate-400 mt-0.5">
            Core OOP Architecture • Multithreading • Enterprise Backend • NPTEL Certified
          </p>
        </div>
      ),
      timestamp: '17:51:01'
    },
    {
      id: 'init-3',
      command: 'skills --show',
      response: (
        <div className="text-slate-300 text-xs flex flex-wrap gap-1.5 mt-1">
          <span className="px-2 py-0.5 rounded bg-emerald-950 border border-cyber-green text-cyber-green font-bold">Java (Primary)</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200">Python</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200">C</span>
          <span className="px-2 py-0.5 rounded bg-blue-950 border border-cyber-blue text-cyber-blue">Full-Stack Web</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200">DBMS & SQL</span>
          <span className="px-2 py-0.5 rounded bg-violet-950 border border-cyber-violet text-cyber-violet">TCP/SMTP Networking</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200">App Development (Android/iOS)</span>
          <span className="px-2 py-0.5 rounded bg-pink-950 border border-cyber-pink text-cyber-pink">AI Evaluation</span>
        </div>
      ),
      timestamp: '17:51:02'
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-cyber-green font-bold">AVAILABLE TERMINAL COMMANDS:</p>
            <p><span className="text-cyber-blue font-mono">whoami</span> — Display developer profile & role</p>
            <p><span className="text-cyber-blue font-mono">java --version</span> — Inspect Java runtime & specialization</p>
            <p><span className="text-cyber-blue font-mono">skills</span> — List all categorized technologies</p>
            <p><span className="text-cyber-blue font-mono">projects</span> — List full-stack & mobile engineering projects</p>
            <p><span className="text-cyber-blue font-mono">education</span> — View university & academic record (8.9 CGPA)</p>
            <p><span className="text-cyber-blue font-mono">cat resume.txt</span> — Read career objective & credentials</p>
            <p><span className="text-cyber-blue font-mono">contact</span> — Get verified email & phone</p>
            <p><span className="text-cyber-blue font-mono">clear</span> — Clear terminal screen</p>
            <p><span className="text-cyber-blue font-mono">sudo hire</span> — Unlock Easter egg</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-slate-200 text-xs space-y-1">
            <p className="text-cyber-green font-bold">{PERSONAL_INFO.name}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-cyber-cyan">CGPA: {EDUCATION_DATA.cgpa} / {EDUCATION_DATA.cgpaMax} (GCE Sengipatti, Thanjavur)</p>
          </div>
        );
        break;

      case 'java':
      case 'java --version':
      case 'java -v':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-amber-400 font-bold">Java SE 21 Enterprise Development (Primary Language)</p>
            <p className="text-slate-300">NPTEL Course Completed: "Programming in Java"</p>
            <p className="text-slate-400">Used for Hostel Management Backend, Student Management System & OOP Architectures.</p>
          </div>
        );
        break;

      case 'skills':
      case 'skills --show':
      case 'ls skills':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyber-green font-bold">Technical Matrix Loaded ({SKILLS_DATA.length} verified skills):</p>
            <p><span className="text-amber-400 font-semibold">Programming:</span> Java (Primary), Python, C</p>
            <p><span className="text-cyber-blue font-semibold">Full-Stack:</span> Frontend, Backend, REST APIs, Database Integration, Multi-tier Architecture</p>
            <p><span className="text-cyber-cyan font-semibold">Networking & DB:</span> TCP Sockets, SMTP Email Protocol, DBMS, Relational Design, SQL</p>
            <p><span className="text-cyber-violet font-semibold">Mobile & AI:</span> Android, iOS Application Integration, AI Readiness Evaluation</p>
          </div>
        );
        break;

      case 'projects':
      case 'ls projects':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyber-green font-bold">Projects in Workspace:</p>
            {PROJECTS_DATA.map((p, idx) => (
              <div key={p.id} className="pl-2 border-l border-slate-700">
                <p className="text-cyber-cyan font-semibold">{idx + 1}. {p.title} <span className="text-slate-500 font-normal">[{p.badge}]</span></p>
                <p className="text-slate-400 text-[11px]">{p.subtitle}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyber-green font-bold">{EDUCATION_DATA.degree}</p>
            <p>{EDUCATION_DATA.institution}, {EDUCATION_DATA.location}</p>
            <p className="text-cyber-blue">{EDUCATION_DATA.currentYear} • CGPA: <span className="font-bold text-cyber-green">{EDUCATION_DATA.cgpa} / {EDUCATION_DATA.cgpaMax}</span> ({EDUCATION_DATA.semesterCoverage})</p>
          </div>
        );
        break;

      case 'cat resume.txt':
      case 'resume':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyber-green font-bold">CAREER OBJECTIVE:</p>
            <p className="italic text-slate-300">"{PERSONAL_INFO.careerObjective}"</p>
            <p className="text-cyber-cyan mt-1">Direct Download: <a href={SOCIAL_LINKS.resumePdf} download className="underline text-cyber-green font-bold">/public/Kasi_Naveen_K_Resume.pdf</a></p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyber-green font-bold">COMMUNICATION CHANNELS:</p>
            <p>Email: <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-cyber-blue underline">{SOCIAL_LINKS.email}</a></p>
            <p>Phone: <span className="text-slate-200">{SOCIAL_LINKS.phone}</span></p>
            <p>GitHub: <span className="text-slate-400">{SOCIAL_LINKS.github}</span></p>
            <p>LinkedIn: <span className="text-slate-400">{SOCIAL_LINKS.linkedin}</span></p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        playSuccess();
        return;

      case 'sudo':
      case 'sudo hire':
        response = (
          <div className="text-xs text-cyber-green p-2 rounded bg-emerald-950/60 border border-cyber-green font-bold animate-pulse">
            🎉 ACCESS GRANTED: 100% Match! Kasi Naveen K is available for software engineering roles & internships.
          </div>
        );
        break;

      default:
        response = (
          <div className="text-xs text-rose-400">
            Command not recognized: <span className="font-mono">{cmd}</span>. Type <span className="text-cyber-green font-bold underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmd,
        response,
        timestamp: time
      }
    ]);
    setInputVal('');
    playSuccess();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else {
      playTerminalKey();
    }
  };

  const commandChips = ['whoami', 'java --version', 'skills', 'projects', 'education', 'contact', 'clear'];

  return (
    <div className="w-full rounded-xl overflow-hidden border border-cyber-green/30 bg-cyber-black/90 shadow-2xl font-mono text-xs text-slate-300 relative group backdrop-blur-md">
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-cyber-green/20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          <span className="text-[11px] text-slate-400 font-sans ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyber-green" />
            <span>kasi@workstation:~ (bash)</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyber-green">LIVE</span>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 max-h-72 min-h-[190px] overflow-y-auto space-y-3 scrollbar-thin">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyber-green font-bold">kasi@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-cyber-blue font-semibold">~$</span>
              <span className="text-slate-100 font-bold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto select-none">{item.timestamp}</span>
            </div>
            <div className="pl-4 border-l border-slate-800 py-0.5">
              {item.response}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px]">
        <span className="text-slate-500 flex items-center gap-1 shrink-0">
          <Sparkles className="w-3 h-3 text-cyber-cyan" /> Quick run:
        </span>
        {commandChips.map((chip) => (
          <button
            key={chip}
            onClick={() => executeCommand(chip)}
            className="px-2 py-0.5 rounded border border-slate-800 hover:border-cyber-green/50 hover:bg-cyber-green/10 text-slate-400 hover:text-cyber-green transition-all whitespace-nowrap"
          >
            ${chip}
          </button>
        ))}
      </div>

      {/* Active Command Input Line */}
      <div className="p-3 bg-slate-900/60 border-t border-cyber-green/20 flex items-center gap-2">
        <span className="text-cyber-green font-bold shrink-0">kasi@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help', 'skills', 'projects', 'education'..."
          className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs"
          autoComplete="off"
          spellCheck="false"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          className="p-1.5 rounded text-cyber-green hover:bg-cyber-green/20 transition-colors"
          title="Run Command"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

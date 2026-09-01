import React, { useEffect, useRef } from 'react';

const CODE_SNIPPETS = [
  'public class Developer {',
  '  String name = "Kasi Naveen K";',
  '  System.out.println("Java Specialist");',
  '}',
  'SELECT * FROM students WHERE cgpa >= 8.9;',
  'GET /api/v1/hostel/rooms/available',
  'POST /api/v1/attendance/sync',
  'socket.connect(new InetSocketAddress(host, 8080));',
  'SMTPClient.sendAlert("Attendance Verified");',
  'while(learning) { improve(); }',
  'if(bugDetected) { debugRootCause(); }',
  'JVM.allocateHeap(memoryPool);',
  'TCP.handshake(SYN, SYN_ACK, ACK);',
  'OAuth2.verifyToken(bearerToken);',
  'const [state, dispatch] = useReducer(reducer);',
  'List<Student> list = new ArrayList<>();',
  'git commit -m "feat: scalable architecture"'
];

export const CodeRainCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const fontSize = 13;
    const columns = Math.floor(width / 22);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    const snippetsIndex: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * CODE_SNIPPETS.length));

    const render = () => {
      ctx.fillStyle = 'rgba(5, 7, 10, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const snippet = CODE_SNIPPETS[snippetsIndex[i]];
        const charIndex = Math.abs(drops[i]) % snippet.length;
        const char = snippet[charIndex] || '0';

        // Gradient coloring: Head is bright green/cyan, tail is faint
        const isHead = Math.random() > 0.85;
        ctx.fillStyle = isHead ? '#00FF66' : 'rgba(0, 240, 255, 0.35)';
        ctx.shadowColor = '#00FF66';
        ctx.shadowBlur = isHead ? 6 : 0;

        ctx.fillText(char, i * 22, drops[i] * fontSize);
        ctx.shadowBlur = 0;

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
          snippetsIndex[i] = Math.floor(Math.random() * CODE_SNIPPETS.length);
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-25 dark:opacity-20 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
};

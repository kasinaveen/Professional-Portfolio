import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: number; // 1: distant, 2: mid, 3: foreground particle
  speedX: number;
  speedY: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  decay: number;
}

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Track scroll for subtle parallax
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Initialize Stars: sparse, elegant, cosmic depth
    let stars: Star[] = [];
    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 7500); // Sparse, not overcrowded
      const totalStars = Math.min(Math.max(starCount, 80), 220);

      for (let i = 0; i < totalStars; i++) {
        const layer = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
        const size = layer === 1 ? Math.random() * 0.9 + 0.4 : layer === 2 ? Math.random() * 1.2 + 0.8 : Math.random() * 1.5 + 1.2;
        const baseAlpha = layer === 1 ? Math.random() * 0.4 + 0.15 : layer === 2 ? Math.random() * 0.5 + 0.3 : Math.random() * 0.4 + 0.5;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          layer,
          speedX: (Math.random() - 0.5) * (layer === 1 ? 0.02 : 0.05),
          speedY: (Math.random() - 0.5) * (layer === 1 ? 0.02 : 0.05),
        });
      }
    };
    initStars();

    // Shooting Star Manager: Rare and cinematic
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      opacity: 0,
      active: false,
      decay: 0.015,
    };

    let timeSinceLastShootingStar = 0;
    const triggerShootingStar = () => {
      shootingStar = {
        x: Math.random() * (width * 0.8) + width * 0.1,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 7,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3, // ~45 degrees diagonal
        opacity: 0.9,
        active: true,
        decay: Math.random() * 0.012 + 0.01,
      };
    };

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Smooth scroll parallax interpolation
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Layer 1: Deep space base background
      ctx.fillStyle = '#020611';
      ctx.fillRect(0, 0, width, height);

      // Layer 2: Subtle cosmic nebula glow clouds (deep purple & very subtle teal/blue)
      const grad1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.3 - (scrollY * 0.02) % height,
        10,
        width * 0.2,
        height * 0.3 - (scrollY * 0.02) % height,
        width * 0.55
      );
      grad1.addColorStop(0, 'rgba(30, 27, 75, 0.25)'); // deep purple
      grad1.addColorStop(0.6, 'rgba(15, 23, 42, 0.1)');
      grad1.addColorStop(1, 'rgba(2, 6, 17, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.7 - (scrollY * 0.03) % height,
        10,
        width * 0.8,
        height * 0.7 - (scrollY * 0.03) % height,
        width * 0.5
      );
      grad2.addColorStop(0, 'rgba(16, 185, 129, 0.05)'); // subtle emerald hint
      grad2.addColorStop(0.5, 'rgba(6, 182, 212, 0.04)'); // subtle cyan
      grad2.addColorStop(1, 'rgba(2, 6, 17, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw and animate stars with parallax
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          // Slow floating drift
          star.x += star.speedX;
          star.y += star.speedY;

          // Wrap edges
          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;

          // Twinkle
          star.twinklePhase += star.twinkleSpeed;
          star.alpha = star.baseAlpha + Math.sin(star.twinklePhase) * (star.baseAlpha * 0.5);
        }

        // Parallax offset per layer
        const parallaxOffset = (scrollY * (star.layer * 0.04)) % height;
        let starY = (star.y - parallaxOffset + height) % height;

        ctx.beginPath();
        ctx.arc(star.x, starY, star.size, 0, Math.PI * 2);

        // Color based on layer (subtle cosmic whites, light blues, emerald tint)
        if (star.layer === 3) {
          ctx.fillStyle = `rgba(167, 243, 208, ${Math.max(0.1, Math.min(1, star.alpha))})`; // soft emerald
        } else if (star.layer === 2) {
          ctx.fillStyle = `rgba(224, 242, 254, ${Math.max(0.1, Math.min(1, star.alpha))})`; // icy blue
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, Math.min(0.8, star.alpha))})`; // soft distant white
        }

        ctx.fill();
      }

      // Rare shooting star update & render
      if (!prefersReducedMotion) {
        timeSinceLastShootingStar += delta;
        if (!shootingStar.active && timeSinceLastShootingStar > 10) {
          if (Math.random() < 0.03) {
            triggerShootingStar();
            timeSinceLastShootingStar = 0;
          }
        }

        if (shootingStar.active) {
          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
          shootingStar.opacity -= shootingStar.decay;

          if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
            shootingStar.active = false;
          } else {
            const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
            const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

            const shootGrad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
            shootGrad.addColorStop(0, 'rgba(16, 185, 129, 0)');
            shootGrad.addColorStop(0.7, `rgba(6, 182, 212, ${shootingStar.opacity * 0.6})`);
            shootGrad.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`);

            ctx.strokeStyle = shootGrad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(shootingStar.x, shootingStar.y);
            ctx.stroke();

            // Head glow
            ctx.beginPath();
            ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#020611' }}
      aria-hidden="true"
    />
  );
};

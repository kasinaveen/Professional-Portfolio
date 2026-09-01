import { useState, useCallback } from 'react';

export function useSoundEffects() {
  const playTone = useCallback((freq = 800, type: OscillatorType = 'sine', duration = 0.05, gainValue = 0.03) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainValue, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext suppression fallback
    }
  }, []);

  const playClick = useCallback(() => playTone(1200, 'sine', 0.03, 0.02), [playTone]);
  const playHover = useCallback(() => playTone(600, 'triangle', 0.02, 0.01), [playTone]);
  const playTerminalKey = useCallback(() => playTone(950, 'sine', 0.015, 0.015), [playTone]);
  const playSuccess = useCallback(() => {
    playTone(587.33, 'sine', 0.08, 0.025);
    setTimeout(() => playTone(880, 'sine', 0.12, 0.025), 90);
  }, [playTone]);

  return { playClick, playHover, playTerminalKey, playSuccess };
}

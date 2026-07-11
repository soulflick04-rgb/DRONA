import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-pulse"></div>

      {/* Rotating Rings */}
      <div className="absolute w-[300px] h-[300px] border border-primary/20 rounded-full animate-spin [animation-duration:8s]"></div>
      <div className="absolute w-[220px] h-[220px] border border-secondary/20 rounded-full animate-spin [animation-duration:6s]"></div>
      <div className="absolute w-[150px] h-[150px] border border-primary-light/20 rounded-full animate-spin [animation-duration:4s]"></div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative w-36 h-36 rounded-[2.5rem] bg-white/5 border border-primary/20 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.25)]">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-5xl shadow-lg shadow-primary/30">
              D
            </div>
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-5xl md:text-6xl font-black tracking-tight font-heading text-white">
          Drona
        </h1>

        {/* AI Loading */}
        <p className="mt-4 text-text-secondary text-lg font-medium animate-pulse">
          Preparing Intelligence...
        </p>

        {/* Loading Bar */}
        <div className="mt-10 w-[240px] h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-light via-primary to-secondary rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
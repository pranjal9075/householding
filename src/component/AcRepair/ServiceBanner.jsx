import React from 'react';

const ServiceBanner = ({ title }) => {
  return (
    <div className="relative w-full h-64 md:h-96 bg-[#010409] flex items-center overflow-hidden">
      
      {/* 1. LIQUID BACKGROUND MESH */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-red-600/20 rounded-full blur-[100px] animate-bounce-slow"></div>
      </div>

      {/* 2. HI-TECH GRID OVERLAY */}
      <div className="absolute inset-0 z-[1] opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-8 w-full z-10 flex flex-col md:flex-row justify-between items-center">
        
        {/* TEXT SECTION */}
        <div className="relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-red-500 to-blue-500 rounded-full"></div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-400 to-white animate-text-shimmer bg-[length:200%_auto]">
              {title}
            </span>
          </h1>
          
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-red-500 font-bold tracking-[0.5em] text-xs uppercase">
              Zak & Pak • Industrial Innovation
            </p>
            <div className="h-px w-full bg-gradient-to-r from-red-500/50 to-transparent"></div>
          </div>
        </div>

        {/* 3. UNIQUE FLOATING ORBITAL GEARS */}
        <div className="hidden md:flex relative w-64 h-64 items-center justify-center">
          {/* Outer Glowing Ring */}
          <div className="absolute inset-0 border-[1px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444]"></div>
          </div>
          
          {/* Middle Gear (White) */}
          <div className="animate-spin-slow opacity-60">
             <GearComponent size="w-40 h-40" color="text-white" strokeWidth={1} />
          </div>

          {/* Inner Gear (Red - Reverse) */}
          <div className="absolute animate-spin-reverse-slow">
             <GearComponent size="w-20 h-20" color="text-red-600" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* 4. ANIMATED SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.03] to-transparent h-1/2 animate-scanline"></div>
    </div>
  );
};

// SVG Gear Component
const GearComponent = ({ size, color, strokeWidth }) => (
  <svg className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

export default ServiceBanner;
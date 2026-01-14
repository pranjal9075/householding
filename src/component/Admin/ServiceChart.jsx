import React from 'react';

const ServiceChart = () => {
  const bars = [
    { label: 'Jan', h: '40%', c: 'bg-blue-500' },
    { label: 'Feb', h: '70%', c: 'bg-orange-500' },
    { label: 'Mar', h: '50%', c: 'bg-blue-600' },
    { label: 'Apr', h: '90%', c: 'bg-orange-400' },
    { label: 'May', h: '60%', c: 'bg-blue-700' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
      <h2 className="text-lg font-bold text-slate-800 mb-8">Top Services</h2>
      <div className="flex items-end justify-between h-48 gap-2">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3">
            <div style={{ height: bar.h }} className={`${bar.c} w-full rounded-t-md opacity-90 hover:opacity-100 transition-opacity`}></div>
            <span className="text-[10px] font-bold text-slate-400">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceChart;
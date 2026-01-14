import React from 'react';
import { TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, subValue, hasChart, children }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex-1 min-w-[200px]">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</h3>
      <div className="text-slate-300"><TrendingUp size={16} /></div>
    </div>
    
    <div className="flex items-end gap-3">
      <span className="text-3xl font-bold text-slate-800">{value}</span>
      {hasChart && (
        <div className="flex gap-1 h-8 items-end mb-1">
          <div className="w-1 bg-blue-100 h-2"></div>
          <div className="w-1 bg-blue-200 h-4"></div>
          <div className="w-1 bg-blue-400 h-3"></div>
          <div className="w-1 bg-blue-600 h-6"></div>
        </div>
      )}
    </div>
    
    {subValue && <div className="text-2xl font-bold mt-2 text-slate-700">{subValue}</div>}
    {children}
  </div>
);

export default StatCard;
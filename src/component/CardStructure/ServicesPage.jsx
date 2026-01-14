import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ item, index, isOpen, toggle }) => (
  <div 
    className={`mb-4 transition-all duration-500 rounded-2xl ${
      isOpen 
        ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-blue-100' 
        : 'bg-white/60 hover:bg-white shadow-sm'
    }`}
  >
    <button 
      onClick={toggle} 
      className="w-full flex items-center justify-between p-6 text-left group"
    >
      <div className="flex items-center gap-5">
        {/* Elegant circular number */}
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold tracking-tighter transition-all duration-500 ${
          isOpen ? 'bg-[#2a6b8d] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#2a6b8d]'
        }`}>
          {index + 1}
        </span>
        
        <span className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-300 ${
          isOpen ? 'text-black' : 'text-[#2a6b8d] group-hover:text-black'
        }`}>
          {item.q}
        </span>
      </div>

      {/* Rotating Chevron Icon */}
      <div className={`transition-all duration-500 transform p-2 rounded-full ${
        isOpen ? 'rotate-180 bg-blue-50 text-[#2a6b8d]' : 'rotate-0 text-gray-300'
      }`}>
        <FaChevronDown size={18} />
      </div>
    </button>
    
    {/* Smooth Animated Reveal */}
    <div className={`grid transition-all duration-500 ease-in-out ${
      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
    }`}>
      <div className="overflow-hidden">
        <div className="px-6 pb-8 ml-[52px] border-t border-gray-50 pt-4">
          <p className="text-[#555] text-lg leading-relaxed font-normal">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function ACServicesPage({items}) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-24 min-h-screen">
      <div className="max-w-[850px] mx-auto px-6">
        
        {/* Beautiful Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 -top-10 flex justify-center opacity-20">
            <span className="text-8xl font-black text-blue-100 select-none">FAQ</span>
          </div>
          <h2 className="relative text-[12px] font-black text-blue-500 uppercase tracking-[0.6em] mb-3">
            Got Questions?
          </h2>
          <h3 className="relative text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
            Clarity in every detail<span className="text-blue-500">.</span>
          </h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Accordion Stack */}
        <div className="relative">
          {items.map((item, idx) => (
            <FAQItem 
              key={idx} 
              item={item} 
              index={idx} 
              isOpen={openFaq === idx} 
              toggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            />
          ))}
        </div>

        {/* Support Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium">
            Don't see your question? 
            <button className="ml-2 text-[#2a6b8d] font-bold hover:underline">
              Email our support team
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}
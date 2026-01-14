import React from 'react';
import { assets } from '../../assets/assets';

const contractorData = [
  { id: 1, name: 'PAINTING CONTRACTORS', image: assets.painting_contracting },
  { id: 2, name: 'HOUSE CONSTRUCTION', image: assets.house_constraction },
  { id: 3, name: 'PACKERS AND MOVERS', image: assets.packers_movers },
  { id: 4, name: 'FALSE CEILING REPAIR', image: assets.false_celling },
  { id: 5, name: 'MODULAR KITCHEN REPAIR', image: assets.modular_kitchen },
  { id: 6, name: 'CARPET FLOORING REPAIR', image: assets.carpet_flooring },
  { id: 7, name: 'INTERIOR DESIGNER REPAIR', image: assets.interior_designer },
  { id: 8, name: 'STEEL RAILING REPAIR', image: assets.steel_failing },
];

const ServiceSection = ({ title }) => {
  return (
    <div className="bg-[#f8f9fa] py-16 px-4 select-none">
      <div className="max-w-5xl mx-auto relative px-2">
        <h2 className="text-center text-[#4472c4] text-2xl md:text-3xl font-bold mb-12 uppercase">
          {title || "Contractor Services"}
        </h2>

        {/* --- CHANGED grid-cols-1 to grid-cols-2 BELOW --- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 py-4">
          {contractorData.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white mx-auto w-full max-w-[240px] rounded-2xl border-2 border-transparent shadow-sm flex flex-col items-center pb-6 transition-all duration-500 
                         hover:border-[#4472c4] hover:shadow-xl hover:-translate-y-3 z-10"
            >
              {/* Image Container */}
              <div className="relative w-full h-32 md:h-36 mb-10 rounded-t-2xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#4472c4]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating Icon */}
              <div className="absolute top-[100px] md:top-[110px] left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full border-[4px] border-[#7cb342] flex items-center justify-center shadow-md z-30 
                              transition-all duration-500 group-hover:border-[#4472c4] group-hover:scale-110 group-hover:rotate-[360deg]">
                <img src={assets.serv_icon} alt="icon" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
              </div>
              
              <div className="text-center px-2 md:px-4 w-full flex-grow flex flex-col justify-between pt-2">
                <h3 className="text-[#1a4d3a] font-bold text-[10px] md:text-[12px] uppercase h-10 flex items-center justify-center leading-tight group-hover:text-[#4472c4] transition-colors">
                    {service.name}
                </h3>
                
                <button className="w-full bg-[#ff8c00] text-white text-[9px] md:text-[10px] font-black py-2.5 rounded-lg shadow-[0_3px_0px_#cc7000] transition-all duration-300
                                 group-hover:bg-[#4472c4] group-hover:shadow-[0_3px_0px_#2d4d8a] uppercase">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
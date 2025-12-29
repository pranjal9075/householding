import React from 'react';
import { assets } from '../assets/assets';

const popularServices = [
  { id: 1, name: 'WEDDING', image: assets.wedding_planners }, // Replace with your actual asset names
  { id: 2, name: 'DECORATION', image: assets.decoration },
  { id: 3, name: 'MAID', image: assets.maid_services },
  { id: 4, name: 'SECURITY', image: assets.security_services },
  { id: 5, name: 'MEHNDI DESIGNS', image: assets.mehndiDesigns_services },
  { id: 6, name: 'TOUR AND TRAVEL', image: assets.tour_travel_services},
];

const PopularServices = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[#4472c4] text-2xl md:text-3xl font-bold mb-12">
          Popular Services
        </h2>

        {/* Grid Container 
            grid-cols-2: 2 boxes per row on mobile
            lg:grid-cols-4: 4 boxes per row on desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {popularServices.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center pb-6 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative w-full h-32 md:h-44 mb-10">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
                
                {/* Floating Orange Icon Circle */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-[4px] border-[#7cb342] flex items-center justify-center shadow-md group-hover:border-[#4472c4] transition-all duration-300 overflow-hidden">
                    <img src={assets.serv_icon} alt="service icon" className="w-10 h-10 object-contain p-1" />
                </div>
              </div>

              {/* Text and Button */}
              <div className="text-center px-4 w-full">
                <h3 className="text-[#1a4d3a] font-bold text-xs md:text-sm mb-4 tracking-wide uppercase">
                  {service.name}
                </h3>
                
                <button className="w-full max-w-[120px] bg-[#ff8c00] text-white text-[10px] md:text-xs font-bold py-2 rounded-md shadow-[0_3px_0_#cc7000] active:translate-y-[1px] active:shadow-none transition-all hover:bg-[#e67e22]">
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

export default PopularServices;
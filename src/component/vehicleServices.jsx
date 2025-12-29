import React from 'react';
import { assets } from '../assets/assets';

const vehicleServices = [
  { id: 1, name: 'TWO WHEELER REPAIR', image: assets.two_wheeler },
  { id: 2, name: 'THREE WHEELER REPAIR', image: assets.three_wheeler },
  { id: 3, name: 'BIKE REPAIR', image: assets.bike },
  { id: 4, name: 'ELECTRIC RICKSHAW REPAIR', image: assets.electric_rickshaw },
  { id: 5, name: 'SCOOTER REPAIR', image: assets.scooter },
  { id: 6, name: 'ELECTRIC SCOOTER REPAIR', image: assets.electric_scooter },
  { id: 7, name: 'MOPED BIKE REPAIR', image: assets.mopad_bike },
  { id: 8, name: 'LADIES SCOOTER REPAIR', image: assets.scooters_ladies },
  { id: 9, name: 'BICYCLE', image: assets.bicycle },
];

const VehicleServices = () => {
  return (
    <div className="bg-[#f8f9fa] py-16 px-4 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-[#4472c4] text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">
          Vehicle Services
        </h2>

        {/* Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {vehicleServices.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center pb-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative w-full h-32 md:h-44 mb-10 overflow-visible">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
                
                {/* Overlapping Circle Icon */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full border-[4px] border-[#7cb342] flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
                  <div className="bg-[#ff8c00] p-2 rounded-sm">
                    <img 
                      src={assets.serv_icon} 
                      alt="icon" 
                      className="w-6 h-6 invert brightness-0" 
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center px-2 md:px-4 w-full flex-grow flex flex-col justify-between">
                <h3 className="text-[#1a4d3a] font-bold text-[10px] md:text-xs mb-4 uppercase leading-tight min-h-[32px] flex items-center justify-center">
                  {service.name}
                </h3>
                
                {/* 3D Styled Button */}
                <div className="flex justify-center">
                  <button className="w-full max-w-[120px] bg-[#ff8c00] text-white text-[9px] md:text-[10px] font-black py-2 rounded-lg shadow-[0_3px_0px_#cc7000] active:translate-y-[1px] active:shadow-none transition-all hover:bg-[#e67e22] uppercase">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleServices;
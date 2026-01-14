import React from 'react';
import { Home } from 'lucide-react';
import { assets } from '../../assets/assets';

const ITRepairServices = () => {
  const services = [
    {
      title: "MOBILE REPAIR",
      image: assets.PhoneRepairImage,
    },
    {
      title: "LAPTOP DESKTOP REPAIR",
      image: assets.desktopImage,
    },
    {
      title: "SOFTWARE REPAIR",
      image: assets.softwareImage,
    },
    {
      title: "HARDWARE REPAIR",
      image: assets.hardwareImage,
    },
    {
      title: "COMPUTER NETWORKING",
      image: assets.networkingImages,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12 uppercase tracking-wide">
          IT Repair Services
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-visible flex flex-col items-center transition-transform hover:scale-105 duration-300 ${
                service.highlight ? 'ring-2 ring-blue-200 shadow-blue-100' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                
                {/* Overlapping Icon Container */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-1 rounded-full border-4 border-green-600 shadow-md">
                   <div className="bg-white rounded-full p-2">
                     <div className="w-10 h-10 flex items-center justify-center">
                        <Home className="w-8 h-8 text-orange-500" />
                     </div>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-12 pb-6 px-4 text-center">
                <h3 className="text-sm font-bold text-teal-700 mb-4 h-10 flex items-center justify-center">
                  {service.title}
                </h3>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md shadow-md transition-colors text-xs uppercase">
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

export default ITRepairServices;
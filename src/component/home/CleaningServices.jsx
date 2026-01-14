import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../../assets/assets';

const CleaningServices = () => {
  const allServices = [
    { id: 1, name: 'MOVE IN AND MOVE OUT', image: assets.chair_repair_service },
    { id: 2, name: 'WATER TANK CLEANING', image: assets.furniture_installation },
    { id: 3, name: 'BATHROOM CLEANING', image: assets.carpentary },
    { id: 4, name: 'SOFA CLEANING', image:  assets.plumber_services},
    { id: 5, name: 'HOUSE CLEANING', image: assets.electrician_service },
    { id: 6, name: 'CARPET CLEANING', image:  assets.wardrobe_service},
    { id: 7, name: 'KITCHEN CLEANING', image:  assets.furniture_service},
    { id: 8, name: 'CAR CLEANING', image:  assets.sofa_service},
    { id: 9, name: "PEST CONTROL" ,image: assets.PestContro}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 1. Dynamic itemsToShow: If screen is small, show all 8. If large, show 5.
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(5);
      } else {
        setItemsToShow(8); // Show all 8 on mobile/tablet
      }
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < allServices.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto relative px-4">
        <h2 className="text-center text-[#4472c4] text-2xl md:text-3xl font-bold mb-10">
          Cleaning Services
        </h2>

        {/* Navigation Arrows - hidden lg:flex ensures they only show on desktop */}
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-[-10px] top-[50%] -translate-y-1/2 z-20 p-2 rounded-full shadow-md transition-all hidden lg:flex
            ${currentIndex === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-[#f39c12] text-white hover:bg-[#e67e22]'}`}
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          onClick={nextSlide}
          disabled={currentIndex >= allServices.length - itemsToShow}
          className={`absolute right-[-10px] top-[50%] -translate-y-1/2 z-20 p-2 rounded-full shadow-md transition-all hidden lg:flex
            ${currentIndex >= allServices.length - itemsToShow ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-[#f39c12] text-white hover:bg-[#e67e22]'}`}
        >
          <ChevronRight size={20} />
        </button>

        {/* Grid Container */}
        {/* grid-cols-2: 2 boxes per row on mobile */}
        {/* lg:grid-cols-5: 5 boxes per row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 overflow-hidden py-4 px-2">
          {allServices.slice(currentIndex, currentIndex + itemsToShow).map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 flex flex-col items-center pb-6
                         hover:-translate-y-2 hover:shadow-[0_15px_35px_-5px_rgba(124,58,237,0.35)]"
            >
              <div className="relative w-full h-40 mb-10">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-[4px] border-[#7cb342] flex items-center justify-center shadow-md group-hover:border-[#4472c4] transition-all duration-300 overflow-hidden">
                  <img src={assets.serv_icon} alt="service icon" className="w-10 h-10 object-contain p-1" />
                </div>
              </div>

              <div className="text-center px-4 w-full flex-grow flex flex-col justify-between">
                <h3 className="text-[#1a4d3a] font-bold text-sm tracking-tight mb-4 h-10 flex items-center justify-center group-hover:text-[#4472c4] transition-colors">
                  {service.name}
                </h3>
                <button className="w-full bg-[#ff8c00] text-white text-xs font-bold py-3 px-4 rounded-lg shadow-[0_4px_0px_#cc7000] active:shadow-none active:translate-y-[1px] transition-all hover:bg-[#e67e22]">
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

export default CleaningServices;
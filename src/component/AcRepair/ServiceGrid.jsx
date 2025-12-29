import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceGrid = ({ items }) => {
  return (
    /* Background: Soft Blue-to-White gradient to match your page flow */
    <div className="bg-gradient-to-b from-[#f8fafc] via-white to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Optional: Subtle decorative background element */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Optional but recommended for beauty) */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-[#2a6b8d] uppercase tracking-[0.3em] mb-2">Our Solutions</h2>
          <div className="h-1 w-12 bg-[#2a6b8d] mx-auto rounded-full"></div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-700 hover:-translate-y-2"
              style={{ 
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` 
              }}
            >
              <ServiceCard 
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Style for the Entrance Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceGrid;
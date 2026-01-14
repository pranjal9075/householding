import React from 'react';
import { Home } from 'lucide-react';
import { assets } from '../../assets/assets';

const services = [
  {
    title: 'LAUNDRY BY',
    image:assets.laundryby, // Replace with your image paths
    alt: 'Washing machine with clothes'
  },
  {
    title: 'DRY CLEANING',
    image: assets.drycleaning,
    alt: 'Dry cleaning professional',
  },
  {
    title: 'STEAM',
    image: assets.stream,
    alt: 'Steam ironing'
  },
  {
    title: 'SHOE',
    image: assets.shoecleaning,
    alt: 'Shoe cleaning'
  }
];

const ServiceCard = ({ title, image, alt, highlighted }) => (
  <div className={`relative bg-white rounded-lg overflow-hidden flex flex-col items-center pb-6 transition-transform duration-300 hover:-translate-y-1 ${highlighted ? 'shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'shadow-lg'}`}>
    {/* Image Container */}
    <div className="h-48 w-full overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>

    {/* Circular Icon Overlay */}
    <div className="absolute top-[42%] flex items-center justify-center">
      <div className="bg-white p-1 rounded-full border-2 border-green-500">
        <div className="bg-orange-500 p-2 rounded-full">
           <Home className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="mt-10 text-center px-4">
      <h3 className="text-[#004d4d] font-bold tracking-widest text-sm mb-4">
        {title}
      </h3>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded shadow-md transition-colors text-sm">
        Book Now
      </button>
    </div>
  </div>
);

const LaundryServices = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Laundry Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaundryServices;
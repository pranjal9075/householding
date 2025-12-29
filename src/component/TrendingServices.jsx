import React from 'react';
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom';

// Service data to keep the component clean and reusable
const services = [
  {
     id: 1,
     name: 'Ac Repair', 
     icon: assets.ac_repair,
     path: "/services/ac-repair"
  },
  {
     id: 2,
     name: 'Packers And Movers',
     icon:assets.packers_movers,
     path:"/services/packers-movers"
  },
  { 
    id: 3,
    name: 'Sofa Repair',
    icon: assets.sofa,
    path:"/services/sofa-repair"
  },
  {
    id: 4, 
    name: 'Refrigerator Repair', 
    icon: assets.fridge, 
    path:"/services/refrigerator-repair"
  },
  {
     id: 5, 
     name: 'Plumber Repair', 
     icon: assets.plumber,
     path:"/services/plumber-repair"
  },
  { 
    id: 6, 
    name: 'Washing Machine Repair', 
    icon: assets.washingmachine ,
    path:"/services/washing-machine-repair"
  },
  { 
    id: 7, 
    name: 'Geyser Repair', 
    icon: assets.geyser,
    path:"/services/geyser-repair" 
  },
  { 
    id: 8, 
    name: 'Cctv Repair', 
    icon: assets.cctv_repair,
    path:"/services/cctv-repair" 
  },
  { 
    id: 9,
    name: 'Computer Networking', 
    icon: assets.computer_repair,
    path:"services/computer-networking" 
  },
  { 
    id: 10, 
    name: 'Chimney Repair', 
    icon: assets.chimney_repair,
    path:"services/chimney-repair" 
  },
  { 
    id: 11,
    name: 'Microwave Oven Repair', 
    icon:assets.oven,
    path:"/services/microwave-oven" 
  },
  { 
    id: 12, 
    name: 'House Cleaning', 
    icon: assets.house_cleaning,
    path:"/services/house-cleaning" 
  },
];

const TrendingServices = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4472c4] mb-12">
          Trending Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
          {services.map((service) => (
            <Link 
              to={service.path || "/"} 
              key={service.id} 
              className="flex flex-col items-center group cursor-pointer no-underline"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-50 transition-transform duration-300 group-hover:scale-105 mb-4 p-4">
                <img src={service.icon} alt={service.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-sm md:text-base font-bold text-gray-800 text-center leading-tight max-w-[120px] group-hover:text-[#4472c4]">
                {service.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
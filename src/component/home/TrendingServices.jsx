import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const services = [
  { id: 1, name: 'Ac Repair', icon: assets.ac_repair, path: "/services/ac-repair" },
  { id: 2, name: 'Packers And Movers', icon: assets.packers_movers, path: "/services/packers-movers" },
  { id: 3, name: 'Sofa Repair', icon: assets.sofa, path: "/services/sofa-repair" },
  { id: 4, name: 'Refrigerator Repair', icon: assets.fridge, path: "/services/refrigerator-repair" },
  { id: 5, name: 'Plumber Repair', icon: assets.plumber, path: "/services/plumber-repair" },
  { id: 6, name: 'Washing Machine Repair', icon: assets.washingmachine, path: "/services/washing-machine-repair" },
  { id: 7, name: 'Geyser Repair', icon: assets.geyser, path: "/services/geyser-repair" },
  { id: 8, name: 'Cctv Repair', icon: assets.cctv_repair, path: "/services/cctv-repair" },
  { id: 9, name: 'Computer Networking', icon: assets.computer_repair, path: "services/computer-networking" },
  { id: 10, name: 'Chimney Repair', icon: assets.chimney_repair, path: "services/chimney-repair" },
  { id: 11, name: 'Microwave Oven Repair', icon: assets.oven, path: "/services/microwave-oven" },
  { id: 12, name: 'House Cleaning', icon: assets.house_cleaning, path: "/services/house-cleaning" },
];

const TrendingServices = () => {
  return (
    <section className="py-10 px-4 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E67E22] rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5CB85C] rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-black mb-6 shadow-xl"
          >
            <FiStar className="text-[#E67E22] fill-[#E67E22]" />
            Most Popular Services
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Trending <span className="text-[#E67E22]">Services</span>
          </h2>
          
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Our most popular services trusted by thousands of customers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to={service.path || "/"} className="block">
                {/* Service Icon Container */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center p-6 group-hover:shadow-[0_30px_60px_rgba(230,126,34,0.2)] transition-all duration-500"
                >
                  <img 
                    src={service.icon} 
                    alt={service.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                  
                  {/* Floating Badge */}
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-[#E67E22] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FiStar size={14} className="text-white fill-white" />
                  </motion.div>
                </motion.div>
                
                {/* Service Name */}
                <motion.h3 
                  className="text-sm md:text-base font-black text-slate-900 text-center leading-tight max-w-[140px] mx-auto group-hover:text-[#E67E22] transition-colors duration-300"
                >
                  {service.name}
                </motion.h3>
                
                {/* Hover Effect Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  className="h-1 bg-[#E67E22] mx-auto mt-3 rounded-full transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
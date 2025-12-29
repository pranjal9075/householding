import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi';

const ServiceCard = ({ image, title, description }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const backgroundX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const backgroundY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="p-2">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        // WIDTH REDUCED: Changed from w-80 to w-64 (256px)
        className="group relative w-64 bg-slate-900 rounded-[1.5rem] p-[2px] overflow-hidden shadow-xl"
      >
        {/* Animated Gradient Border */}
        <motion.div 
          style={{ 
            background: "linear-gradient(115deg, #00f2fe 0%, #4facfe 25%, #f093fb 50%, #f5576c 75%, #00f2fe 100%)",
            backgroundSize: "200% 200%",
            left: backgroundX,
            top: backgroundY
          }}
          className="absolute inset-0 opacity-75 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative bg-white rounded-[1.4rem] overflow-hidden flex flex-col h-full">
          
          {/* IMAGE HEIGHT REDUCED: Changed from h-48 to h-32 */}
          <div className="relative h-32 overflow-hidden" style={{ transform: "translateZ(30px)" }}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            
            {/* ICON SIZE REDUCED: for balance */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg rotate-12 flex items-center justify-center shadow-lg border-2 border-white z-20"
            >
              <HiOutlineHome className="text-white text-lg -rotate-12" />
            </motion.div>
          </div>

          {/* CONTENT AREA */}
          <div 
            className="pt-8 pb-5 px-4 flex flex-col items-center bg-white"
            style={{ transform: "translateZ(40px)" }}
          >
            <h3 className="text-sm font-black bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent uppercase tracking-tight mb-2">
              {title}
            </h3>
            
            {/* DESCRIPTION: line-clamp removed to show all text */}
            <p className="text-gray-500 text-[11px] leading-relaxed mb-6 font-medium text-center">
              {description}
            </p>

            {/* BUTTONS: Scaled down to fit smaller width */}
            <div className="mt-auto flex gap-2 w-full">
              <button className="flex-1 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold py-2 rounded-lg text-[9px] uppercase tracking-tighter shadow-md hover:-translate-y-0.5 transition-all">
                Book Now
              </button>
              <button className="flex-1 bg-gradient-to-r from-orange-400 to-rose-500 text-white font-bold py-2 rounded-lg text-[9px] uppercase tracking-tighter shadow-md hover:-translate-y-0.5 transition-all">
                Enquiry
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
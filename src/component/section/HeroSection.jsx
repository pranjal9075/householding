import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiClock, FiStar } from 'react-icons/fi';
import { assets } from '../../assets/assets';


const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-20 pb-28">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-[100px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Animated Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-xl"
            >
              <FiStar className="text-yellow-400 fill-yellow-400" />
              Trusted by 5,000+ Happy Customers
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              तुमच्या घरासाठी <br />
              <span className="relative inline-block">
                <span className="text-[#E67E22]">Reliable</span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-orange-100 -z-10" 
                />
              </span>
              &nbsp;आणि <br />
              <span className="text-[#5CB85C]">Expert</span> सर्व्हिसेस
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-xl text-slate-500 mb-10 font-medium leading-relaxed">
              Repair Bazar: जिथे मिळते तुमच्या घराला हक्काची साथ. प्रोफेशनल सर्व्हिसेस, आता एका क्लिकवर.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E67E22] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(230,126,34,0.3)] hover:bg-slate-900 transition-colors"
              >
                आत्ताच बुक करा
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black text-lg hover:border-orange-500 transition-colors"
              >
                आमच्या सर्व्हिसेस
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Floating Image Montage */}
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={assets.electrician_service} alt="Pro" className="w-full h-full object-cover" />
              </div>

              {/* Floating Success Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-50"
              >
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <FiCheckCircle size={32} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">4.9/5</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Reviews</div>
                </div>
              </motion.div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E67E22] opacity-10 rounded-full animate-pulse" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
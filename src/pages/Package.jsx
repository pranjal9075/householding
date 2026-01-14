import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaStar, FaArrowRight, FaTools, FaShieldAlt, FaClock, FaWrench, FaFire } from 'react-icons/fa';

const Package = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: 'Quick Fix',
      price: '₹199',
      originalPrice: '₹299',
      duration: '30 mins',
      icon: <FaTools />,
      features: ['Inspection', 'Minor Fix', 'Service Report'],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      name: 'Standard Repair',
      price: '₹399',
      originalPrice: '₹599',
      duration: '90 mins',
      icon: <FaWrench />,
      features: ['Full Diagnosis', 'Repair Work', 'Warranty'],
      popular: true,
      color: 'orange',
      gradient: 'from-orange-500 to-rose-500'
    },
    {
      id: 3,
      name: 'Premium Setup',
      price: '₹799',
      originalPrice: '₹1199',
      duration: '4 hours',
      icon: <FaShieldAlt />,
      features: ['Full Installation', 'Quality Test', 'Priority Support'],
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-12 px-4 relative overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full mb-4">
            <FaFire className="text-orange-500 text-sm" />
            <span className="text-xs font-bold uppercase tracking-widest">Pricing Plans</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Choose Your Service</h1>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Card Container - Compact Height */}
              <div className={`relative h-full bg-white/5 backdrop-blur-md border ${pkg.popular ? 'border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)]' : 'border-white/10'} rounded-3xl p-5 overflow-hidden flex flex-col`}>
                
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
                    Best Value
                  </div>
                )}

                {/* Header Section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-xl shadow-lg`}>
                    {pkg.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-none">{pkg.name}</h3>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                      <FaClock className="text-blue-400" /> {pkg.duration}
                    </div>
                  </div>
                </div>

                {/* Pricing Area */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black">{pkg.price}</span>
                    <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">Starting from per visit</p>
                </div>

                {/* Features - Compact List */}
                <div className="flex-grow space-y-2 mb-6">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCheck className="text-emerald-500 text-[10px]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Selection Button */}
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className={`group w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 
                    ${pkg.popular 
                      ? `bg-gradient-to-r ${pkg.gradient} text-white hover:brightness-110` 
                      : 'bg-white/10 hover:bg-white/20 text-white'}`}
                >
                  Choose Plan 
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Package Result Animation */}
        <AnimatePresence>
          {selectedPackage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mt-12 max-w-md mx-auto p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 text-center"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCheck className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-1">{selectedPackage.name} Selected!</h3>
              <p className="text-sm text-gray-400 mb-4">Duration: {selectedPackage.duration} • No hidden fees</p>
              <button className="bg-white text-black px-8 py-2 rounded-full font-bold text-sm hover:bg-blue-100 transition-colors">
                Book Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Package;
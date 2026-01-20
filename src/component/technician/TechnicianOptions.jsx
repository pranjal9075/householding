import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, UserPlus, LogIn } from 'lucide-react';

const TechnicianOptions = ({ isOpen, onClose, onRegister, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 overflow-hidden font-sans">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0 cursor-pointer" 
      />

      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()} 
          className="relative w-full max-w-[400px] p-[1.5px] rounded-[30px] overflow-hidden z-10 shadow-2xl"
          style={{ 
            background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff6b35)', 
            backgroundSize: '200% 200%', 
            animation: 'gradientMove 5s ease infinite' 
          }}
        >
          <div className="bg-[#1a1a2e]/95 backdrop-blur-2xl rounded-[28.5px] p-8 relative">
            
            <button 
              type="button" 
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-all p-1.5 hover:bg-white/10 rounded-full z-50 active:scale-90"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            
            <div className="text-center mb-8">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl w-full h-full flex items-center justify-center border border-white/20">
                  <Wrench className="text-white" size={24} />
                </div>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white uppercase mb-2">
                TECHNICIAN<span className="text-orange-400"> PORTAL</span>
              </h1>
              <p className="text-gray-400 text-sm">Choose an option to continue</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => {
                  onClose();
                  onRegister();
                }}
                className="w-full py-4 rounded-2xl font-bold text-white text-sm bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all active:scale-95 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-3"
              >
                <UserPlus size={20} />
                Register as Technician
              </button>

              <button 
                onClick={() => {
                  onClose();
                  onLogin();
                }}
                className="w-full py-4 rounded-2xl font-bold text-orange-400 text-sm bg-white/10 border border-orange-400/30 hover:bg-orange-400/10 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <LogIn size={20} />
                Login to Dashboard
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              Join our network of verified service providers
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}} />
    </div>
  );
};

export default TechnicianOptions;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, Home } from 'lucide-react';

const Register = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
  };

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
          className="relative w-full max-w-[380px] p-[1.5px] rounded-[30px] overflow-hidden z-10 shadow-2xl"
          style={{ 
            background: 'linear-gradient(135deg, #ff00ff, #00ffff, #ff00ff)', 
            backgroundSize: '200% 200%', 
            animation: 'gradientMove 5s ease infinite' 
          }}
        >
          <div className="bg-[#0f1129]/95 backdrop-blur-2xl rounded-[28.5px] p-8 relative">
            
            <button 
              type="button" 
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-all p-1.5 hover:bg-white/10 rounded-full z-50 active:scale-90"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            
            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="relative w-12 h-12 mx-auto mb-3">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
                    <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl w-full h-full flex items-center justify-center border border-white/20">
                      <Home className="text-white" size={20} />
                    </div>
                  </div>
                  <h1 className="text-2xl font-black tracking-tight text-white uppercase">
                    HOUSE<span className="text-cyan-400">HOLDING</span>
                  </h1>
                  <p className="text-gray-500 text-[8px] uppercase tracking-[3px] font-bold">Create New Account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-xs focus:border-cyan-400 outline-none transition-all peer"
                      placeholder=" " 
                    />
                    <label className="absolute left-5 top-3 text-gray-500 text-[10px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:text-cyan-400 peer-focus:text-[9px] peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[9px] bg-[#0f1129] px-2">
                      Full Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-xs focus:border-cyan-400 outline-none transition-all peer"
                      placeholder=" " 
                    />
                    <label className="absolute left-5 top-3 text-gray-500 text-[10px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:text-cyan-400 peer-focus:text-[9px] peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[9px] bg-[#0f1129] px-2">
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-xs focus:border-pink-500 outline-none transition-all peer"
                      placeholder=" " 
                    />
                    <label className="absolute left-5 top-3 text-gray-500 text-[10px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:text-pink-500 peer-focus:text-[9px] peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[9px] bg-[#0f1129] px-2">
                      Phone Number
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-xs focus:border-pink-500 outline-none transition-all peer"
                      placeholder=" "
                    />
                    <label className="absolute left-5 top-3 text-gray-500 text-[10px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:text-pink-500 peer-focus:text-[9px] peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[9px] bg-[#0f1129] px-2">
                      Password
                    </label>
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 text-gray-500 hover:text-white transition-colors">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  <div className="relative group">
                    <input 
                      type="password" 
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white text-xs focus:border-pink-500 outline-none transition-all peer"
                      placeholder=" "
                    />
                    <label className="absolute left-5 top-3 text-gray-500 text-[10px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:text-pink-500 peer-focus:text-[9px] peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[9px] bg-[#0f1129] px-2">
                      Confirm Password
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-2xl font-bold text-white text-[10px] tracking-[2px] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all active:scale-95 disabled:opacity-50 uppercase shadow-lg shadow-cyan-500/20"
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </form>

               
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">Account Created</h3>
                <p className="text-gray-500 text-[9px] mt-1">Welcome to HouseHolding...</p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}} />
    </div>
  );
};

export default Register;
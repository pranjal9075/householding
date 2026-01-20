import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, Upload, Wrench } from 'lucide-react';

const TechnicianRegister = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    serviceType: '',
    city: '',
    experience: '',
    idProof: null
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceTypes = [
    'Plumber', 'Electrician', 'AC Repair', 'Carpenter', 'Appliance Repair',
    'House Cleaning', 'Pest Control', 'Painting', 'CCTV Installation'
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setFormData({
        fullName: '', mobile: '', email: '', password: '',
        serviceType: '', city: '', experience: '', idProof: null
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
      />

      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()} 
          className="relative w-full max-w-md p-[1.5px] rounded-3xl overflow-hidden z-10 shadow-2xl my-8"
          style={{ 
            background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff6b35)', 
            backgroundSize: '200% 200%', 
            animation: 'gradientMove 5s ease infinite' 
          }}
        >
          <div className="bg-[#1a1a2e]/95 backdrop-blur-2xl rounded-[22px] p-6 relative">
            
            <button 
              type="button" 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all p-1.5 hover:bg-white/10 rounded-full z-50"
            >
              <X size={18} />
            </button>
            
            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="relative w-12 h-12 mx-auto mb-3">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
                    <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl w-full h-full flex items-center justify-center border border-white/20">
                      <Wrench className="text-white" size={20} />
                    </div>
                  </div>
                  <h1 className="text-xl font-black tracking-tight text-white uppercase">
                    TECHNICIAN<span className="text-orange-400"> REGISTER</span>
                  </h1>
                  <p className="text-gray-500 text-[8px] uppercase tracking-[2px] font-bold">Join Our Service Network</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all peer"
                      placeholder=" " 
                    />
                    <label className="absolute left-4 top-2.5 text-gray-500 text-[9px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-orange-400 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[8px] bg-[#1a1a2e] px-2">
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type="tel" 
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all peer"
                      placeholder=" " 
                    />
                    <label className="absolute left-4 top-2.5 text-gray-500 text-[9px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-orange-400 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[8px] bg-[#1a1a2e] px-2">
                      Mobile Number
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all peer"
                      placeholder=" " 
                    />
                    <label className="absolute left-4 top-2.5 text-gray-500 text-[9px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-orange-400 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[8px] bg-[#1a1a2e] px-2">
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-2.5 text-gray-500 text-[9px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-orange-400 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[8px] bg-[#1a1a2e] px-2">
                      Password
                    </label>
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-500 hover:text-white transition-colors">
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>

                  <div className="relative">
                    <select 
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all"
                    >
                      <option value="" className="bg-gray-800">Select Service Type</option>
                      {serviceTypes.map(type => (
                        <option key={type} value={type} className="bg-gray-800">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all peer"
                        placeholder=" " 
                      />
                      <label className="absolute left-4 top-2.5 text-gray-500 text-[9px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-orange-400 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[8px] bg-[#1a1a2e] px-2">
                        City
                      </label>
                    </div>

                    <div className="relative">
                      <input 
                        type="text" 
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:border-orange-400 outline-none transition-all peer"
                        placeholder=" " 
                      />
                      <label className="absolute left-4 top-2.5 text-gray-500 text-[9px] uppercase font-bold transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-orange-400 peer-focus:text-[8px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[8px] bg-[#1a1a2e] px-2">
                        Experience
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="file" 
                      name="idProof"
                      accept="image/*,.pdf"
                      onChange={handleChange}
                      className="hidden"
                      id="idProof"
                    />
                    <label 
                      htmlFor="idProof"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-gray-400 text-xs cursor-pointer hover:border-orange-400 transition-all flex items-center gap-2"
                    >
                      <Upload size={14} />
                      {formData.idProof ? formData.idProof.name : 'Upload ID Proof'}
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl font-bold text-white text-[9px] tracking-[2px] bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all active:scale-95 disabled:opacity-50 uppercase shadow-lg shadow-orange-500/20"
                  >
                    {isLoading ? "Submitting..." : "Register as Technician"}
                  </button>
                </form>

                <p className="text-center text-[10px] text-gray-500 mt-4">
                  Registration subject to admin approval
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 border-2 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">Registration Submitted</h3>
                <p className="text-gray-500 text-[9px] mt-1">Admin approval ची वाट पाहा</p>
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

export default TechnicianRegister;
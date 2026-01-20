import React from 'react';
import { Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import { useBookingFlow } from '../../hooks/useBookingFlow';
import LoginRequiredModal from '../common/LoginRequiredModal';
import Login from '../Login';
import BookingForm from '../booking/BookingForm';

const ServiceBanner = ({ title }) => {
  const {
    showLoginRequired,
    showLogin,
    showBookingForm,
    pendingService,
    handleBookNow,
    handleLoginRequired,
    handleLoginSuccess,
    handleCloseAll,
    handleBookingFormClose
  } = useBookingFlow();

  return (
    <div className="relative w-full h-80 md:h-[500px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-orange-500/15 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[2] opacity-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-8 w-full z-10 flex flex-col md:flex-row justify-between items-center">
        
        {/* Enhanced Text Section */}
        <div className="relative group flex-1">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star size={16} className="animate-spin" />
            Premium Service
            <Sparkles size={16} className="animate-pulse" />
          </div>
          
          {/* Accent Line */}
          <div className="absolute -left-6 top-16 h-32 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-300 animate-gradient-x">
              {title}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed ">
            Professional repair services with expert technicians and guaranteed satisfaction
          </p>
          
          {/* Action Button */}
          <button 
            onClick={() => handleBookNow(title)}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Company Info */}
          <div className="mt-8 flex flex-col gap-2">
            <p className="text-cyan-400 font-bold tracking-widest text-sm uppercase">
              Repair Bazar • Professional Excellence
            </p>
            <div className="h-px w-64 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Visual Element */}
        <div className="hidden md:flex relative w-80 h-80 items-center justify-center flex-shrink-0">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 border-2 border-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>
          
          {/* Middle Ring */}
          <div className="absolute inset-8 border border-white/20 rounded-full animate-spin-reverse">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
          
          {/* Center Element */}
          <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Zap size={32} className="text-white animate-bounce" />
            </div>
          </div>
          
          {/* Floating Icons */}
          <div className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
            <Star size={16} className="text-white" />
          </div>
          <div className="absolute bottom-8 left-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
            <Sparkles size={12} className="text-white" />
          </div>
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Authentication Modals */}
      <LoginRequiredModal
        isOpen={showLoginRequired}
        onClose={handleCloseAll}
        onLoginClick={handleLoginRequired}
        serviceName={pendingService}
      />

      <Login
        isOpen={showLogin}
        onClose={handleCloseAll}
        onLoginSuccess={handleLoginSuccess}
      />

      <BookingForm
        isOpen={showBookingForm}
        onClose={handleBookingFormClose}
        serviceName={pendingService}
      />
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceBanner;
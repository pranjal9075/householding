import React, { useEffect, useState } from 'react';
import { Home, Sparkles } from 'lucide-react';
import { assets } from '../../assets/assets';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        style={{ backgroundImage: `url(${assets.houseHero})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Logo */}
        <div className={`flex items-center justify-between p-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-3">
            <img src={assets.logo_rb} alt="REPAIR BAZAAR" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-orange-500">House</span>
                <span className="text-blue-600">Holding</span>
              </h1>
              <p className="text-xs text-white/80">Home Services</p>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Your Home, Expertly Cared For
            </h2>
            <p className={`text-xl md:text-2xl text-white/90 mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Reliable & Professional Repair Services, Just a Tap Away
            </p>
            <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto">
                Book Service Now
                <Sparkles size={20} className="animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-orange-400/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-32 right-20 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
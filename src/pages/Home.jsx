import React from 'react';
import HeroSection from '../component/section/HeroSection';
import TrendingServices from '../component/TrendingServices';
import HandymanServices from '../component/HandymanServices';
import ServiceSection from '../component/ServiceSection';
import PopularServices from '../component/PopularServices';
import VehicleServices from '../component/vehicleServices';
import ITRepairServices from '../component/ITRepairServices';
import CleaningServices from '../component/CleaningServices';
import AppliancesServices from '../component/AppliancesServices';
import LaundryServices from '../component/LaundryServices';
import AboutInfo from '../component/AboutInfo';





function Home() {
  return (
   
    <div> 
       
      {/* Wrap all subsequent sections (like the HeroSection) in a padded container.
        Since HeroSection already uses max-w-7xl and px-4 internally, we 
        need to ensure that padding applies correctly to the overall container.
      */}
      <main> 
        <HeroSection />
        <TrendingServices />
        <HandymanServices />
        <ServiceSection />
        <PopularServices />
        <VehicleServices />
        <ITRepairServices />
        <CleaningServices />
        <AppliancesServices />
        <LaundryServices />
        <AboutInfo />
        
      </main>
      
    </div>
  );
}

export default Home;

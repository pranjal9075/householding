import React from 'react';
import HeroSection from '../component/section/HeroSection';

import AboutInfo from '../component/home/AboutInfo';
import AppliancesServices from '../component/home/AppliancesServices';
import CleaningServices from '../component/home/CleaningServices';
import HandymanServices from '../component/home/HandymanServices';
import ITRepairServices from '../component/home/ITRepairServices';
import LaundryServices from '../component/home/LaundryServices';
import PopularServices from '../component/home/PopularServices';
import ServiceSection from '../component/home/ServiceSection';
import TrendingServices from '../component/home/TrendingServices';
import VehicleServices from '../component/home/vehicleServices';

function Home() {
  return (
    <div>
      <main>
        <HeroSection />

        <TrendingServices />
        <HandymanServices />
        <ServiceSection />
        <PopularServices />
        <VehicleServices />

        <div id="it-repair-service">
          <ITRepairServices />
        </div>

        <div id="cleaning-pest-control">
          <CleaningServices />
        </div>

        <div id="appliances-repair">
          <AppliancesServices />
        </div>

        <LaundryServices />
        <AboutInfo />
      </main>
    </div>
  );
}

export default Home;

import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import { Import } from 'lucide-react';
import Summary from '../../component/CardStructure/Summary';




const summary=`If you are having issues with your water heater/geyser or you are looking for a new geyser or you are looking for a new geyser installation service you have come to the right place. At Geyser repairs, we can provide all types of services related to the water heater or other heating systems at your doorstep. Geysers make us the best geyser repairing center. Unlike local electrical shops that can take days to diagnose and fix the problem, we can find the core issue and solve it quickly so that you can achieve complete peace of mind. Our factory-trained repair technicians will get your water heater heating water again. We can fix all brand s water heater and geysers, v-guard, Crompton Greaves, Bajaj, Usha, singer, AO smith, venues, recoiled, hailer and many more contacts us for repair services 9999894591. Repair Bazaar provides you a good water heater repair service at an affordable price. We have technicians who can quickly understand the geyser problem and fix it at a low cost. Geysers work on a formula that heats water and keeps it warm for a long time and saves your electricity. * Geyser Repairing * Best Geyser Repair, * Geyser Repair Near Me, * Geyser Repair at home.`
const faqs = [
  {
    q: "Which geyser repair company is best for 2021?",
    a: "Repair Bazar is the best organization that offers geyser repair service fix benefits each year. we are extending our administrations step by step and select proficient specialists."
  },
  {
    q: "How much does gas geyser servicing cost?",
    a: "The average cost of geyser repair servicing is Rs.500 approx."
  },
  {
    q: "Where is geyser repair shops located?",
    a: "If you want to repair your geyser, then contact Repair Bazar because we provide geyser repair services in every city and near you also."
  },
  {
    q: "How do you take care of a geyser?",
    a: "1. Keep space around the geyser. 2. Put your geyser at a sufficient height. 3. keep your eye on the switch plug. 4. Check electric power from time to time. 5. Get monthly maintenance done."
  },
  {
    q: "Do gas geyser repair and service centers in Delhi repair electric geysers as well?",
    a: "Yes, we are dealing with geyser repair services in Delhi also. you can trust our company because already we are done service in many places."
  }
];

const services = [
  {
    title: "ELECTRIC GEYSER REPAIR SERVICE",
    description: "Electric geysers are very common in houses to warm the water and sometimes problems occur in geysers like dripping, water not heating enough, overheating, leaking water, etc. If you want to repair or",
    image: assets.geyser_repair
  },
  {
    title: "GAS GEYSER REPAIR SERVICE",
    description: "Gas geyser problems occur like insufficient hot water, heating elements, etc. Our company provides you service at the cheapest rate and doorstep service with our expert technician in this field and gi",
    image: assets.gas_geyser_repair
  },
  {
    title: "IMMERSION ROD HEATER REPAIR SERVICE",
    description: "Having trouble with your immersion rod heater our company provides you a reliable service and very affordable service to the customer. Our company is committed to resolving the problem as fast and eff",
    image: assets.rod_heater_repair
  },
  {
    title: "WATER HEATER REPAIR SERVICE",
    description: "Although every water heater tends to suffer from the most common problem like a water leak, a lack of hot water, dirty water, slow water heat, etc. If this kind of problem occurs please feel free to c",
    image: assets.water_heater_repair
  },
  {
    title: "GEYSER NO HOT WATER",
    description: "This is a very common problem it occurs with a geyser is to no hot water. There are two reasons not heating water is the first heating element and second thermostat if this kind of problem occurs imme",
    image: assets.problem_geyer_repair
  },
  {
    title: "GEYSER NOT SWITCHING ON",
    description: "Sometimes geyser is not switching because of thermostat fault and you need call technician and us happy to announce you that our company provide low-cost amount and outstanding service.",
    image: assets.switchingon_repair
  },
  {
    title: "GEYSER WATER LEAKING",
    description: "The water leaking problem is also the most common problem with geyser because of the high-pressure control valve overflow pipe. And we are best to resolve the entire problem at low cost and excellent",
    image: assets.geyser_repair
  },
  {
    title: "WATER TAKES TOO LONG TO REHEAT GEYSER",
    description: "There are several things like distance from a water heater, diameter of piping and low flow rate of water and our expert is happy to help you and resolve all your problem with in time as fast as we ca",
    image: assets.Rehit_gesor
  }
];

export const GeyserRepair = () => {
  return (
    <>
      <ServiceBanner title="Geyser Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


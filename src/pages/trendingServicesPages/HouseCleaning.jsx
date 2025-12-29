import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';



const summary=`In today’s life, you do not have so much time for house cleaning. So don’t worry about Repair Bazar provides house cleaning services. Our primary focus is to clean your house efficiently. Make your home dust-free and protect from every harmful germ.`
const faqs = [
  {
    q: "Who is the best house cleaning service?",
    a: "Repair Bazar provides the best house cleaning service at your scheduled time at an affordable price. We have skilled and certified house cleaners."
  },
  {
    q: "How much does it cost to clean a dirty house?",
    a: "You should charge approx Rs.14,700-30,000 to clean a dirty house."
  },
  {
    q: "What is included in a regular house cleaning?",
    a: "Remove dust from the Ceiling fans and fixtures, Blinds and window sills, Moldings and woodworks, Baseboards, Lamp, and lampshades, cobwebs removed, etc."
  },
  {
    q: "What to look for before choosing a home cleaning service provider in Delhi?",
    a: "Some things that you must look at before getting the home cleaning service are: Services offered, Affordable price, Screened and specialist, secure and trustable, licensed and check for reviews and ratings."
  },
  {
    q: "What is a Home deep cleaning service?",
    a: "Deep cleaning is not the same as normal or spring cleaning since it arrives at the deep grime and dust in your home. It covers territories which are not customarily covered by a normal or spring clean for instance: behind kitchen apparatuses like the washing machine and oven, slicing through the grime that develops."
  }
];

const services = [
  {
    title: "BEDROOM DEEP CLEANING",
    description: "Bedroom deep cleaning is very important for a dust-free house. Our workers always ready to serve your service in your given time.",
    image: assets.bedroom_cleaning
  },
  {
    title: "BATHROOM DEEP CLEANING",
    description: "Are looking for bathroom deep cleaners? Then you must visit our Repair Bazar website. Our cleaners clean your bathroom deeply.",
    image: assets.bathroomCleaning
  },
  {
    title: "KITCHEN DEEP CLEANING",
    description: "We provide kitchen deep cleaning service at a very affordable price and with 100% satisfaction.",
    image: assets.kitchen_cleaning
  },
  {
    title: "FABRIC SHAMPOOING",
    description: "It is very difficult to clean your sofa fabric at home. You need a cleaner who cleans your fabric efficiently. Don't waste your time here and there just straight contact with us.",
    image: assets.fabric_shampooing
  },
  {
    title: "CARPET SHAMPOOING",
    description: "Our carpet service makes you happy and satisfied. Our cleaners are experienced and knowledgeable in their field.",
    image: assets.carpet_shampooing
  },
  {
    title: "LEATHER SOFA CLEANING",
    description: "We provide dry clean sofa and carpet services. Through the process of cleaning, we remove dust and bacteria from your sofa.",
    image: assets.leather_sofacleaning
  },
  {
    title: "MATTRESS SHAMPOOING",
    description: "We have a professional team who will clean your mattresses. We deliver the mattresses to the owner a place after service.",
    image: assets.mattress_shampooing
  },
  {
    title: "HOME DEEP CLEANING",
    description: "When you need to deep cleaning service for your home, just contact us and we will provide your best service at any cost.",
    image: assets.homedeep_cleaning
  },
  {
    title: "OVERHEAD WATER STORAGE TANK CLEANING",
    description: "Sometimes your water tank gets blocked by dust or algae through which you face hassle. You need to clean your water tank by an expert, don't hesitate to contact us.",
    image: assets.overhead_leaning
  },
  {
    title: "FLOOR SCRUBBING AND POLISHING",
    description: "Our floor scrubbing and polishing service are done with any specialist who gives treatment by uses of specialized equipment.",
    image: assets.carpet_flooring
  }
];

export const HouseCleaning = () => {
  return (
    <>
      <ServiceBanner title="Ac Repair Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


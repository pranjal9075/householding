import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';



const summary=`As India’s largest service provider, Repair Bazar is one of the most trustable destinations for your 
          Home Appliance Repair Service. At Repair Bazar 
          we have a team of experienced technicians who visit your location and repair your home appliance 
          at your doorstep. We service and repair a wide range of home appliances including AC Repair Service, 
          Refrigerator, Washing Machine, and more.
          We also deal in Cleaning and Pest Control services like Pest Control, 
          Car Wash, Kitchen Cleaning, and Home Cleaning. In Contractor Services, 
          Repair Bazar deals in Interior Design, False Ceiling, and House Construction.`
const faqs = [
  { 
    q: "What are the charges for basic servicing of AC?",
    a: "Air conditioner technicians charge by the hour- so expect to be charge anywhere from 80- 110 per hour+ GST for domestic AC and 80-140 per hour + GST for commercial AC." 
  },
  {
     q: "When should I get my AC repaired?", 
     a: "Experts said that servicing your AC once a year. Spring is the best time. Make sure your AC continues to work efficiently, also you need to do housekeeping on a daily basis." 
  },
  {
     q: "Will the AC repairing technician visit my location for the repair?", 
     a: "Yes, our technician will provide you services at your location at reasonable prices. Whenever you want our technician to always ready to help you." 
  },
  {
     q: "Do these repair centers service all types of AC?", 
     a: "Yes, our repair centers give service in all types of AC. whatever your AC belongs to any company." 
  },
  {
     q: "Which type of AC servicing do you offer?", 
     a: "Repair Bazar offers all types of AC service for you. our AC services are split AC, window AC, multi-split AC, cassette AC, portable AC, central AC, packaged AC, ducted AC." 
  },
  {
     q: "What is the AC service cost in Delhi?", 
     a: "The cost depends on the model and type of service required, usually starting from a base inspection fee." 
  },
  {
     q: "Here are some tips to keep your AC maintain", 
     a: "Clean filters regularly and ensure the outdoor unit is not obstructed." 
  },
];

const services = [
  {
    title: "Split AC Repair Services",
    description: "A staple of most houses and offices, a split air conditioner has a separate outdoor unit and indoor unit. It is slightly tricky to repair and maintain. But trust our expert professionals for all kinds.",
    image: assets.SplitAcRepair
  },
  {
    title: "Window AC Repair Service",
    description: "Installed in an aperture of window holes to let its outer part exposed to the atmosphere, the window ACs are a popular option even today. Our technicians take care of minor to major issues arising from.",
    image: assets.WindowAcRepair
  },
  {
    title: "Multi-Split AC Repair Service",
    description: "This is defined by up to five indoor units of Split AC connected to a single outdoor unit. Repair Bazaar not only understands the intricacy involved in its repair and maintenance but also fixes it for.",
    image: assets.MultiAcSplitRepair
  },
  {
    title: "Cassette AC Repair Service",
    description: "An old type of AC, common problems encountered with it is a noisy operation, water leaking, etc. We strongly recommend annual AC maintenance in Noida and other parts to eliminate any issues.",
    image: assets.CassetteAcRepair
  },
  {
    title: "Portable AC Repair Service",
    description: "A recent popular addition, it can leave you clueless with its issues like not starting, not cooling, stops working out of the blue, no cool air emitting, etc. Let us expert professionals tackle it the",
    image: assets.PortableAcRepair
  },
  {
    title: "Central AC Repair Service",
    description: "Central AC is usually found in building complexes and offices. Its breakdown can bring your business to a standstill. Get an AC repair maintenance service in Delhi contract with us today to nip all it",
    image: assets.CentralAcRepair
  },
  {
    title: "Packaged AC Repair Services",
    description: "Do you own more than one type and kind of AC? Trust our verified professionals and class-apart services with an assured guarantee of customer satisfaction at jaw-dropping pricing to keep them running.",
    image: assets.PackagedAcRepair
  },
  {
    title: "Ducted AC Repair Service",
    description: "A common pain area with any AC hampering its efficiency is leaked or blocked AC ducts with often a hole developing on them. If left status quo, it can break down the whole unit. Let us keep your inves",
    image: assets.DuctedAcRepair
  },
 
];

export const Microwave_Oven = () => {
  return (
    <>
      <ServiceBanner title="Microwave Oven Repair Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


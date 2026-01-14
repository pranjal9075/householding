import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';




const summary=`Imagine coming home with a bagful of groceries, fruits, and vegetables and discovering that your refrigerator is no longer functioning! Your life can come to a standstill! We at Repairbazaar understand this and present ourselves as your local expert to take care of all kinds of fridge repair services in Moradabad. Operational in Delhi, Noida, Meerut, Ghaziabad, Moradabad, and Lucknow, we are your one-stop destination for all kinds of repairs and maintenance of refrigerators. Our trained and licensed technicians pack impressive experience and expertise to take care of any model, type, and make of fridge repair services across brands.`
const faqs = [
  {
    q: "Can I replace the compressor on my refrigerator?",
    a: "Yes, you can replace the compressor of the refrigerator when a compressor burns out and produce an acidic residue. This cause is heavy damage to the refrigerator."
  },
  {
    q: "Is it cheaper to repair or replace a refrigerator?",
    a: "This all depends on refrigerator life and the refrigerator frequently breaking down. If you are repeatedly spending money on repairing then you must replace your refrigerator."
  },
  {
    q: "Which Refrigerator Repair company is best for 2021?",
    a: "Repair Bazar is the best company that offers refrigerator repair services every year. We are expanding our services day by day and searching for the best professional technicians."
  },
  {
    q: "How much does it cost to repair a refrigerator?",
    a: "The average cost is Rs.250, the low cost is Rs.40 and the high cost is Rs.1000. Repair Bazar offers you doorstep services."
  },
  {
    q: "What are the signs that your refrigerator is going out?",
    a: "There are many signs through which you know your fridge going out that are excess condensation, the motor goes hot, food rapidly spoils, buzz sound, etc."
  },
  {
    q: "What do you call a person who fixes refrigerators?",
    a: "A person who fixes a refrigerator is called a repairman and who deals in electrical wiring is called an electrician."
  }
];

const services = [
  {
    title: "SINGLE DOOR REFRIGERATORS",
    description: "This is one of the most used refrigerators across India. Be it leaking water or not cooling properly, trust our fridge repair services in Meerut to arrive at your doorstep on time, and fix it in no b",
    image: assets.singledoor_repair
  },
  {
    title: "DOUBLE DOOR REFRIGERATOR",
    description: "The refrigerator is the lifeline of your family. Repair Bazar is one of the most efficient handyman service providers available to ensure your kitchen functions without any glitch. Book an appointmen",
    image: assets.doubledoor_repair
  },
  {
    title: "COUNTER-DEPTH FREEZER",
    description: "Regardless of the type and style of counter depth freezer, we take on any brand and make to fix a myriad of issues like freezer gasket repair, door repair, over-freezing, not freezing, etc. Our specia",
    image: assets.counterdepth_freezer
  },
  {
    title: "COMPACT FRIDGE",
    description: "Offering you the best fridge repair services in Ghaziabad, our trained servicing professionals have taken on any brand and any variety of compact fridges. We pride ourselves on offering quick and long",
    image: assets.compact_fridge
  },
  {
    title: "FRENCH DOOR FRIDGE",
    description: "One of the efficient machines available; its vulnerable part is its crushed ice-maker. But our specialized professionals know it like the back of their hands and ensure that your fridge is running smo",
    image: assets.french_door
  },
  {
    title: "SIDE BY SIDE FRIDGE",
    description: "Regardless of the soaring temperature outside, our trained experts arrive at your doorstep a little ahead of time. They provide reliable and efficient solutions to any brands of fridge repair service",
    image: assets.sidebyside_fridge
  },
  {
    title: "FOOD SHOWCASE",
    description: "Regardless of whether you are facing a minor or major problem with your food showcase, give our technicians. Be it fixing problems or maintenance work; our certified experts cater to all fridge repair",
    image: assets.food_showcase
  },
  {
    title: "REFRIGERATOR WATER DISPENSER NOT WORKING",
    description: "The issue arises due to three top reasons. Our technicians are well-trained to troubleshoot all three causes. Instead of suffering, simply hire our refrigerator repair service in Lucknow. Trust us to",
    image: assets.refrigerator_water
  },
  {
    title: "REFRIGERATOR IS FREEZING FOOD",
    description: "The problem with the thermostat causes this problem. Our trained and certified technicians are a pro with such fridge repair in Noida. Procrastination can result in the death of your refrigerator. Sit",
    image: assets.freezing_food
  },
  {
    title: "FRESH FOOD COMPARTMENT IS WARMING UP",
    description: "A problem with the airflow of the fridge gives rise to this problem. A dangerous issue, it must be attended to immediately. Avail of our reputed and trustworthy services by booking an appointment with",
    image: assets.fresh_food
  },
  {
    title: "WATER LEAKING ON THE FLOOR",
    description: "A dangerous and tricky problem can arise due to a couple of causes. Our fridge service in Ghaziabad is well equipped to handle this problem in record time and get your unit up and running. All you nee",
    image: assets.waterleakkingon_floor
  }
];

export const RefrigeratorRepair = () => {
  return (
    <>
      <ServiceBanner title="Refrigerator Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


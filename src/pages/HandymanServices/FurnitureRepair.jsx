import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';




const summary=`If you are looking for help with furniture repair, then you come to the right place. We provide all kinds of furniture repair needs, big and small. We have highly- experienced technicians who have been skilled for many years. We are provided with your best furniture repair service at your doorstep at affordable prices.`
const faqs = [
  {
    q: "Can you remove my old furniture?",
    a: "You can arrange for your local council to collect your old sofa from the house and they charge a small fee amount, by visiting the government website and checking the accessibility of large waste item collection in your area, or simply put it to the recycling center."
  },
  {
    q: "Who makes the furniture?",
    a: "A carpenter is a person who makes wooden things like a sofa, almirah, bed, dining table, etc. Carpenters specialized person who expert in woodworking."
  },
  {
    q: "What is furniture made out of?",
    a: "The materials used to make furniture including metal, plastic, a variety of wood, leather fabric, Acryl, steel, etc."
  },
  {
    q: "Can old furniture be totally restored?",
    a: "If you are looking to give your old furniture a complete makeover and want to restore it for again use, then you can prefer furniture restoration."
  }
];

const services = [
  {
    title: "Visitor Chair Repairing Service",
    description: "RepairBazar repair and replace chair base, handles, and all chair components. By our services your chair comfortable again. You just do one call to us.",
    image: assets.GuestChair
  },
  {
    title: "Office Furniture Repair Service",
    description: "Furniture is used in schools, colleges, offices, and many other places. If you need repair services then just contact us. We will give a satisfactory service to you.",
    image: assets.OfficeFurniture1
  },
  {
    title: "Home Furniture Repair Service",
    description: "In the house, you use various types of home furniture. Always you need carpentry services whether it is broken or misfitting furniture.",
    image: assets.HomeFurniture1
  },
  {
    title: "Rack Repairing Service",
    description: "Any type of wooden rack you have we repair at any time within your given schedule. Our company gives rack services at the cheapest rate.",
    image: assets.RackRepair
  },
  {
    title: "Leather Repaints and Re-Colors",
    description: "Leather repaints and recolor gives your sofa finishing touch and gives your leather smoothness all the time. Our technician provides you good quality service to repair your sofa.",
    image: assets.LeatherFurniture
  },
  {
    title: "Worn Off The Leather Dye",
    description: "If your sofa's leather is physically damaged with any cut, rip, hole, tear, burn, etc. using our technician repair service who gives your sofa a good repair process.",
    image: assets.WornOffLeather
  },
  {
    title: "Furniture Restoration",
    description: "If you have any antique and special wooden furniture then your furniture needs any special treatment through which your furniture became as before it is. Just one easy step pick up your phone and call",
    image: assets.FurnitureRestoration
  },
  {
    title: "Seam Repairs and Reinforcements",
    description: "When you need the durability of your furniture then contact us. Sometimes your kids make some zigzag lines on the sofa or any other furniture. At that time you wish your furniture to be the same s",
    image: assets.SeamReinforcements
  }
];

export const FurnitureRepair = () => {
  return (
    <>
      <ServiceBanner title="Furniture Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ServicesPage items={faqs} />
    </>
  )
}


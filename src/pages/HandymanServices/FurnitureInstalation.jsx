import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';




const summary=`If you are looking for a good furniture repair service, then you should visit our Repair Bazar website. We will provide you professional experts on an affordable budget who are well trained in their work. Our specialists use professional tools and equipment to ensure that the work is done properly. `
const faqs = [
  {
    q: "What does flat-pack furniture mean?",
    a: "Flat pack furniture will be furniture, for example, racks and pantries which you purchase as various separate pieces and gather yourself. It shows up as a flat pack and is darted together on location."
  },
  {
    q: "Who can I hire to put together furniture?",
    a: "Whenever you need a furniture installation service for a single sofa or full houseful of new furniture. Repair Bazar experts are ready to give you the best furniture installation service."
  },
  {
    q: "Which furniture installation service company is best for 2021?",
    a: "The best place for your furniture installation to repair in 2021 is Repair Bazar. Repair Bazar is an experienced and certified company who provides services for many years."
  },
  {
    q: "How quickly can I get help with furniture assembly?",
    a: "Repair Bazar has to connect customers and repairers quickly. Although the accurate time frame depends on your job and your repairer accessibility."
  },
  {
    q: "Can you assemble IKEA furniture by yourself?",
    a: "IKEA product is created for easy convocation, but if you are a beginner to the flat-pack furniture universe, be awake maybe you will find some items much harder from IKEA."
  }
];

const services = [
  {
    title: "EXECUTIVE OFFICE DESK INSTALLATION",
    description: "These executive office desks are in great demand in the market for availability in various shapes and styles. These products are widely used in the home office with lots of drawer shelves and space. u",
    image: assets.ExecutiveOfficeDesk
  },
  {
    title: "OFFICE FURNITURE INSTALLATION SERVICE",
    description: "If you want to grow your business at a higher level then you need to new office furniture installation. New furniture shows how well your business is doing.",
    image: assets.OfficeFurniture
  },
  {
    title: "WOODEN FLOORING INSTALLATION SERVICE",
    description: "Repair Bazar installation service, we assure every customer that our sales and installation are done at an affordable price. You may call our customer hotline number and book our service now.",
    image: assets.WoodenFlooring
  },
  {
    title: "MODULAR FURNITURE INSTALLATION",
    description: "Repair Bazar is highly popular in providing furniture installation services to our customers. Our professional experts provide quality service to the customer. Our specialists use the latest component.",
    image: assets.ModularFurnitureInstallation
  },
  {
    title: "BEDROOM WARDROBE INSTALLATION",
    description: "The Repair Bazar offers you a variety of bedroom wardrobe of different colors and sizes to store your belongings in.",
    image: assets.BedroomWardrobeInstallation
  },
  {
    title: "WARDROBE INSTALLATION SERVICE",
    description: "No need to go out to find a wardrobe installation and repair service. You can stay at home and you may call the Repair Bazar to set up your wardrobe.",
    image: assets.Wardrobe
  },
  {
    title: "FIXTURE FURNITURE INSTALLATION SERVICE",
    description: "In today's world, email service is more demanding choosing the right email is a very difficult task. Our team continuously viewing your emails and provide you better service.",
    image: assets.FixedFurniture
  },
  {
    title: "KITCHEN CABINET INSTALLATION",
    description: "RepairBazar provides you the best kitchen cabinet installation service at an affordable price with good quality of installation components or equipment. You may call our customer care and book our ser",
    image: assets.KitchenCabinetInstallation
  },
  {
    title: "HOME FURNITURE INSTALLATION SERVICE",
    description: "When you need a home furniture installation service don't worry just contact us and enjoy our service.",
    image: assets.HomeFurniture
  },
  {
    title: "OFFICE WORKSTATION INSTALLATION SERVICE",
    description: "RepairBazar highly popular in providing office workstation installation services to our clients. Do just one call and our technician will be available for you.",
    image: assets.OfficeWorkstation
  },
  {
    title: "WOODEN PANEL INSTALLATION SERVICE",
    description: "Once you have booked our wooden panel installation service our specialists visit your place, inspection every piece of furniture that you need to be repaired.",
    image: assets.WoodenFlooring
  }
];

export const FurnitureInstalation = () => {
  return (
    <>
      <ServiceBanner title="Furniture Installation Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


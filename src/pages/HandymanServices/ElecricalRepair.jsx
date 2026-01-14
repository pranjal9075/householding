import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';



const summary=`When it comes to your household and electric appliance, your safety goes on a high level. All people want safe electrical service they don’t want to take any risk with their family and house. There are many types of electrical problems like a home circuit, electrical surges, and high electric bill problems. If you are looking for a professional technician to fix your Electrical Repair Service then contact us.`
const faqs = [
  {
    q: "Why is my home light flickering?",
    a: "Blinking lights are normally caused may be a problem with the bulb, loose light plug, faulty light or fixture."
  },
  {
    q: "How much do electricians in Delhi charge as a service fee?",
    a: "The basic inspection charge is Rs. 250-500 in Delhi for electricians."
  },
  {
    q: "Which electrical Repair company is best for 2021?",
    a: "Repair Bazar is the best company that offers electrical repair services benefits each year. We are extending our management step by step and looking through the best proficient professionals."
  },
  {
    q: "Who repairs electrical things?",
    a: "The electricians who repair all the electrical things. They have complete knowledge of electrical parts."
  },
  {
    q: "What is the electrical repair?",
    a: "Electrical upkeep covers all parts of testing, observing, fixing, and supplanting components of an electrical framework. Normally performed by an authorized proficient with total information on the National Electric Code and neighborhood guidelines, electrical upkeep covers territories as assorted as – Digital correspondence."
  }
];

const services = [
  {
    title: "Main Control Board",
    description: "Repair Bazar technicians provide a good quality of electrical work at your home. When your appliance gets some fault and main control board equipment also, our service partner resolves your problem.",
    image: assets.MainControl
  },
  {
    title: "New Electric Point",
    description: "Our technicians provide services in electrical points like plugs, switches, and other new electrical points. Don't hesitate to contact us for repair services.",
    image: assets.NewPoint
  },
  {
    title: "3 Phase Panel Board",
    description: "Repair Bazar provides you a broad range of services like residential, commercial, and industrial industries. We give you highly satisfied and guaranteed services.",
    image: assets.Phase
  },
  {
    title: "Ceiling Fan Repair",
    description: "A ceiling fan uses continue at home the giving you cooling all day. But when it stops working, call at repair Bazar we will send an expert who gives you highly satisfied and high level of safety stand.",
    image: assets.CeilingFan
  },
  {
    title: "Exhaust Fan Repair",
    description: "Repair Bazar service partner is a specialist solving any type of issue of exhaust fan repair service. Just feel a free call on our given number.",
    image: assets.ExhaustFan
  },
  {
    title: "Tube Lights with Panel",
    description: "If your lighting system not working and facing different types of issues. When your lighting components stop working, you can just call and book our services.",
    image: assets.TubeLight
  },
  {
    title: "Fancy Lights",
    description: "You can contact us when you want to repair fancy lights. Fancy lights problems include bulb stops working, LED Street lighting, etc.",
    image: assets.FancyLight
  },
  {
    title: "Sockets and Holders",
    description: "We provide you valuable electrical repair service and deal in all the sockets and holders repair service. Don't waste your time just one call on Repair Bazar.",
    image: assets.HolderSocket
  },
  {
    title: "Inverter",
    description: "If your inverter has a backup of UPS and batteries problems, just make one call to our company because our service partner solves any kind of problems.",
    image: assets.Inverter
  },
  {
    title: "Home Health Check",
    description: "Repair Bazar is a certified and best company in all home repair services whenever you need to check your home health condition. Then contact us and enjoy our home repair services.",
    image: assets.HomeHealthCheckup
  },
  {
    title: "Smart Home Solutions",
    description: "Our aims to simplify your everyday life. Because we are allegiance to give you smart home services. Our promise to give you 100% best repair services.",
    image: assets.SmartHome
  },
  {
    title: "Other Electrical Services",
    description: "Other electrical repair services provided by us like wiring problems, circuit problems, switches, and maintenance problems. Just do one call and free your mind from every issue.",
    image: assets.OtherElectrical
  }
];

export const ElectricalRepair = () => {
  return (
    <>
      <ServiceBanner title="Electrical Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


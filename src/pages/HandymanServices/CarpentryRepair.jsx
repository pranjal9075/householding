import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';



const summary=`You need carpentry, who fixes all types of carpenter repair services like a broken chair, broken table, broken bed, etc. we know that everything can be fixed. So get repaired services by an expert. `
const faqs = [
  {
    q: "What are carpentry services?",
    a: "Carpentry service generally includes managing and mending various internal and external wooden formations such as doors, floors, walls, and so on."
  },
  {
    q: "Is carpentry a good career choice?",
    a: "Carpentry is a good job for those people who are fascinated by working from home. Good carpenters are in command though and you can anticipate much varied and fascinating work throughout your career."
  },
  {
    q: "Which carpentry Repair company is best for 2021?",
    a: "Repair Bazar is the best company that offers carpentry repair services every year. We are expanding our services day by day and recruit professional technicians."
  },
  {
    q: "How to find a carpenter in my area?",
    a: "The first thing is that we are provided with services in every city. You can search on google carpenter repair service with area name like \"carpenter repair service in Janakpuri, Delhi\"."
  },
  {
    q: "What are the types of carpentry?",
    a: "Different types of carpentry work are: 1. Rough carpenter 2. Jointer 3. Trim carpenter 4. Cabinet maker 5. Ship carpenter 6. Framer 7. Roofer"
  }
];

const services = [
  {
    title: "WOODEN PARTITION",
    description: "We are providing the foremost wooden partition repair services. Our company appreciates their service partner, and when service partners get happy will give their 100% in every type of service.",
    image: assets.WoodenPartition
  },
  {
    title: "MESH",
    description: "If you want door and window mesh repair services just contact us. We create high visibility security areas with our easy to repair carpenter services.",
    image: assets.MeshRoof
  },
  {
    title: "MAKING A NEW SOFA",
    description: "Repair Bazar also deals with making a new wooden sofa. We are fascinated to give you these services.",
    image: assets.MakingAnewSofa
  },
  {
    title: "MAKING A NEW WOODEN CHAIR",
    description: "We are offer service widely demanded by our customer who wants reliability and perfect execution. You can contact us on our given information.",
    image: assets.WoodenChair
  },
  {
    title: "DOOR STOPPER",
    description: "When it comes to the door stopper, there are many door stoppers like rubber stopper, wall bumper door stopper, hook door stopper, etc. we will give you all kinds of door stopper repair services at",
    image: assets.DoorStopper
  },
  {
    title: "BED CARPENTER SERVICE",
    description: "Repair Bazar provides you good quality bed repair service you have to make sure that we delivered your wooden partition services with 100% satisfaction.",
    image: assets.BedCarpenterService
  },
  {
    title: "HANDLE REPAIR SERVICE",
    description: "Our company deals with all kinds of handle use in the house. Our technician arrives at your doorstep on time. Our technician primary job is to get to fulfill your satisfaction.",
    image: assets.Handle
  },
  {
    title: "DOOR LATCH",
    description: "Installation of new door latch, door stops, door enclosures, etc. providing these all types of repair service. Our technicians will arrive at your home and give you highly best services.",
    image: assets.DoorLatch
  },
  {
    title: "DOOR PEEPHOLE",
    description: "Our trained carpenters can give any type of door peephole repair service. You can fill your requirements by book our repair service.",
    image: assets.DoorPeephole
  },
  {
    title: "DOOR CHAIN",
    description: "When it comes to door chain repair services just contact Repair Bazar who always allegiance to help you.",
    image: assets.DoorChain
  },
  {
    title: "FURNITURE REPAIR",
    description: "If you are looking for help with furniture repair, then you come to the right place. We provide all kinds of furniture repair needs, big and small. We have highly-experienced technicians who have bee",
    image: assets.FurnitureRepair
  },
  {
    title: "BIRD NETTING",
    description: "Bird netting may be used for fisheries and fish reserves. Bird protection netting available in a variety of shapes and forms. Our company offers you a repair and maintenance service.",
    image: assets.BirdNetting
  }
];

export const CarpentryRepair = () => {
  return (
    <>
      <ServiceBanner title="Carpentry Repair Services"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


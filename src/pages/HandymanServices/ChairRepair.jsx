import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';



const summary=`For chair repair service you need an expert who knows deeply about the chair repair. Feel free to book our Chair Repair Service and get instant repair of your chair.`
const faqs = [
  {
    q: "Can I have the chair repaired at my premises?",
    a: "Yes, you can have the chair repaired at your premises. Nonetheless, sometimes the chair may be required to be transported to the shop for the repairing."
  },
  {
    q: "Which chair Repair company is best for 2021?",
    a: "Repair Bazar is the best company that offers chair repair services every year. we are expand our services day by day and searching for the best professional technicians."
  },
  {
    q: "What is the approximate cost of repairing a chair?",
    a: "The average cost of repairing a chair minimum cost is Rs.80."
  },
  {
    q: "How to fix the back of an office chair?",
    a: "Yes, you can fix the back of your office chair from Repair Bazar Company. Whenever your chair damage then do not look anywhere just contact us."
  },
  {
    q: "Do chair repair stores in Delhi restore antique chairs?",
    a: "Yes, Repair Bazar company stores restore antique furniture by replacing the damaging parts of the chair but the remaining structure will be the same."
  }
];

const services = [
  {
    title: "BIG AND TALL CHAIR REPAIR",
    description: "Big and Tall Chairs are capable of supporting tall users and made up of thick wooden structure. Sometimes the alignment of Big and Tall Chairs may be disturbed while using carelessly so in this situat",
    image: assets.Big_TallChair
  },
  {
    title: "CONFERENCE CHAIR REPAIR",
    description: "Conference chairs are known for conference halls sittings and video calls. According to time, Conference Chairs require repair service to avoid any inconvenience during any official meetings. For perf",
    image: assets.ConferenceChairRepair
  },
  {
    title: "OFFICE CHAIR REPAIR",
    description: "Too long hours of office work and better support of the body, Office Chairs are the best option to provide your employees with a comfortable chair to work for long hours. We provide the quality repair",
    image: assets.Office_Chair_Repair1
  },
  {
    title: "EXECUTIVE CHAIR REPAIR",
    description: "It needs a lot of thinking while buying the Executive chairs as they are costliest chairs that require proper repair and service according to the time. To repair service executive chairs you need an e",
    image: assets.Executive_Chair_Repair
  },
  {
    title: "GUEST CHAIR REPAIR",
    description: "Guest chairs are the important furniture item of every household that adds beauty to your drawing-room. These chairs require special polish care to keep them shining. We provide the best Guest Chairs",
    image: assets.Guest_Chair_Repair
  },
  {
    title: "ARMCHAIR REPAIR",
    description: "An armchair is the medium of expression of every householder to impress their guests. But, as time passes these armchairs lose their color and finish. To keep them shining you require a perfect armcha",
    image: assets.Armchair_Repair
  },
  {
    title: "RECLINER CHAIR REPAIR",
    description: "Recliner chair has its own identity as a relaxing chair for all. It is available in several variants and qualities but to maintain its finishing you require the perfect expert of Recliner chair repair",
    image: assets.Recliner_Chair_Repair
  },
  {
    title: "CONTEMPORARY ROUND CHAIR",
    description: "For traditional chair choices, Contemporary Round Chair is best for all of us as it gives you extra relaxation and comfort along with the feel of royalty. Their timely repair is also important as they",
    image: assets.Contemporary_Round_Chair
  },
  {
    title: "LOVESEAT CHAIR REPAIR",
    description: "It is known for extra comfort for two persons. Having cuddle factors included, it requires timely repair as it comes under best comfortable chairs for two persons. We provide Loveseat repair at your h",
    image: assets.Loveseat_Chair_Repair
  },
  {
    title: "ACCENT CHAIR REPAIR",
    description: "These are known as living room chairs that add an attractive match of color and coordination with other furniture at your home. They give a royal look to your bedroom so they are made very sophistical",
    image: assets.Accent_Chair_Repair
  },
  {
    title: "CLUB CHAIR REPAIR",
    description: "Adding extra comfort in your sitting, Club chair is the identity of royalty as these are costly chairs with the best color and wood combination. It requires timely repair to maintain its quality for a",
    image: assets.Club_Chair_Repair
  },
  {
    title: "WINGBACK CHAIR REPAIR",
    description: "Known for its unique design and comfort, it requires proper repair under the supervision of a Wingback Chair repair expert. To get the expert in Wingback Chair repair, just fill our service form and g",
    image: assets.Wingback_Chair_Repair
  }
];

export const ChairRepair = () => {
  return (
    <>
      <ServiceBanner title="Chair Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


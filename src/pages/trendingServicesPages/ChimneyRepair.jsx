import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';




const summary=`Smokestack securely expels the result of burning from a chimney or some of the apparatus outside of the structure, keeps the house from risk. Repairbazar chimney fix benefits consistently give high innovation to fix your item and give our clients the best outcome each opportunity to give verified nature of administrations. It is imperative to have your fireplace clean. thus, simply make a call and our accomplished group will reach at your doorstep to fix your Chimney Repair Service. Our central goal is to give our clients the best Chimney and other kitchen machines to fix administration with trustworthiness, reliability, and moderate cost. The solution to all the problems is just a click or a call on +91-9999894591 for booking services.`
const faqs = [
  {
    q: "Which chimney repair company is best for 2021?",
    a: "Repair Bazar is the best company that offers chimney repair services every year. We are expanding our services day by day and searching for the best professional technicians."
  },
  {
    q: "How do I clean my chimney self?",
    a: "You can use some elements to clean your chimney like vinegar, caustic soda, baking soda, dishwashing liquid, paint thinners, etc these all are the home DIY cleaning formulas."
  },
  {
    q: "How much does chimney repair cost?",
    a: "The chimney repair cost is Rs.250-500, the installation charge is Rs.200-400, and the inspection charge is Rs.200."
  },
  {
    q: "Will they repair the chimney at my house?",
    a: "Yes, of course, Repair Bazar company offers services at your doorstep also. Whenever you think you need chimney repair services then just reached us through our website."
  },
  {
    q: "Which type of filter is best for the chimney?",
    a: "The baffle filters are the best filter for the chimney. Baffle filters can handle regular household cooking in the kitchen."
  },
  {
    q: "How do I choose a chimney size?",
    a: "The size of your smokestack essentially relies upon the size of the oven you have. The most normally accessible sizes of a fireplace are 60 cm and 90 cm. On the of the chance that that you have an oven with two burners or less, you can go for a 60 cm fireplace. Be that as it may, if your oven has 3 burners or more you ought to choose a 90 cm fireplace."
  }
];

const services = [
  {
    title: "CHIMNEY INSTALLATION SERVICE",
    description: "Repair Bazar is the one-stop destination for your Chimney installation as well as its Service. We have an expert team of highly experienced technicians who will service your chimney. We install home a",
    image: assets.chimney_installation
  },
  {
    title: "CHIMNEY REPAIRS",
    description: "To protect you from accidental fires, Repair Bazar repairs your Chimney at reasonable rates and sends an expert technician at your doorstep to repair the Chimney. Just book our service and get insta",
    image: assets.chimney_repairs1
  },
  {
    title: "CHIMNEY SEALING",
    description: "To protect the internal working system of your Chimney it is good to provide compact sealing to your Chimney from outside. Repair Bazar provides the best Chimney sealing service to protect it from the",
    image: assets.chimney_sealing
  },
  {
    title: "CHIMNEY REPAIR AND REBUILDING",
    description: "Repair Bazar has a team for Chimney repair and rebuilding services at your doorstep. For long-term performance, it is good to have a timely repair of your Chimney. We also provide Chimney rebuilding",
    image: assets.chimney_repair1
  },
  {
    title: "ELECTRIC CHIMNEY REPAIRING",
    description: "Electric Chimney Repairing Services that are shielding flammable materials around the stack from heat. fix Electric Chimney according to the subtleties gave to us the most extreme consideration to co",
    image: assets.electric_chimney
  },
  {
    title: "CHIMNEY LINER REPAIR",
    description: "A harmed vent liner can cause a house fire, which reasons for ill-advised development. Destructive side-effects of ignition cause weakening. Vent gases are dangerous and acidic; they accelerate the de",
    image: assets.chimneyl_iner1
  },
  {
    title: "CHIMNEY WATERPROOFING",
    description: "Repairbazar smokestack fix administrations apply waterproofing fireplace saver to your stonework, which is used to forestall water entrance which is the single most noteworthy reason for disintegratio",
    image: assets.chimney_waterproofing
  },
  {
    title: "MODULAR CHIMNEY REPAIRING",
    description: "The electric Chimney makes the kitchen and home smokeless. So among different machines, Chimney is imperative to make a home total. Our smokestack fix utilizing a raised level of materials and technol",
    image: assets.modular_chimney
  },
  {
    title: "CHIMNEY IS BLOCKED",
    description: "Frustrating with a blocked chimney? Stack cleaning is the most significant thing you should carry out for your fireplace. It will secure your home against flames and different harms brought about by t",
    image: assets.chimney_blocked
  },
  {
    title: "CHIMNEY HAS A LINER",
    description: "A pipelining in a brickwork stack is characterized as 'A mud, fired, or metal course introduced within a fireplace, simply approach and resolve your problems.our proficient are constantly ready to hel",
    image: assets.chimney_liner
  },
  {
    title: "THE CHIMNEY IS LEAKING",
    description: "Is your smokestack spilling? A flawed fireplace is the most disturbing issue that can unleash ruin on the structure of your home if not tended to appropriately. The dampness brought about by a defecti",
    image: assets.chimney_leaking
  }
];

export const ChimneyRepair = () => {
  return (
    <>
      <ServiceBanner title="Chimney Repair Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ACServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';




const summary=`It is very important that maintenance and repair services to your home by a plumber just make your home safe and your family. Here are some plumbing repair services we offer are a gas leak can be dangerous, washbasin, kitchen sink, etc. we are pleased to resolve your problem.`
const faqs = [
  {
    q: "How much do plumbers usually charge per hour?",
    a: "The Plumber normally charges the average cost is Rs. 45-200 per hour."
  },
  {
    q: "Do plumbers fix broken pipes?",
    a: "Yes, the plumber deals with broken pipes also. They repair all types of cracked pipes."
  },
  {
    q: "When should I call a plumber for a clogged toilet?",
    a: "If your flush not working properly or overflow water in the bathroom. In these cases you need to call a plumber."
  },
  {
    q: "Which plumber Repair company is best for 2021?",
    a: "Repair Bazar is the best organization that offers plumber repair services benefits each year. We are extending our management step by step and looking through the best proficient professionals."
  }
];

const services = [
  {
    title: "TAP & MIXER SERVICES",
    description: "Repair Bazar provides an expert for your property. We have a team of skilled, professional, experienced technicians. If your tap leak just dials a call and contact us.",
    image: assets.tap
  },
  {
    title: "WASH BASIN",
    description: "Maintaining sanitation and hygiene very important thing for your washbasin. Over the years, we have several technicians who deal with leak detection, sanitary and plumber services.",
    image: assets.wash_basin
  },
  {
    title: "KITCHEN SINK",
    description: "Homeowners use the sink every day and every time, this is situated inside the kitchen. Sometimes it needs a repair service. Just one call to us.",
    image: assets.kitchen_sink
  },
  {
    title: "BATH FITTING",
    description: "Repair Bazar provides high-quality toilet repair services at a reasonable price within your agreed time. If you want services you can book our service.",
    image: assets.bathfitting
  },
  {
    title: "TOILET",
    description: "Toilet maintaining sanitation and hygiene when it leaks water from it then you need services. Over the years, our company is a trustworthy and best repair services dealer.",
    image: assets.flush_tank
  },
  {
    title: "MINOR INSTALLATION",
    description: "We provide all types of Minor Installation repair services. You just to do let us know about your requirement and we will come to your home at your convenient time.",
    image: assets.toilet_jet
  },
  {
    title: "MOTOR",
    description: "Bathing in polluted water may cause harmful and skin rashes. So if you want to save from these problems just fit water filters in the bathroom. Now book our services and contact us.",
    image: assets.motor
  },
  {
    title: "WATER TANK",
    description: "Our plumber gives you the best plumbing repair services at a reasonable price within your schedule. Please feel free to contact us.",
    image: assets.water_tank
  },
  {
    title: "PIPE LINES AND PUMPS",
    description: "Are your pipeline and pumps are leaking? Are you searching for the best technician? Just contact Repair Bazar and get satisfying services.",
    image: assets.pipeline_pump
  },
  {
    title: "BLOCKAGE",
    description: "Now you can get competent plumber services for any kind of issue or requirement. We have skilled and knowledgeable technicians, who give you fascinated services.",
    image: assets.home_checkup
  }
];

export const PlumberRepair = () => {
return (
    <>
      <ServiceBanner title="Plumber Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


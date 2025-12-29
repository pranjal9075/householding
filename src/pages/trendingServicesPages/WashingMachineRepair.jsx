import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';



const summary=`Washing machines have built the onerous process of laundry a breeze. It has become an integral Section of any domestic that your life can come to a standstill if It is far from Doing the job. Additionally, if the washing machine’s problems are disregarded, it might cause irreparable damage to the machine. With that in mind, Repair Bazar provides all kinds of washing machine repair services in Delhi and all over India. We also sell top-of-the-line washing machines. Our top-class washing machine repair service in Delhi-NCR is not only cost-efficient but has always won accolades from our esteemed clients. Nowadays, everyone chasing their dream and they are so busy achieving the goal, also they do not have time to do laundry. It is quite hard to take time in their busy schedule to do laundry. But clean clothes boost your moral support, and clean clothes will need a washing machine. But sometimes washing machine occurs problems that need to check thoroughly. Here comes Repair Bazar understands the need for a washer, that is why we provide an expert technician who has complete knowledge about washing machine repair problems. We take care of your washer by giving the best washing machine repair service at your doorstep at a very reasonable price. You can Search keywords like washing machine repairing, washing machine servicing, washing machine services, washing machine repair near me and etc.`
const faqs = [
  {
    q: "What are the common problems with washing machines?",
    a: "The common problems with washing machines are washers making strange sounds, washers would not run, water would not drain, the basket is slow and would not spin, etc."
  },
  {
    q: "How do you know when your washing machine is broken?",
    a: "You can know through some signs that your washing machine is broken, and that signs are your washing machine is noisy, leaking, will not start, will not agitate, the timer will not advance, burning smell, no hot or cold water, etc."
  },
  {
    q: "Can a plumber fix a washing machine?",
    a: "In the case of your washing machine, you can call; an electrician, a plumber, and an appliance repair person. If you have problems related to water then you can call a plumber."
  },
  {
    q: "How much does it cost to repair a washing machine?",
    a: "The overall cost to repair a washing machine low cost is 100, the average cost is 200, and the high cost is 375."
  },
  {
    q: "What is the best washing machine to repair in 2021?",
    a: "The best place for your washing machine to repair in 2021 is Repair Bazar. Our company is an experienced and certified company that provides services for many years."
  },
  {
    q: "When should you replace a washing machine?",
    a: "we have to know that when our washing machine needs to be replaced or repaired. There are 6 warning signs that your washers need to be replaced are excessive leaking, excessive noise, it moves, water does not fill the drum, your washers are older than 8 years old, etc."
  },
  {
    q: "How do you fix a washer that would not drain?",
    a: "Before the call to a professional follow these tips. 1. Unplug the washer to prevent short circuits before checking other parts. 2. Use a bucket or pot to remove the water from the washer."
  }
];

const services = [
  {
    title: "AUTOMATIC WASHING MACHINE REPAIR",
    description: "Available as semi and fully automatic versions, these are slightly tricky to repair and fix. But our highly experienced and trained professionals make the washing machine repair in Meerut look like a",
    image: assets.automatic_washing_machine_repair
  },
  {
    title: "FRONT-LOAD WASHING MACHINE REPAIR",
    description: "Stop getting frustrated by pressing all kinds of buttons and getting error codes in return! Pass on the job to our skilled professionals who know the ins and outs of all kinds of washing machine repai",
    image: assets.frontload_washing_machine_repair
  },
  {
    title: "TOP LOADING WASHING MACHINE REPAIR",
    description: "The machine might not be powering or making a grinding noise or giving water drainage issue or any other. Leverage the knowledge and skill of our esteemed professionals to get your washing machine up",
    image: assets.toploading_washing_machine_repair
  },
  {
    title: "SEMI WASHING MACHINE REPAIR",
    description: "With different compartments for washing and spinning clothes, it develops issues like the spinner not working, belt not moving, dirt accumulated in the motor area, etc. Pass on the stress and hassle o",
    image: assets.semiwashing_machine_repair
  },
  {
    title: "WASHING MACHINE REPAIR SERVICE",
    description: "Look no further than us for any of your washing machine woes! We are the ultimate for all kinds of washing machine repairs in Noida. We pride ourselves on offering top-notch service at jaw-dropping pr",
    image: assets.washing_machine_repair
  },
  {
    title: "WASHING MACHINE INSTALLATION",
    description: "A washing machine is your loyal friend only if it is properly installed. Its ducts in the water inlet and outlet must be proper for a seamless experience. Our professionals are a pro in installing all",
    image: assets.washing_machine_installation
  },
  {
    title: "WASHING MACHINE SERVICING",
    description: "Your washing machine needs regular servicing to eliminate all gunk, soap suds, and mold formation from its insides. Our trusted professionals pack impressive experience in washing machine service in L",
    image: assets.washing_machine_servicing
  },
  {
    title: "WASHER AND DRYER REPAIR SERVICE",
    description: "A very common issue with all machine machines, it can bring your life to a halt! We boast of specialized technicians who expertise in washing machine repairs in Moradabad by the brand, model, and make",
    image: assets.washer_dryer_repair
  }
];
export const WashingMachineRepair = () => {
  return (
    <>
      <ServiceBanner title="Washing Machine Repair Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


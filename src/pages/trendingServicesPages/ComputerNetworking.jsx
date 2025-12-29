import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';



const summary=`Repair Bazar one of the biggest repair service providers in India, we offer experience and technician who has a comprehensive knowledge of IT computer network service. So whether you’re WAN optimization service, wireless service, and quality of services our technician resolves any problems at your destination and helps to keep remain their service fast and stable. Call us to avail of our service.`
const faqs = [
  {
    q: "Do movers help you pack?",
    a: "Full-service movers will get together your whole house for you with prepared packers who can get your things securely put away in a small amount of the time it may take you to do it without anyone else help. They will likewise have the option to expertly and safely get together delicate and significant things, for example, glass and fine art. Furniture dismantling."
  },
  {
    q: "What jobs will Packers and Movers in Delhi perform?",
    a: "The relocation process performed by the professional packers and movers comprises of the following steps: • Perform a pre-move survey of the customers place to note down the details of the relocation. • Dismantling all the furniture, electrical appliances like TV, and other things for easy shifting. • Packing everything with good quality packing materials. • Carefully loading all the household items in the transport vehicle. • Transportation of belongings from the current location to the new one. • Carefully unloading the items from the truck. • Unpacking the goods at the place. • Closure of the deal with the full payment for their services."
  },
  {
    q: "Which packers and movers service company is best for 2021?",
    a: "Repair Bazar is the best company that offers packers and movers services every year. we are expanding our packers and movers services day by day and recruit professional technicians."
  },
  {
    q: "Which is the best packers and movers in India?",
    a: "1. Urban relocations 2. Repair Bazar 3. Maxwell relocations 4. Happy packers & movers Pvt. Ltd. 5. Agarwal packers 6. Skywing packers and movers"
  },
  {
    q: "How much GST rate is applied to packers and movers services?",
    a: "The GST rate applied to the services of packers and movers is 5% when a person avails all the relocation services (packing, loading, unloading, and unpacking) of the company."
  },
  {
    q: "What are the benefits of hiring packers and movers?",
    a: "The benefits of availing the packing & moving service are: • Safety and security of your luggage. • Save time and energy. • Fast shifting process. • Stress-free shifting. • Availability of insurance claim in case of any damage. • Warehouse and storage facility."
  },
  {
    q: "How do packers and movers charge shifting cost?",
    a: "The packers and movers charges shifting/moving cost based upon the following factors: • Distance between the two places. • The material used in packing. • Labor charges. • The number and size of the items to be relocated."
  }
];

const services = [
  {
    title: "WAN OPTIMIZATION SERVICE",
    description: "WAN optimization or we can say WAN acceleration is used to maximize the data speed to flow across a wide area it helps to open fast application and information and we REPAIR BAZAR provide you quality",
    image: assets.wan
  },
  {
    title: "WIRELESS SERVICE",
    description: "In modern times everyone using wireless technology to connect people or gather information through wireless technology and we provide smooth service for your wireless technology by our expert technici",
    image: assets.wireless
  },
  {
    title: "IPSEC & SSL VPN SERVICE",
    description: "IPSec & SSL VPN is used for encrypting data and secures the network and our expert technicians are very skillful to take care of your problems at a very affordable price in Noida as well as all me",
    image: assets.vpn_service
  },
  {
    title: "QUALITY OF SERVICE",
    description: "Quality of service (QoS) is a set of technology which is providing better elasticity over the technology and we help to keep remain their service fast and stable. Book your appointment to fix your pro",
    image: assets.qualityof_service
  }
];
export const ComputerNetworking = () => {
  return (
    <>
      <ServiceBanner title="Computer Networking Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';




const summary=`Are you shifting to another place? If you shifting to another apartment in the same city then you need to pack and moved safely. We provide packers and movers services include furniture, suitcases, artifact, etc. We are expert in the door to door hassle-free Packers and Movers services all over India with utmost safety. We have an exceptionally dedicated team of experts who are here to give end-to-end packers and movers services across the country. We provide different types of packing and moving services at a very affordable cost. Call us for the best packers and movers services. Repair Bazar company aims to offer the most affordable and world-class services in-home and corporate relocation. We are here to offer you end-to-end solutions to all your packing and moving problems. You can rest assured of getting quality service with our vast network of experienced packers and movers in Delhi as well as all over India. As the Indian economy is growing, the need for relocation services is also increasing enormously. The numbers of enterprises came up to catering this ever-increasing demand. What makes us unique among the other online service providers is our approach to deliver verified relocation services at a very competitive price. While all other relocation companies claiming their clients to offer a quality movers and packers service, we emphasize a spot and error-free service rather than lavishly propagating unnecessary things. Here are the key aspects that make us stand out among others in the competition: • We provide the complete end-to-end relocating guide to our customers. It helps them to get all the information about every aspect of the relocation process, such as pre relocation tips and different ways to minimize the scope of damages. Using these guidelines, the customer will be fully prepared for a hassle-free relocation. • We offer quotes on various customized packers and movers services to our customers by knowing their personal needs. It helps them to plan their budget in the most efficient way. Also, this helps them to negotiate effectively with service providers. • We offer our customers the guidance of a renowned expert in executing a safe and secure relocation. These experts also give their reviews about different packers and movers to guide our customers to choose the best from the rest. • Our customers can post their queries related to all aspects of the relocation process. They can also find the answers to their queries in the Frequently Asked Questions (FAQs) section.`
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
    title: "LOADING AND UNLOADING SERVICE",
    description: "When you are relocating from one place to another, you have a huge amount of luggage, and you cannot load and unload it by yourself. Also, the safety and security of fragile goods are other issues. Re",
    image: assets.loading_unloading
  },
  {
    title: "TRANSPORTATION PROCESS SERVICE",
    description: "There are different kinds of transportation services like off-road transport, water transport, air transport, etc. Different transportation services require different expertise and experience. Repair",
    image: assets.transportation_process
  },
  {
    title: "WAREHOUSE & STORAGE SERVICE",
    description: "Generally, a manufacturer needs Warehousing & Storage services. Manufacturer stores goods in bulk quantity. We, the Repair Bazar, also offer warehouse and storage services where you can store your goo",
    image: assets.warehouse_storage
  },
  {
    title: "HOUSEHOLD RELOCATION SERVICE",
    description: "Repair Bazar provides you professional experts at an affordable budget who are well trained in their work. We offer our household relocation services within the same city and from one city to another.",
    image: assets.household_relocation
  },
  {
    title: "PACKING AND MOVING SERVICE",
    description: "We provide the best packers and movers services include furniture, suitcases, artifacts, almirah, etc. at a very competitive price. Repair Bazar operates packers and movers services in Delhi as well a",
    image: assets.packing_moving
  },
  {
    title: "CORPORATE SHIFTING SERVICE",
    description: "Corporate shifting service means shifting your office property from an existing place to a new one. We also offer corporate shifting services all across India. We have an expert team of professionals",
    image: assets.corporate_shifting
  },
  {
    title: "DOMESTIC MOVING SERVICE",
    description: "A domestic moving service means shifting your house within the same city or from one city to another. When you are relocating to any place, you need a domestic moving service, and we offer our service",
    image: assets.domestic_moving
  },
  {
    title: "OFFICE RELOCATIONS SERVICE",
    description: "Office relocations are very common in India. It is very risky also. We offer a risk-free office relocation service at a very affordable price. Transport all your systems and libraries from one place t",
    image: assets.office_relocations
  }
];

export const PackersMovers = () => {
  return (
    <>
      <ServiceBanner title="Packers And Movers Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


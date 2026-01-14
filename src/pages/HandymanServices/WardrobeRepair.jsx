import React from 'react'
import { assets } from '../../assets/assets';
import ServiceBanner from '../../component/CardStructure/ServiceBanner';
import ServiceGrid from '../../component/CardStructure/ServiceGrid';
import ServicesPage from '../../component/CardStructure/ServicesPage';
import Summary from '../../component/CardStructure/Summary';



const summary=`The wardrobe design then area and offer beautiful and attractive looks to the bedrooms, offices, bathrooms, etc. Repair Bazar provides all wardrobe repair services like door wardrobe, sliding wardrobe, custom wardrobe, wooden wardrobe service, etc. we deliver good quality service as a customer wants.`
const faqs = [
  {
    q: "How much should built-in wardrobes cost?",
    a: "For a fundamental implicit closet this might be generally Rs.1,000 and for a top-of-the-line worked in the statement could be up to Rs.5,000. Concerning stroll in closets - relying upon the multifaceted nature and size of the work - it very well may be assessed to cost nearer to the Rs.30,000 mark."
  },
  {
    q: "How do you revamp old wardrobes?",
    a: "Are you looking for a person who makes your wardrobe new? If yes, then you must visit Repair Bazar website and get a perfect professional for your wardrobe."
  },
  {
    q: "Which wardrobe Repair company is best for 2021?",
    a: "Repair Bazar is the best organization that offers wardrobe repair services benefits each year. We are extending our management step by step and looking through the best proficient professionals."
  },
  {
    q: "Why a wardrobe is called a wardrobe?",
    a: "Wardrobe means \"to keep, to guard\" and \"robe\". A closet or a box in which clothes can be stored."
  }
];

const services = [
  {
    title: "Doors Wardrobe Service",
    description: "When you are looking for a serious storage solution collection of door wardrobes. If you see closing and opening a problem with your wardrobe then it needs repair service. We are ready to providing you",
    image: assets.DoorWardrobe
  },
  {
    title: "Custom Wardrobe Service",
    description: "A custom wardrobe gives you sufficient space, compartments, and dimensions. With this type of wardrobe, you feel happy. If you have any queries when designing your custom wardrobe feels free to contact",
    image: assets.CustomWardrobe
  },
  {
    title: "Sliding Wardrobe Service",
    description: "Maximum storage in small rooms using wall-to-wall storage with sliding door wardrobe. When you need to fit a sliding wardrobe, just call our company.",
    image: assets.SlidingWardrobe
  },
  {
    title: "Wooden Wardrobe Service",
    description: "A wooden wardrobe gives your bedroom a royal style. If you want to install and repair the service of a wooden wardrobe then contact Repair Bazar that will send a technician to your house and resolve y",
    image: assets.WoodenWardrobe
  },
  {
    title: "Damro Wardrobe Service",
    description: "Damro a wardrobe suits the home and office room. This wardrobe has an Indian touch and innovative style. Please feel free to contact Repair Bazar.",
    image: assets.DamroWardrobe
  },
  {
    title: "Walk-in Wardrobe Service",
    description: "Walk-in wardrobes are extremely luxurious when it comes to clothes, shoes, and other storage. We provide solutions to all types of issues of wardrobe at a reasonable price.",
    image: assets.WalkinWardrobe
  },
  {
    title: "Fitted Wardrobe Service",
    description: "Fitted wardrobes are attached to the wall of your room and if you want to remove it. You need safety precautions and skilled workers. Just contact us on our given number. We are providing you the best",
    image: assets.FittedWardrobe
  },
  {
    title: "Fino Wardrobe Service",
    description: "Just like a walk-in wardrobe, a fino wardrobe also a luxurious wardrobe. It is suitable for every type of storage but when you need repair service just hire an expert for your wardrobe. We have skille",
    image: assets.FinoWardrobe
  }
];

export const WardrobeRepair = () => {
  return (
    <>
      <ServiceBanner title="Wardrobe Repair Service"/>
      <Summary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ServicesPage items={faqs} />
    </>
  )
}


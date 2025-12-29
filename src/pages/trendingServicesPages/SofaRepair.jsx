import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';



const summary=`Every people have a sofa in their house and if they have a sofa then they need of sofa repair service also. When it comes to repairing service all people want home service they don’t go out with a heavy sofa. RepairBazar gives you effective sofa repair services, sofa repair installation services, sofa repairing, sofa repairs, sofa repair near me, sofa repair at home, etc.`
const faqs = [
  {
    q: "How can I dry clean my sofa at home?",
    a: "Before the dry process makes sure your work area is well ventilated. Take a clean towel and apply on it dry cleaning solvent and gently brush over the dirty areas on the sofa."
  },
  {
    q: "How much time does it take to repair a sofa?",
    a: "It all depends on the condition of the sofa, the average chair can easily take 8-14 hours to repair. Average labor time on the average sofa to remove and replace the fabric approximately 16-22 hours."
  },
  {
    q: "How much does it cost to repair a sofa?",
    a: "If you want to repair a leather sofa then the average cost is 500-1000. And you want to repair a wooden sofa then the average cost is 300-700."
  },
  {
    q: "How do you fix a sofa set?",
    a: "The sofa is a critical and important piece of furniture in the house. when you think about fixing your sofa then you need to contact with an experienced company, who provides excellent service on the sofa."
  },
  {
    q: "How do you clean a fabric sofa?",
    a: "For instance, fabric upholstery can be cleaned by a mixture of 3/4 cup warm water, 1/4 cup vinegar, and one tablespoon of dish soap. In the case of a synthetic sofa, you can take a mixture of one cup of warm water and 1/2 cup vinegar, and 1/2 tablespoon of dish soap."
  },
  {
    q: "How do I dry clean my sofa?",
    a: "When you need to dry clean your sofa by a professional then you want excellent service for your sofa. Firstly you need to search for a certified company that can deal with sofa dry cleaning."
  },
  {
    q: "Where do sofa set repair and service centers in Delhi repair the sofa?",
    a: "They frequently repair the furniture at their workshop. Some may agree to repair minor defects at your home."
  }
];

const services = [
  {
    title: "TRADITIONAL SOFA REPAIR",
    description: "Our company provides you Traditional Sofa Repair services. When you feel your sofa arms are in the bad condition then you need professionals who repair the sofa arm with their skills. Just contact us",
    image: assets.traditional_repair
  },
  {
    title: "SECTIONAL SOFA REPAIR",
    description: "Our technician will remove old upholstery and use the new upholstery. When you use the couch for a long time then you need to redecorate your sofa with a new couch. Whenever you need our technician wi",
    image: assets.sectionalsofa_repair
  },
  {
    title: "MODULAR SOFA REPAIR SERVICE",
    description: "Our company will bring you 100% guaranteed satisfaction and high-quality service. A bad and dirty couch does not suit at home. You have to give your sofa maintenance every month by an expert. If you",
    image: assets.modularsofa_repair
  },
  {
    title: "OFFICE SOFA REPAIR SERVICE",
    description: "Just as a sofa is necessary at home, it is also necessary for the office. We use high-grade materials to repair your office sofa. When you have a sofa in your office, your wish is that your sofa will",
    image: assets.office_sofa
  },
  {
    title: "RECLINER SOFA REPAIR SERVICE",
    description: "Sofa recliner is something that you want to best service at your place within your schedule. Our company deals with all types of sofa problems. Feel free to contact us.",
    image: assets.sofa_recliner
  },
  {
    title: "STORAGE SOFA REPAIR SERVICE",
    description: "Our skilled and professional technician provides best services; they know what the client requirements are. They will give their 100% to fulfilling customer x wishes. If you want to sofa refurbishment",
    image: assets.storage_sofa
  },
  {
    title: "SOFA CUM BED REPAIR SERVICE",
    description: "This is the best option when you require a steel and metal sofa. These sofas contain less space. When you wish for the sofa for the guest then we prefer your sofa cum bed because it turns the sofa int",
    image: assets.sofacum_bed
  },
  {
    title: "SOFA CHAIR REPAIR SERVICE",
    description: "A sofa chair is a method of weaving seats and other sofa elements. Whenever you want this type of service then contact RepairBazar who provides you best repair services at your doorstep.",
    image: assets.sofachair_repairing
  }
];

export const SofaRepair = () => {
  return (
    <>
      <ServiceBanner title="Sofa Repair Service"/>
      <AcSummary title={summary} />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}


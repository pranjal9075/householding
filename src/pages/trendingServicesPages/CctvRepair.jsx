import React from 'react'
import ServiceBanner from '../../component/AcRepair/ServiceBanner';
import AcSummary from '../../component/AcRepair/AcSummary';
import ServiceGrid from '../../component/AcRepair/ServiceGrid';
import ACServicesPage from '../../component/AcRepair/ACServicesPage';
import { assets } from '../../assets/assets';



const faqs = [
  { 
    q: "Which CCTV repair company is best for 2021?",
    a: "Repair Bazar is the best company that offers CCTV repair services every year. We are expanding our services day by day and searching for the best professional technicians." 
  },
  {
     q: "How long does it take to repair a CCTV camera?", 
     a: "The best news is that CCTV can be installed very quickly, but sometimes it takes more time due to complex defects." 
  },
  {
     q: "How do you install the products?", 
     a: "When you are want to install a CCTV, then must arrive at our website. Repair Bazar company has the best CCTV repair and installation technicians." 
  },
  {
     q: "Why is Repair Bazar best CCTV camera repair service in Delhi?", 
     a: "Repair Bazar provides best CCTV camera repair service in Delhi also because we covered almost all cities." 
  },
  {
     q: "Can the repair technicians help retrieve the lost CCTV data?", 
     a: "Contingent on the seriousness of the issue and some different components, the fixed community may back-up the information." 
  },
  {
     q: "What is the repair cost for a CCTV?", 
     a: "The CCTV installation cost is 500-1000 and CCTV repair & service costs are 500-2000." 
  },
  {
     q: "Do you offer a warranty for CCTV Installation Service?", 
     a: "Yes, we offer the best warranty for CCTV installation service also. Do not go anywhere just contact Repair Bazar and get a satisfying warranty." 
  },
];

const services = [
  {
    title: "DVR CAMERA SERVICES",
    description: "The DVR is an important component of your CCTV to capture video images, compress them, and store them. It can develop a plethora of problems. Trust our class-apart repair services in Lucknow to resolv",
    image: assets.dvr_camera
  },
  {
    title: "CCTV INSTALLATION",
    description: "Whether you are installing a complete unit or upgrading your present one; trust our top-notch professionals to give you the best CCTV service in Meerut. From purchasing one from us to any service, we",
    image: assets.cctv_installation
  },
  {
    title: "HD CCTV CAMERA",
    description: "This high definition camera is all about quality and clarity. Resolving its arising problems can be slightly tricky. But our certified professionals offer pro-CCTV repair services in Ghaziabad. From m",
    image: assets.hd_cctv
  },
  {
    title: "IP CCTV CAMERA",
    description: "Losing the link to your CCTV camera can leave you completely puzzled and insecure. But our trained professionals will be at your doorstep in the lowest turn-around time get the security system working",
    image: assets.ip_cctv
  },
  {
    title: "FISHEYE CAMERA",
    description: "Distortion and vignetting are the most common issues with these cameras. We are well equipped and experienced to tackle all CCTV repair services in Lucknow for this type of camera. Allow us to fix it",
    image: assets.fisheye_camera
  },
  {
    title: "CCTV CABLE COPPER",
    description: "Several types of CCTV are used to maintain the camera alert and vigil on your premises. From underground to link ducting, our CCTV repair services in Noida takes care of any cabling issues at the most",
    image: assets.cctv_cable
  },
  {
    title: "CCTV Power Supply",
    description: "Without a proper supply, your CCTV might as well be dead. Pass all your worries and hassles on the able shoulders of our CCTV service in Meerut and showcase exemplary customer service to you at jaw-dr",
    image: assets.cctv_power_box
  },
  {
    title: "Wi-Fi Cube Camera",
    description: "Be it any brand or make of such cameras, our CCTV Repair services in Ghaziabad offer the best solutions and genuine spares to keep your premises secure and under vigil at all times. Customer satisfact",
    image: assets.wifi_cube
  },
  {
    title: "Home Security Camera System",
    description: "From purchase, installation, uninstallation to all kinds of CCTV repair services in Moradabad, we stand a class apart from the crowd. Our experts guide you and provide services, going out of the way.",
    image: assets.home_security
  },
  {
    title: "Business Security Camera",
    description: "Protect your business from all kinds of threats by keeping it under your constant vigil. We keep your eye, the business security camera running at its best at all times. Remain confident with us takin",
    image: assets.bussiness_security
  },
  {
    title: "Surveillance Security Camera",
    description: "Imaging and hardware issues are the major problems with this type of camera. We have specialized technicians who constantly update their knowledge to resolve all major and minor issues that you might",
    image: assets.surviilance_sercurity
  }
];
const CctvRepair = () => {
  return (
    <>
      <ServiceBanner title="cctv repair service"/>
      <AcSummary />
      {/* <ACServiceGrid /> */}
      <ServiceGrid items={services}/>
      <ACServicesPage items={faqs} />
    </>
  )
}

export default CctvRepair
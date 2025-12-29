import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import {AcRepair} from "./pages/trendingServicesPages/AcRepair";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import CctvRepair from "./pages/trendingServicesPages/CctvRepair";
import { PackersMovers } from "./pages/trendingServicesPages/PackersMovers";
import { SofaRepair } from "./pages/trendingServicesPages/SofaRepair";
import { RefrigeratorRepair } from "./pages/trendingServicesPages/RefrigeratorRepair";
import { PlumberRepair } from "./pages/trendingServicesPages/PlumberRepair";
import { WashingMachineRepair } from "./pages/trendingServicesPages/WashingMachineRepair";
import { GeyserRepair } from "./pages/trendingServicesPages/GeyserRepair";
import { ComputerNetworking } from "./pages/trendingServicesPages/ComputerNetworking";
import { ChimneyRepair } from "./pages/trendingServicesPages/ChimneyRepair";
import { Microwave_Oven } from "./pages/trendingServicesPages/Microwave_Oven";
import { HouseCleaning } from "./pages/trendingServicesPages/HouseCleaning";
import FeedbackForm from "./pages/FeedbackForm";





function App() {
  return (
   <>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/feedback-form" element={<FeedbackForm/>} />
        <Route path="/services/ac-repair" element={<AcRepair />} />
        <Route path="/services/cctv-repair" element={<CctvRepair />}/>
        <Route path="/services/packers-movers" element={<PackersMovers />} />
        <Route path="/services/sofa-repair" element={<SofaRepair />} />
        <Route path="/services/refrigerator-repair" element={<RefrigeratorRepair />} />
        <Route path="/services/plumber-repair" element={<PlumberRepair />} />
        <Route path="/services/washing-machine-repair" element={<WashingMachineRepair />} />
        <Route path="/services/geyser-repair" element={<GeyserRepair />} />
        <Route path="services/computer-networking" element={<ComputerNetworking />} />
        <Route path="services/chimney-repair" element={<ChimneyRepair />} />
        <Route path="/services/microwave-oven" element={<Microwave_Oven />} />
        <Route path="/services/house-cleaning" element={<HouseCleaning />} />
      </Routes>
      <Footer />
   </>
      
  ) 
}

export default App;

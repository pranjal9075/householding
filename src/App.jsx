import React, { useEffect } from "react"; 
import { Routes, Route, useLocation } from "react-router-dom"; 

// Existing Imports
import Home from "./pages/Home";
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

import { ChairRepair } from "./pages/HandymanServices/ChairRepair";
import { FurnitureInstalation } from "./pages/HandymanServices/FurnitureInstalation";
import { CarpentryRepair } from "./pages/HandymanServices/CarpentryRepair";
import { ElectricalRepair } from "./pages/HandymanServices/ElecricalRepair";
import { WardrobeRepair } from "./pages/HandymanServices/WardrobeRepair";
import { FurnitureRepair } from "./pages/HandymanServices/FurnitureRepair";
import Package from "./pages/Package";

// --- NEW IMPORT: Admin Dashboard ---
import AdminDashboard from "./pages/AdminDashboard";
import ServicePartners from "./component/Admin/ServicePartners";
import Customers from "./pages/Customers";
import Settings from "./component/Admin/Settings"; 
import Reports from "./component/Admin/Reports";



// --- AUTH CONTEXT ---
import { AuthProvider } from "./context/AuthContext";
import MyProfile from "./component/userdashboard/MyProfile";
import MyBookings from "./component/userdashboard/MyBookings";
import MyAddresses from "./component/userdashboard/MyAddresses";
import MyPayments from "./component/userdashboard/MyPayments";
import Support from "./component/userdashboard/Support";
import TrackService from "./component/userdashboard/TrackService";
import Packages from "./component/userdashboard/Packages";
import Notifications from "./component/userdashboard/Notifications";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import TestBookingFlow from "./pages/TestBookingFlow";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import ServiceDetails from "./component/userdashboard/ServiceDetails";


function App() {
  const location = useLocation(); 

  // Define valid routes
  const validRoutes = [
    "/", "/package", "/services/feedback-form", "/services/ac-repair", "/services/cctv-repair",
    "/services/packers-movers", "/services/sofa-repair", "/services/refrigerator-repair",
    "/services/plumber-repair", "/services/washing-machine-repair", "/services/geyser-repair",
    "/services/computer-networking", "/services/chimney-repair", "/services/microwave-oven",
    "/services/house-cleaning", "/services/chair-repair", "/services/furniture-installation",
    "/services/carpentry-repair", "/services/electrical-repair", "/services/wardrobe-repair",
    "/services/furniture-repair", "/admin", "/user-dashboard", "/my-profile", "/my-bookings",
    "/my-addresses", "/my-payments", "/support", "/track-service", "/service-details", "/packages", "/notifications",
    "/admin/service-partners", "/admin/customers", "/admin/reports", "/admin/settings", "/technician-dashboard", "/test-booking"
  ];

  // Check if current route is valid
  const isValidRoute = validRoutes.includes(location.pathname);
  
  // Check if current route is admin or user dashboard to hide Header/Footer
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isUserPages = ["/user-dashboard", "/my-profile", "/my-bookings", "/my-addresses", "/my-payments", "/support", "/service-details", "/track-service", "/packages", "/notifications", "/technician-dashboard"].includes(location.pathname);
  
  // Show header/footer only on valid routes and not on admin/user/technician pages
  const showHeaderFooter = isValidRoute && !isAdminRoute && !isUserPages;

  // 1. Force browser to handle scroll manually
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Scroll to Top Logic
  useEffect(() => {
    const scrollTask = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(scrollTask);
  }, [location.pathname]);

  return (
    <AuthProvider>
      {/* Header hidden on Admin pages, User Pages, and 404 pages */}
      {showHeaderFooter && <Header />}
      
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/my-addresses" element={<MyAddresses />} />
        <Route path="/my-payments" element={<MyPayments />} />
        <Route path="/support" element={<Support />} />
        <Route path="/track-service" element={<TrackService />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin/service-partners" element={<ServicePartners />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
        <Route path="/test-booking" element={<TestBookingFlow />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
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
        <Route path="/services/chair-repair" element={<ChairRepair />} />
        <Route path="/services/furniture-installation" element={<FurnitureInstalation />} />
        <Route path="/services/carpentry-repair" element={<CarpentryRepair />} />
        <Route path="/services/electrical-repair" element={<ElectricalRepair />} />
        <Route path="/services/wardrobe-repair" element={<WardrobeRepair />} />
        <Route path="/services/furniture-repair" element={<FurnitureRepair />} />
        
        {/* 404 Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer hidden on Admin pages, User Pages, and 404 pages */}
      {showHeaderFooter && <Footer />}
    </AuthProvider>
  );
}

export default App;
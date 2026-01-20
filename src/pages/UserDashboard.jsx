import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DownloadModal from '../component/userdashboard/DownloadModal';

import { 
  LayoutDashboard, 
  Wrench, 
  History, 
  User, 
  LifeBuoy, 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  Car,
  Clock,
  Phone,
  MapPin,
  Plus,
  Eye,
  Star,
  Download,
  ChevronDown,
  LogOut,
  Settings,
  Home,
  Building2,
  Edit3,
  Trash2,
  Zap,
  Hammer,
  Snowflake,
  Brush,
  Paintbrush,
  Bell,
  AlertCircle,
  Repeat,
  Shield
} from 'lucide-react';
import { assets } from '../assets/assets';
import BillNotification from '../component/userdashboard/BillNotification';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const dropdownRef = useRef(null);
  
  // Load user profile image
  useEffect(() => {
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      setUserImage(savedImage);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleEditAddress = (addr) => {
    setEditingAddress(addr.id);
    setEditForm({ type: addr.type, address: addr.address });
  };

  const handleSaveAddress = (id) => {
    setAddresses(addresses.map(addr => 
      addr.id === id ? { ...addr, type: editForm.type, address: editForm.address } : addr
    ));
    setEditingAddress(null);
    setEditForm({ type: '', address: '' });
  };

  const handleDeleteAddress = (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const [activeService, setActiveService] = useState({
    id: 'RB001',
    name: 'Electrician',
    technician: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    status: 'On the way',
    eta: '15 mins',
    technicianPhoto: null,
    otp: '1234'
  });

  const services = [
    { name: 'Electrician', icon: <Zap className="text-yellow-500" size={24} />, path: '/services/electrical-repair' },
    { name: 'Plumber', icon: <Wrench className="text-blue-500" size={24} />, path: '/services/plumber-repair' },
    { name: 'AC Repair', icon: <Snowflake className="text-cyan-500" size={24} />, path: '/services/ac-repair' },
    { name: 'Cleaning', icon: <Brush className="text-green-500" size={24} />, path: '/services/house-cleaning' },
    { name: 'Painter', icon: <Paintbrush className="text-purple-500" size={24} />, path: '/services/painting' },
    { name: 'Carpenter', icon: <Hammer className="text-orange-500" size={24} />, path: '/services/carpentry-repair' }
  ];

  const serviceHistory = [
    { type: 'Plumber', date: 'Dec 15, 2024', amount: '₹599', status: 'Completed' },
    { type: 'Electrician', date: 'Dec 10, 2024', amount: '₹799', status: 'Completed' },
    { type: 'Cleaning', date: 'Dec 5, 2024', amount: '₹1299', status: 'Cancelled' }
  ];

  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', address: '123, Anand Vihar, Delhi - 110092', isDefault: true },
    { id: 2, type: 'Office', address: '456, Nehru Place, Delhi - 110019', isDefault: false }
  ]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [editForm, setEditForm] = useState({ type: '', address: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex justify-between items-center px-6 py-4">
          <img src={assets.logo_rb} alt="REPAIR BAZAR" className="h-9 w-auto md:h-11" />
          
          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowProfileMenu(!showProfileMenu);
              }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-200 flex items-center justify-center">
                {userImage ? (
                  <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={16} className="text-blue-600" />
                )}
              </div>
              <span className="font-medium">{user?.name || 'User'}</span>
              <ChevronDown size={16} />
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <div className="py-2">
                  <button 
                    onClick={() => { navigate('/'); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Home size={16} /> Home
                  </button>
                  <button 
                    onClick={() => { navigate('/my-profile'); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <User size={16} /> My Profile
                  </button>
                  <button 
                    onClick={() => { navigate('/my-bookings'); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <History size={16} /> My Bookings
                  </button>
                  <button 
                    onClick={() => { navigate('/my-addresses'); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <MapPin size={16} /> Addresses
                  </button>
                  <button 
                    onClick={() => { navigate('/my-payments'); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <CreditCard size={16} /> Payments
                  </button>
                  <button 
                    onClick={() => { navigate('/support'); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <LifeBuoy size={16} /> Support
                  </button>
                  <hr className="my-2" />
                  <button 
                    onClick={() => { handleLogout(); setShowProfileMenu(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-red-600"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user?.name || 'User'}! 👋</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your services</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl font-medium transition flex items-center justify-center gap-3 text-lg"
          >
            <Plus size={24} /> Book New Service
          </button>
          <button 
            onClick={() => navigate('/my-bookings')}
            className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl font-medium transition flex items-center justify-center gap-3 text-lg"
          >
            <Repeat size={24} /> Repeat Last Service
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <SummaryCard 
            icon={<CheckCircle className="text-green-500" />} 
            label="Total Bookings" 
            value="15"
            bgColor="bg-green-50"
          />
          <SummaryCard 
            icon={<Star className="text-yellow-500" />} 
            label="Average Rating" 
            value="4.8"
            bgColor="bg-yellow-50"
          />
        </div>

        {/* Current/Ongoing Service Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Current Service</h2>
          </div>

          {activeService ? (
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {activeService.technicianPhoto ? (
                      <img src={activeService.technicianPhoto} alt="Technician" className="w-full h-full object-cover" />
                    ) : (
                      <User size={24} className="text-gray-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{activeService.name}</h3>
                    <p className="text-gray-600">Booking ID: {activeService.id}</p>
                    <p className="font-semibold text-gray-800">{activeService.technician}</p>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeService.status === 'On the way' ? 'bg-blue-100 text-blue-700' :
                  activeService.status === 'Working' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {activeService.status}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-500" />
                  <span className="text-gray-700">{activeService.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-gray-700">ETA: {activeService.eta}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-gray-500" />
                  <span className="text-gray-700">OTP: {activeService.otp}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => navigate('/track-service')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"
                >
                  <MapPin size={16} /> Track Service
                </button>
                <button 
                  onClick={() => window.open(`tel:${activeService.phone}`)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"
                >
                  <Phone size={16} /> Call
                </button>
                <button 
                  onClick={() => window.open(`https://wa.me/${activeService.phone.replace(/[^0-9]/g, '')}?text=Hi, I need help with my service booking ${activeService.id}`)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  Chat
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
              <div className="text-gray-400 mb-4">
                <Wrench size={48} className="mx-auto" />
              </div>
              <p className="text-gray-600 mb-4">No active service. Book a service now.</p>
              <button 
                onClick={() => navigate('/')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition "
              >
                Book Service Now
              </button>
            </div>
          )}
        </div>

        {/* Popular Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => navigate(service.path)}
                className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition text-center group"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform">{service.icon}</div>
                <p className="font-medium text-gray-800">{service.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Recent Bookings</h3>
                <button 
                  onClick={() => navigate('/my-bookings')}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {serviceHistory.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Wrench size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{service.type}</p>
                        <p className="text-sm text-gray-600">{service.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">{service.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        service.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => navigate('/service-details', { state: { booking: service } })}
                        className="text-blue-500 hover:text-blue-600 p-1 rounded hover:bg-blue-50 transition-colors"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => navigate('/')}
                        className="text-green-500 hover:text-green-600 p-1 rounded hover:bg-green-50 transition-colors"
                        title="Rebook"
                      >
                        <Repeat size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
                <Bell size={20} className="text-gray-500" />
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm font-medium text-yellow-800">Service Reminder</p>
                  <p className="text-xs text-yellow-600">AC maintenance due in 2 days</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm font-medium text-green-800">Payment Confirmed</p>
                  <p className="text-xs text-green-600">₹799 for Electrician service</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => navigate('/my-addresses')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition"
                >
                  <MapPin size={20} className="text-gray-500" />
                  <span>Manage Addresses</span>
                </button>
                <button 
                  onClick={() => navigate('/my-payments')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition"
                >
                  <CreditCard size={20} className="text-gray-500" />
                  <span>Payment History</span>
                </button>
                <button 
                  onClick={() => navigate('/support')}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition"
                >
                  <LifeBuoy size={20} className="text-gray-500" />
                  <span>Help & Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <DownloadModal 
        isOpen={showDownloadModal} 
        onClose={() => setShowDownloadModal(false)} 
      />
      
      <BillNotification />
    </div>
  );
};

// Helper Component for Summary Cards
const SummaryCard = ({ icon, label, value, bgColor }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${bgColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-lg font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

export default UserDashboard;
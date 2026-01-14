import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Settings, User, LogOut, LayoutDashboard, MapPin, CreditCard, LifeBuoy } from 'lucide-react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from '../../assets/assets'; 
import Search from './Search';
import Register from '../Register';
import Login from '../Login';
import { useAuth } from '../../context/AuthContext';



const serviceCategories = [
    {   
        title: "Appliances Repair",
        
    },
    {
        title: "IT Repair Service",
        
    },
    {
        title: "Cleaning-Pest Control",
       
    },
    {
        title: "Beauty-Spa Service",
       
    }
];

const ServiceColumn = ({ category, onCategoryClick }) => {
    const getSectionId = (title) => {
        switch(title) {
            case "Appliances Repair":
                return "appliances-repair";
            case "IT Repair Service":
                return "it-repair-service";
            case "Cleaning-Pest Control":
                return "cleaning-pest-control";
            default:
                return null;
        }
    };

    const sectionId = getSectionId(category.title);
     // ✅ SWITCHING LOGIC (Implement kiya gaya hai)
  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setTimeout(() => setIsRegisterOpen(true), 100);
  };

    return (
        <div className="flex flex-col">
            <h3 
                className={`text-sm font-bold text-gray-800 mb-2 border-b border-gray-100 pb-1 uppercase tracking-wide ${
                    sectionId ? 'cursor-pointer hover:text-blue-600 transition-colors' : ''
                }`}
                onClick={() => sectionId && onCategoryClick(sectionId)}
            >
                {category.title}
            </h3>
            <ul className="space-y-1">
                {category.items?.map((item, index) => (
                    <li key={index}>
                        <Link to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-xs text-gray-600 hover:text-blue-600 transition block py-0.5">
                            {item}
                        </Link>
                    </li>
                )) || []}
            </ul>
            {/* {category.subCategories?.map((sub, subIndex) => (
                <div key={subIndex} className="mt-4">
                    <h3 className="text-sm font-bold text-orange-600 mb-2 border-b border-gray-100 pb-1 uppercase tracking-wide">
                        {sub.title}
                    </h3>
                    <ul className="space-y-1">
                        {sub.items?.map((item, index) => (
                            <li key={index}>
                                <Link to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-xs text-gray-600 hover:text-blue-600 transition block py-0.5">
                                    {item}
                                </Link>
                            </li>
                        )) || []}
                    </ul>
                </div>
            )) || []} */}
        </div>
    );
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServiceHovered, setIsServiceHovered] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const { isLoggedIn, user, logout } = useAuth();
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const [userImage, setUserImage] = useState(null);

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        // Check if we're on the home page
        if (window.location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // Navigate to home page first, then scroll
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
        setIsServiceHovered(false); // Close dropdown after clicking
    };

    // Load user profile image
    useEffect(() => {
        const savedImage = localStorage.getItem('userProfileImage');
        if (savedImage) {
            setUserImage(savedImage);
        }
    }, [isLoggedIn]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoginOpen(false);
        navigate('/user-dashboard');
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleUserClick = () => {
        if (isLoggedIn) {
            navigate('/user-dashboard');
        }
    };

    const navLinkClass = "text-gray-600 hover:text-blue-600 text-sm font-medium transition py-2";

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img src={assets.logo_rb} alt="REPAIR BAZAR" className="h-9 w-auto md:h-11" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-6 items-center ">
                        <Link to="/" className={navLinkClass}>Home</Link>
                        <Link to="/package" className={navLinkClass}>Package</Link>

                        <div className="relative h-16 flex items-center" onMouseEnter={() => setIsServiceHovered(true)} onMouseLeave={() => setIsServiceHovered(false)}>
                            <button className={`flex items-center ${navLinkClass} text-blue-600 outline-none`}>
                                <Settings className="w-4 h-4 mr-1" />
                                Services
                                <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isServiceHovered ? 'rotate-180' : ''}`} />
                            </button>

                            {isServiceHovered && (
                                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[300px] bg-white shadow-2xl rounded-b-xl border border-t-0 p-8 z-[60] flex flex-col">
                                    {serviceCategories.map((category, index) => (
                                        <ServiceColumn key={index} category={category} onCategoryClick={scrollToSection} />
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink to="/services/feedback-form" className={({isActive}) => isActive ? "text-blue-600 text-sm font-bold" : navLinkClass}>Feedback Form</NavLink>
                        
                        <div>
                            <Search />
                        </div>

                        <div className="flex items-center space-x-3 ml-4">
                            {!isLoggedIn ? (
                                <>
                                    <button onClick={() => setIsRegisterOpen(true)} className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-500 shadow-md transition">
                                        Register
                                    </button>
                                    <button onClick={() => setIsLoginOpen(true)} className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-500 shadow-md transition">
                                        Log In
                                    </button>
                                </>
                            ) : (
                                <div className="relative" ref={dropdownRef}>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowUserDropdown(!showUserDropdown);
                                        }}
                                        className="flex items-center space-x-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
                                    >
                                        <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-200 flex items-center justify-center">
                                            {userImage ? (
                                                <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                                            ) : (
                                                <User size={16} className="text-blue-600" />
                                            )}
                                        </div>
                                        <ChevronDown size={16} className="text-blue-600" />
                                    </button>
                                    
                                    {showUserDropdown && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                                            <div className="py-2">
                                                <button 
                                                    onClick={() => { navigate('/user-dashboard'); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                                                >
                                                    <LayoutDashboard size={16} /> Dashboard
                                                </button>
                                                <button 
                                                    onClick={() => { navigate('/my-profile'); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                                                >
                                                    <User size={16} /> My Profile
                                                </button>
                                                <button 
                                                    onClick={() => { navigate('/my-bookings'); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                                                >
                                                    <Settings size={16} /> My Bookings
                                                </button>
                                                <button 
                                                    onClick={() => { navigate('/my-addresses'); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                                                >
                                                    <MapPin size={16} /> Addresses
                                                </button>
                                                <button 
                                                    onClick={() => { navigate('/my-payments'); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                                                >
                                                    <CreditCard size={16} /> Payments
                                                </button>
                                                <button 
                                                    onClick={() => { navigate('/support'); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                                                >
                                                    <LifeBuoy size={16} /> Support
                                                </button>
                                                <hr className="my-2" />
                                                <button 
                                                    onClick={() => { handleLogout(); setShowUserDropdown(false); }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-red-600"
                                                >
                                                    <LogOut size={16} /> Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </nav>

                    <div className="flex md:hidden items-center">
                        <div className=" sm:w-56"><Search /></div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 rounded-full transition">
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="p-5 flex flex-col space-y-4">
                    {/* Added the missing links for mobile */}
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Home</Link>
                    <Link to="/package" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Package</Link>
                    
                    {/* Simple Services Link for Mobile */}
                    <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Services</Link>
                    
                    <NavLink 
                        to="/services/feedback-form" 
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "text-blue-600 font-bold" : "text-gray-700 font-medium"}
                    >
                        Feedback Form
                    </NavLink>

                    <hr className="border-gray-100" />

                    {!isLoggedIn ? (
                        <>
                            <button 
                                onClick={() => { setIsRegisterOpen(true); setIsMenuOpen(false); }} 
                                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold"
                            >
                                Register 
                            </button>
                            <button 
                                onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }} 
                                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold"
                            >
                                Login 
                            </button>
                        </>
                    ) : (
                        <div className="space-y-3">
                            <button 
                                onClick={() => { handleUserClick(); setIsMenuOpen(false); }}
                                className="flex items-center space-x-2 p-3 bg-blue-100 rounded-xl w-full hover:bg-blue-200 transition"
                            >
                                <User size={20} className="text-blue-600" />
                                <span className="font-medium text-blue-700">{user?.name || 'User'}</span>
                            </button>
                            <button 
                                onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                                className="w-full py-3 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2"
                            >
                                <LogOut size={20} />
                                <span>Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Register Modal */}
            <Register isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
            
            {/* Login Modal */}
            <Login 
                isOpen={isLoginOpen} 
                onClose={() => setIsLoginOpen(false)} 
                onLoginSuccess={handleLoginSuccess}
            />
        </header>
    );
};

export default Header;
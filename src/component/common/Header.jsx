import React from 'react';
import { Menu, X, ChevronDown, User, LogIn, Settings} from 'lucide-react';
import { Link, NavLink } from "react-router-dom";
import { assets } from '../../assets/assets'; 
import Search from '../Search';

// --- Data Structure for the Dropdown (UNCHANGED) ---
const serviceCategories = [
    {
        title: "Appliances Repair",
        items: ["AC Repair", "CCTV Repair", "Chimney", "Deep fridge", "Dishwasher", "Refrigerator", "Ice Maker", "Inverter", "Microwave", "Mixture Grinder", "LED TV", "Oven Heater", "RO Water Purifier", "Vaccum Cleaner", "Washing Machine", "Clothes Iron", "Ceiling Fan", "Geyser Services"]
    },
    {
        title: "IT Repair Service",
        items: ["Mobile Repair", "Laptop/Desktop Repair", "Software Repair", "Hardware Repair", "Computer", "Networkig"],
        subCategories: [
            { title: "HANDYMAN SERVICES", items: ["Sofa Repair", "Furniture Repair", "Wardrobe", "Electricians", "Plumber Services", "Carpentry repair", "Furniture Installation", "Chair Repair Service"] },
            { title: "LAUNDRY SERVICES", items: ["Laundry By Kg"] }
        ]
    },
    {
        title: "Cleaning-Pest Control",
        items: ["Pest Control", "Car Wash", "Kitchen Cleaning", "Carpet Cleaning", "Home Cleaning", "Sofa Cleaning", "Bathroom Cleaning", "Watertank Cleaning", "Move In / Move Out"],
        subCategories: [
            { title: "Contractor Services", items: ["Steel Railing", "Interior Designer", "Carpet Flooring", "Modular Kitchen", "False Ceiling", "Packers and Movers", "House construction", "Painting Contractor"] }
        ]
    },
    {
        title: "Beauty-Spa Service",
        items: ["Beauty Care", "Female Massage", "Makeup", "Pre Bridal Packages", "Grooming | Skin Care", "Hair Care & Styling", "Spa", "Shaving | Beard Care"],
        subCategories: [
            { title: "Vehicle Service", items: ["Four Wheeler", "Two Wheeler", "Three Wheeler", "Bike Service", "Electric Rickshaw", "Scooter", "Electric Scooter"] }
        ]
    }
];

// --- Sub-Component for Rendering Columns (ONLY LOGIC CHANGE) ---
const ServiceColumn = ({ category }) => (
    <div>
        <h3 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-100 pb-1">
            {category.title}
        </h3>

        <ul className="space-y-1">
            {category.items.map((item, index) => (
                <li key={index}>
                    <Link
                        to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-xs text-gray-600 hover:text-blue-600 transition"
                    >
                        {item}
                    </Link>
                </li>
            ))}
        </ul>

        {/* Sub-Categories (SAME BEHAVIOR) */}
        {category.subCategories && category.subCategories.map((sub, subIndex) => (
            <div key={subIndex} className="mt-4">
                <h3 className="text-sm font-bold text-orange-600 mb-2 border-b border-gray-100 pb-1">
                    {sub.title}
                </h3>
                <ul className="space-y-1">
                    {sub.items.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-xs text-gray-600 hover:text-blue-600 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isServiceHovered, setIsServiceHovered] = React.useState(false);

    const navLinkClass =
        "text-gray-600 hover:text-blue-600 text-sm font-medium transition duration-150 ease-in-out py-2";

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img src={assets.logo_rb} alt="REPAIR BAZAR Logo" className="h-10 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 items-center h-full">

                        <a href="#" className={navLinkClass}>Package</a>

                        {/* SERVICES DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServiceHovered(true)}
                            onMouseLeave={() => setIsServiceHovered(false)}
                        >
                            <a href="#" className={`flex items-center ${navLinkClass} text-blue-600`}>
                                <Settings className="w-4 h-4 mr-1" />
                                Services
                                <ChevronDown className="w-3 h-3 ml-1" />
                            </a>

                            {isServiceHovered && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[960px] bg-white shadow-xl rounded-lg border p-6 z-20 max-h-[80vh] overflow-y-auto">
                                    <div className="grid grid-cols-4 gap-8">
                                        {serviceCategories.map((category, index) => (
                                            <ServiceColumn key={index} category={category} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink to="/services/feedback-form">Feedback Form</NavLink>
                        <a href="#" className={navLinkClass}>Enquiry Now</a>
                        <Search />

                        <button className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-sm">
                            <User className="w-4 h-4 mr-1" /> Register
                        </button>

                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                            <LogIn className="w-4 h-4 mr-1" /> Log In
                        </button>

                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;

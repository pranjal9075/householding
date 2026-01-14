
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

// Combine all services
const allServices = [
    // Cleaning Services
    { id: 1, name: 'MOVE IN AND MOVE OUT', image: assets.chair_repair_service, category: "Cleaning" },
    { id: 2, name: 'WATER TANK CLEANING', image: assets.furniture_installation, category: "Cleaning" },
    { id: 3, name: 'BATHROOM CLEANING', image: assets.carpentary, category: "Cleaning" },
    { id: 4, name: 'SOFA CLEANING', image: assets.plumber_services, category: "Cleaning" },
    { id: 5, name: 'HOUSE CLEANING', image: assets.electrician_service, category: "Cleaning" },
    { id: 6, name: 'CARPET CLEANING', image: assets.wardrobe_service, category: "Cleaning" },
    { id: 7, name: 'KITCHEN CLEANING', image: assets.furniture_service, category: "Cleaning" },
    { id: 8, name: 'CAR CLEANING', image: assets.sofa_service, category: "Cleaning" },
    { id: 9, name: "PEST CONTROL", image: assets.PestContro, category: "Cleaning" },

    // Handyman Services
    { id: 10, name: 'CHAIR REPAIR', image: assets.chair_repair_service, category: "Handyman" },
    { id: 11, name: 'FURNITURE INSTALLATION', image: assets.furniture_installation, category: "Handyman" },
    { id: 12, name: 'CARPENTRY REPAIR', image: assets.carpentary, category: "Handyman" },
    { id: 13, name: 'PLUMBER REPAIR', image: assets.plumber_services, category: "Handyman" },
    { id: 14, name: 'ELECTRICAL REPAIR', image: assets.electrician_service, category: "Handyman" },
    { id: 15, name: 'WARDROBE REPAIR', image: assets.wardrobe_service, category: "Handyman" },
    { id: 16, name: 'FURNITURE REPAIR', image: assets.furniture_service, category: "Handyman" },
    { id: 17, name: 'SOFA REPAIR', image: assets.sofa_service, category: "Handyman" },

    // Laundry Services
    { id: 18, name: 'LAUNDRY BY', image: assets.laundryby, category: "Laundry" },
    { id: 19, name: 'DRY CLEANING', image: assets.drycleaning, category: "Laundry" },
    { id: 20, name: 'STEAM', image: assets.stream, category: "Laundry" },
    { id: 21, name: 'SHOE', image: assets.shoecleaning, category: "Laundry" },

    // Popular Services
    { id: 22, name: 'WEDDING', image: assets.wedding_planners, category: "Popular" },
    { id: 23, name: 'DECORATION', image: assets.decoration, category: "Popular" },
    { id: 24, name: 'MAID', image: assets.maid_services, category: "Popular" },
    { id: 25, name: 'SECURITY', image: assets.security_services, category: "Popular" },
    { id: 26, name: 'MEHNDI DESIGNS', image: assets.mehndiDesigns_services, category: "Popular" },
    { id: 27, name: 'TOUR AND TRAVEL', image: assets.tour_travel_services, category: "Popular" },

    // IT Repair Services
    { id: 28, name: "MOBILE REPAIR", image: assets.PhoneRepairImage, category: "IT Repair" },
    { id: 29, name: "LAPTOP DESKTOP REPAIR", image: assets.desktopImage, category: "IT Repair" },
    { id: 30, name: "SOFTWARE REPAIR", image: assets.softwareImage, category: "IT Repair" },
    { id: 31, name: "HARDWARE REPAIR", image: assets.hardwareImage, category: "IT Repair" },
    { id: 32, name: "COMPUTER NETWORKING", image: assets.networkingImages, category: "IT Repair" },

    // Two wheeler
    { id: 33, name: 'TWO WHEELER REPAIR', image: assets.two_wheeler },
    { id: 34, name: 'THREE WHEELER REPAIR', image: assets.three_wheeler },
    { id: 35, name: 'BIKE REPAIR', image: assets.bike },
    { id: 36, name: 'ELECTRIC RICKSHAW REPAIR', image: assets.electric_rickshaw },
    { id: 37, name: 'SCOOTER REPAIR', image: assets.scooter },
    { id: 38, name: 'ELECTRIC SCOOTER REPAIR', image: assets.electric_scooter },
    { id: 39, name: 'MOPED BIKE REPAIR', image: assets.mopad_bike },
    { id: 40, name: 'LADIES SCOOTER REPAIR', image: assets.scooters_ladies },
    { id: 41, name: 'BICYCLE', image: assets.bicycle },

    // Trending
    { id: 42, name: 'AC Repair', image: assets.ac_repair, category: "Appliances", path: "/services/ac-repair" },
    { id: 43, name: 'Packers And Movers', image: assets.packers_movers, category: "Home Services", path: "/services/packers-movers" },
    { id: 44, name: 'Sofa Repair', image: assets.sofa, category: "Furniture", path: "/services/sofa-repair" },
    { id: 45, name: 'Refrigerator Repair', image: assets.fridge, category: "Appliances", path: "/services/refrigerator-repair" },
    { id: 46, name: 'Plumber Repair', image: assets.plumber, category: "Handyman", path: "/services/plumber-repair" },
    { id: 47, name: 'Washing Machine Repair', image: assets.washingmachine, category: "Appliances", path: "/services/washing-machine-repair" },
    { id: 48, name: 'Geyser Repair', image: assets.geyser, category: "Appliances", path: "/services/geyser-repair" },
    { id: 49, name: 'CCTV Repair', image: assets.cctv_repair, category: "Electronics", path: "/services/cctv-repair" },
    { id: 50, name: 'Computer Networking', image: assets.computer_repair, category: "IT", path: "/services/computer-networking" },
    { id: 51, name: 'Chimney Repair', image: assets.chimney_repair, category: "Appliances", path: "/services/chimney-repair" },
    { id: 52, name: 'Microwave Oven Repair', image: assets.oven, category: "Appliances", path: "/services/microwave-oven" },
    { id: 53, name: 'House Cleaning', image: assets.house_cleaning, category: "Cleaning", path: "/services/house-cleaning" }
];

// Service card component
const ServiceCard = ({ service, onClick }) => (
    <div
        onClick={() => service.path && onClick(service.path)}
        className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-xl transition flex flex-col items-center"
    >
        <div className="w-full h-36 mb-4">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover rounded-lg" />
        </div>
        <h3 className="font-semibold text-center text-lg mb-2">{service.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{service.category}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded-md text-xs uppercase">
            Book Now
        </button>
    </div>
);

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const filteredServices = allServices.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            {/* Search Icon */}
            <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-orange-500 transition"
            >
                <FiSearch size={20} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-start pt-24 bg-black/30 backdrop-blur-sm">
                    {/* Click outside to close */}
                    <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>

                    {/* Search Input + Results */}
                    <div className="relative z-10 w-full max-w-5xl px-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for services..."
                            className="w-full p-4 rounded-2xl shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            autoFocus
                        />

                        {query.trim() !== "" && (
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {filteredServices.length > 0 ? (
                                    filteredServices.map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            service={service}
                                            onClick={(path) => {
                                                navigate(path);
                                                setIsOpen(false);
                                            }}
                                        />
                                    ))
                                ) : (
                                    <p className="text-gray-300 col-span-full text-center">
                                        No service found
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;

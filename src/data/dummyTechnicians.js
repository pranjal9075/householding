export const dummyTechnicians = [
    {
        id: 1,
        name: "Rajesh Kumar",
        specialization: "AC Repair Specialist",
        rating: 4.8,
        reviews: 156,
        location: "Delhi NCR",
        phone: "+91 98765 43210",
        price: 500,
        avatar: "/api/placeholder/60/60",
        experience: "8 years",
        availability: "Available"
    },
    {
        id: 2,
        name: "Amit Singh",
        specialization: "Plumber Expert",
        rating: 4.6,
        reviews: 89,
        location: "Mumbai",
        phone: "+91 87654 32109",
        price: 400,
        avatar: "/api/placeholder/60/60",
        experience: "5 years",
        availability: "Available"
    },
    {
        id: 3,
        name: "Priya Sharma",
        specialization: "House Cleaning Pro",
        rating: 4.9,
        reviews: 203,
        location: "Bangalore",
        phone: "+91 76543 21098",
        price: 300,
        avatar: "/api/placeholder/60/60",
        experience: "6 years",
        availability: "Busy"
    },
    {
        id: 4,
        name: "Vikram Patel",
        specialization: "Electrician",
        rating: 4.7,
        reviews: 134,
        location: "Pune",
        phone: "+91 65432 10987",
        price: 450,
        avatar: "/api/placeholder/60/60",
        experience: "10 years",
        availability: "Available"
    },
    {
        id: 5,
        name: "Sunita Devi",
        specialization: "Appliance Repair",
        rating: 4.5,
        reviews: 67,
        location: "Chennai",
        phone: "+91 54321 09876",
        price: 350,
        avatar: "/api/placeholder/60/60",
        experience: "4 years",
        availability: "Available"
    }
];

export const getAvailableTechnicians = () => {
    return dummyTechnicians.filter(tech => tech.availability === "Available");
};

export const getTechnicianById = (id) => {
    return dummyTechnicians.find(tech => tech.id === parseInt(id));
};

export const getTechniciansByService = (service) => {
    // In a real app, this would filter by actual service specialization
    return dummyTechnicians.slice(0, 3);
};
// Admin-controlled service pricing
// Admin sets: basePrice + commission = finalPrice
// User sees and pays: finalPrice
// Technician receives: basePrice

export const servicesData = [
  {
    id: 1,
    name: 'Plumbing Repair',
    basePrice: 250,
    commission: 50,
    finalPrice: 300,
    category: 'Home Services'
  },
  {
    id: 2,
    name: 'AC Repair',
    basePrice: 450,
    commission: 50,
    finalPrice: 500,
    category: 'Appliances'
  },
  {
    id: 3,
    name: 'Electrical Work',
    basePrice: 200,
    commission: 49,
    finalPrice: 249,
    category: 'Home Services'
  },
  {
    id: 4,
    name: 'Fan Installation',
    basePrice: 150,
    commission: 49,
    finalPrice: 199,
    category: 'Electrical'
  },
  {
    id: 5,
    name: 'Geyser Repair',
    basePrice: 250,
    commission: 49,
    finalPrice: 299,
    category: 'Appliances'
  }
];

// Get service price by name
export const getServicePrice = (serviceName) => {
  if (!serviceName) return 299; // default if no service name
  const service = servicesData.find(s => 
    s.name.toLowerCase().includes(serviceName.toLowerCase())
  );
  return service ? service.finalPrice : 299; // default price
};

// Get service details
export const getServiceDetails = (serviceName) => {
  if (!serviceName) return null;
  return servicesData.find(s => 
    s.name.toLowerCase().includes(serviceName.toLowerCase())
  );
};

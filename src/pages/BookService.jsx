// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
// import BookingForm from '../components/BookingForm';

// const BookService = () => {
//     const { isLoggedIn } = useAuth();
//     const [selectedService, setSelectedService] = useState('');
//     const [showBookingForm, setShowBookingForm] = useState(false);

//     const services = [
//         { id: 1, name: 'AC Repair', price: 500, image: '/api/placeholder/300/200' },
//         { id: 2, name: 'Plumber', price: 300, image: '/api/placeholder/300/200' },
//         { id: 3, name: 'Electrician', price: 400, image: '/api/placeholder/300/200' },
//         { id: 4, name: 'House Cleaning', price: 600, image: '/api/placeholder/300/200' }
//     ];

//     const handleBookService = (serviceName) => {
//         if (!isLoggedIn) {
//             alert('Please login to book services');
//             return;
//         }
//         setSelectedService(serviceName);
//         setShowBookingForm(true);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center mb-12"
//                 >
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">Book a Service</h1>
//                     <p className="text-gray-600 text-lg">Choose from our wide range of professional services</p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {services.map((service, index) => (
//                         <motion.div
//                             key={service.id}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//                         >
//                             <img 
//                                 src={service.image} 
//                                 alt={service.name}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
//                                 <p className="text-gray-600 mb-4">Starting from ₹{service.price}</p>
//                                 <button
//                                     onClick={() => handleBookService(service.name)}
//                                     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                                 >
//                                     Book Now
//                                 </button>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>

//             <BookingForm
//                 isOpen={showBookingForm}
//                 onClose={() => setShowBookingForm(false)}
//                 serviceName={selectedService}
//             />
//         </div>
//     );
// };

// export default BookService;
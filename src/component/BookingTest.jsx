// import React, { useState } from 'react';
// import BookingForm from '../component/booking/BookingForm';

// // Simple service card component for testing
// const SimpleServiceCard = ({ serviceName, description, price, onBookNow }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
//       <div className="mb-4">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{serviceName}</h3>
//         <p className="text-gray-600 text-sm mb-3">{description}</p>
//         <div className="text-2xl font-bold text-blue-600 mb-4">₹{price}</div>
//       </div>
      
//       <div className="flex gap-2">
//         <button
//           onClick={() => onBookNow(serviceName)}
//           className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//         >
//           Book Now
//         </button>
//         <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
//           Enquiry
//         </button>
//       </div>
//     </div>
//   );
// };

// const BookingTest = () => {
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState('');

//   // Sample services data
//   const services = [
//     {
//       name: 'AC Repair',
//       description: 'Professional AC repair and maintenance services',
//       price: '299'
//     },
//     {
//       name: 'Plumber Service', 
//       description: 'Expert plumbing solutions for all your needs',
//       price: '199'
//     },
//     {
//       name: 'Electrician Service',
//       description: 'Safe and reliable electrical repair services',
//       price: '249'
//     },
//     {
//       name: 'CCTV Repair',
//       description: 'Professional CCTV installation and repair',
//       price: '399'
//     }
//   ];

//   const handleBookNow = (serviceName) => {
//     setSelectedService(serviceName);
//     setIsBookingOpen(true);
//   };

//   const handleCloseBooking = () => {
//     setIsBookingOpen(false);
//     setSelectedService('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Reusable Booking Form Demo
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Click "Book Now" on any service card below. The same booking form opens with 
//             dynamic service name. All form fields remain identical across all services.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {services.map((service, index) => (
//             <SimpleServiceCard
//               key={index}
//               serviceName={service.name}
//               description={service.description}
//               price={service.price}
//               onBookNow={handleBookNow}
//             />
//           ))}
//         </div>

//         {/* Implementation Details */}
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Implementation Highlights
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-blue-50 p-6 rounded-lg">
//               <h3 className="text-lg font-semibold text-blue-800 mb-3">
//                 ✅ Single Component
//               </h3>
//               <ul className="text-blue-700 text-sm space-y-1">
//                 <li>• One BookingForm.jsx for all services</li>
//                 <li>• Receives serviceName as prop</li>
//                 <li>• Dynamic form heading</li>
//                 <li>• Reusable across entire app</li>
//               </ul>
//             </div>
            
//             <div className="bg-green-50 p-6 rounded-lg">
//               <h3 className="text-lg font-semibold text-green-800 mb-3">
//                 ✅ Form Features
//               </h3>
//               <ul className="text-green-700 text-sm space-y-1">
//                 <li>• React useState for state management</li>
//                 <li>• Real-time validation</li>
//                 <li>• Mobile number format check</li>
//                 <li>• Date picker with restrictions</li>
//               </ul>
//             </div>
            
//             <div className="bg-purple-50 p-6 rounded-lg">
//               <h3 className="text-lg font-semibold text-purple-800 mb-3">
//                 ✅ Interview Ready
//               </h3>
//               <ul className="text-purple-700 text-sm space-y-1">
//                 <li>• Clean, scalable code</li>
//                 <li>• Component reusability</li>
//                 <li>• Props and state management</li>
//                 <li>• Form validation patterns</li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-8 p-4 bg-gray-100 rounded-lg">
//             <h4 className="font-semibold text-gray-800 mb-2">Form Fields (Same for All Services):</h4>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
//               <span>• Full Name</span>
//               <span>• Mobile Number</span>
//               <span>• Address</span>
//               <span>• Preferred Date</span>
//               <span>• Time Slot</span>
//               <span>• Problem Description</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Booking Form Modal */}
//       <BookingForm
//         isOpen={isBookingOpen}
//         onClose={handleCloseBooking}
//         serviceName={selectedService}
//       />
//     </div>
//   );
// };

// export default BookingTest;
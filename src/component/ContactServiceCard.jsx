// import React from 'react';

// const ContactServiceCard = ({ 
//   serviceName, 
//   description, 
//   image, 
//   price,
//   phoneNumber = "9876543210", // Default phone number
//   onEnquiryClick 
// }) => {

//   // WhatsApp Integration - Opens WhatsApp with pre-filled message
//   const handleWhatsAppClick = () => {
//     const message = `Hi! I'm interested in ${serviceName} service. Please provide more details about pricing and availability.`;
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   // Call Integration - Opens phone dialer
//   const handleCallClick = () => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   // Enquiry Form - Triggers parent callback with service name
//   const handleEnquiryClick = () => {
//     onEnquiryClick(serviceName);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       {/* Service Image */}
//       <div className="h-48 overflow-hidden">
//         <img 
//           src={image} 
//           alt={serviceName}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Service Details */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{serviceName}</h3>
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
//         {/* Price */}
//         <div className="text-2xl font-bold text-blue-600 mb-4">
//           Starting ₹{price}
//         </div>

//         {/* Contact Options */}
//         <div className="space-y-3">
//           {/* WhatsApp Button */}
//           <button
//             onClick={handleWhatsAppClick}
//             className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium"
//           >
//             <span className="text-lg">📱</span>
//             WhatsApp Enquiry
//           </button>

//           {/* Call Button */}
//           <button
//             onClick={handleCallClick}
//             className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
//           >
//             <span className="text-lg">📞</span>
//             Call Now
//           </button>

//           {/* Enquiry Form Button */}
//           <button
//             onClick={handleEnquiryClick}
//             className="w-full flex items-center justify-center gap-2 bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors font-medium"
//           >
//             <span className="text-lg">📝</span>
//             Enquiry Form
//           </button>
//         </div>

//         {/* Contact Info Display */}
//         <div className="mt-4 pt-4 border-t border-gray-200">
//           <p className="text-xs text-gray-500 text-center">
//             📞 {phoneNumber} | Available 24/7
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactServiceCard;
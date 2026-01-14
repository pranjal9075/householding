// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, MapPin, Phone } from 'lucide-react';

// const TechnicianCard = ({ technician, onSelect }) => {
//     return (
//         <motion.div
//             whileHover={{ y: -5 }}
//             className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow"
//         >
//             <div className="flex items-center mb-4">
//                 <img
//                     src={technician.avatar || '/api/placeholder/60/60'}
//                     alt={technician.name}
//                     className="w-16 h-16 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                     <h3 className="text-lg font-semibold">{technician.name}</h3>
//                     <p className="text-gray-600">{technician.specialization}</p>
//                 </div>
//             </div>

//             <div className="space-y-2 mb-4">
//                 <div className="flex items-center">
//                     <Star className="w-4 h-4 text-yellow-500 mr-2" />
//                     <span className="text-sm">{technician.rating} ({technician.reviews} reviews)</span>
//                 </div>
//                 <div className="flex items-center">
//                     <MapPin className="w-4 h-4 text-gray-500 mr-2" />
//                     <span className="text-sm text-gray-600">{technician.location}</span>
//                 </div>
//                 <div className="flex items-center">
//                     <Phone className="w-4 h-4 text-gray-500 mr-2" />
//                     <span className="text-sm text-gray-600">{technician.phone}</span>
//                 </div>
//             </div>

//             <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold text-blue-600">₹{technician.price}/hr</span>
//                 <button
//                     onClick={() => onSelect(technician)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                     Select
//                 </button>
//             </div>
//         </motion.div>
//     );
// };

// export default TechnicianCard;
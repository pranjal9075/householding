// import React, { useState } from 'react';
// import { CheckCircle, XCircle, Eye, Phone, MapPin } from 'lucide-react';

// const TechnicianApproval = () => {
//   const [technicians, setTechnicians] = useState([
//     { id: 1, name: 'Amit Kumar', phone: '+91 98765 43210', category: 'Electrician', area: 'Noida', status: 'PENDING_APPROVAL' },
//     { id: 2, name: 'Rajesh Singh', phone: '+91 98765 43211', category: 'Plumber', area: 'Ghaziabad', status: 'PENDING_APPROVAL' }
//   ]);

//   const [selectedTech, setSelectedTech] = useState(null);
//   const [commission, setCommission] = useState(15);

//   const handleApprove = (id) => {
//     setTechnicians(technicians.map(t => 
//       t.id === id ? { ...t, status: 'ACTIVE', commission } : t
//     ));
//     alert(`Approved with ${commission}% commission`);
//     setSelectedTech(null);
//   };

//   const handleReject = (id) => {
//     setTechnicians(technicians.map(t => 
//       t.id === id ? { ...t, status: 'REJECTED' } : t
//     ));
//     setSelectedTech(null);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Technician Verification</h2>

//       <div className="grid gap-4">
//         {technicians.filter(t => t.status === 'PENDING_APPROVAL').map(tech => (
//           <div key={tech.id} className="bg-white border rounded-lg p-6">
//             <div className="flex justify-between items-start">
//               <div className="flex-1">
//                 <h3 className="font-bold text-lg">{tech.name}</h3>
//                 <p className="text-gray-600 flex items-center gap-2 mt-1">
//                   <Phone size={16} /> {tech.phone}
//                 </p>
//                 <p className="text-gray-600 flex items-center gap-2 mt-1">
//                   <MapPin size={16} /> {tech.area}
//                 </p>
//                 <p className="text-blue-600 font-medium mt-1">{tech.category}</p>
//               </div>

//               <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
//                 PENDING
//               </span>
//             </div>

//             <div className="mt-4">
//               <button 
//                 onClick={() => setSelectedTech(tech)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//               >
//                 <Eye size={16} /> Review
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedTech && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 max-w-md w-full">
//             <h3 className="text-xl font-bold mb-4">Review Technician</h3>
            
//             <div className="space-y-3 mb-6">
//               <p><strong>Name:</strong> {selectedTech.name}</p>
//               <p><strong>Phone:</strong> {selectedTech.phone}</p>
//               <p><strong>Category:</strong> {selectedTech.category}</p>
//               <p><strong>Area:</strong> {selectedTech.area}</p>
//             </div>

//             <div className="mb-6">
//               <label className="block font-medium mb-2">Commission (%)</label>
//               <input 
//                 type="number" 
//                 value={commission}
//                 onChange={(e) => setCommission(e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />
//             </div>

//             <div className="flex gap-3">
//               <button 
//                 onClick={() => handleApprove(selectedTech.id)}
//                 className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
//               >
//                 <CheckCircle size={18} /> Approve
//               </button>
//               <button 
//                 onClick={() => handleReject(selectedTech.id)}
//                 className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
//               >
//                 <XCircle size={18} /> Reject
//               </button>
//             </div>

//             <button 
//               onClick={() => setSelectedTech(null)}
//               className="w-full mt-3 bg-gray-200 text-gray-700 py-2 rounded-lg"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnicianApproval;

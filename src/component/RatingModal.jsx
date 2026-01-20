// import React, { useState } from 'react';
// import { Star, X } from 'lucide-react';

// const RatingModal = ({ isOpen, onClose, technician, onSubmit }) => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = () => {
//     onSubmit({ rating, feedback, technicianId: technician.id });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl p-6 max-w-md w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold">Rate Your Experience</h3>
//           <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
//             <X size={20} />
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//             <span className="text-2xl font-bold text-blue-600">
//               {technician?.name?.charAt(0)}
//             </span>
//           </div>
//           <h4 className="font-semibold">{technician?.name}</h4>
//           <p className="text-sm text-gray-600">{technician?.category}</p>
//         </div>

//         <div className="mb-6">
//           <p className="text-center mb-3 font-medium">How was the service?</p>
//           <div className="flex justify-center gap-2">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 key={star}
//                 onClick={() => setRating(star)}
//                 className="transition-transform hover:scale-110"
//               >
//                 <Star
//                   size={40}
//                   className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block font-medium mb-2">Feedback</label>
//           <textarea
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             className="w-full p-3 border rounded-lg"
//             rows="4"
//             placeholder="Share your experience"
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={rating === 0}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
//         >
//           Submit Rating
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RatingModal;

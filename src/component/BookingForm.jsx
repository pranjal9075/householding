// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';

// const BookingForm = ({ isOpen, onClose, serviceName }) => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         mobileNumber: '',
//         address: '',
//         preferredDate: '',
//         timeSlot: '',
//         problemDescription: ''
//     });

//     const [errors, setErrors] = useState({});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};
        
//         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//         if (!formData.mobileNumber.trim()) {
//             newErrors.mobileNumber = 'Mobile number is required';
//         } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
//             newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
//         }
//         if (!formData.address.trim()) newErrors.address = 'Address is required';
//         if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
//         if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
//         if (!formData.problemDescription.trim()) newErrors.problemDescription = 'Problem description is required';

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         if (validateForm()) {
//             const bookingData = {
//                 ...formData,
//                 serviceName,
//                 bookingId: `BK${Date.now()}`,
//                 status: 'pending',
//                 createdAt: new Date().toISOString()
//             };
            
//             console.log('Booking Submitted:', bookingData);
//             alert(`Booking confirmed for ${serviceName}!\nBooking ID: ${bookingData.bookingId}`);
            
//             setFormData({
//                 fullName: '',
//                 mobileNumber: '',
//                 address: '',
//                 preferredDate: '',
//                 timeSlot: '',
//                 problemDescription: ''
//             });
//             setErrors({});
//             onClose();
//         }
//     };

//     const getMinDate = () => {
//         const today = new Date();
//         return today.toISOString().split('T')[0];
//     };

//     if (!isOpen) return null;

//     return (
//         <AnimatePresence>
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//                 onClick={onClose}
//             >
//                 <motion.div
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0.9, opacity: 0 }}
//                     className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <h2 className="text-xl font-bold">Book {serviceName}</h2>
//                                 <p className="text-blue-100 text-sm mt-1">Fill in your details below</p>
//                             </div>
//                             <button
//                                 onClick={onClose}
//                                 className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
//                             >
//                                 <X size={20} />
//                             </button>
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit} className="p-6 space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Full Name *
//                             </label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 value={formData.fullName}
//                                 onChange={handleInputChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                                     errors.fullName ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                                 placeholder="Enter your full name"
//                             />
//                             {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Mobile Number *
//                             </label>
//                             <input
//                                 type="tel"
//                                 name="mobileNumber"
//                                 value={formData.mobileNumber}
//                                 onChange={handleInputChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                                     errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                                 placeholder="Enter 10-digit mobile number"
//                                 maxLength="10"
//                             />
//                             {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Address *
//                             </label>
//                             <textarea
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 rows="3"
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
//                                     errors.address ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                                 placeholder="Enter your complete address"
//                             />
//                             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Preferred Service Date *
//                             </label>
//                             <input
//                                 type="date"
//                                 name="preferredDate"
//                                 value={formData.preferredDate}
//                                 onChange={handleInputChange}
//                                 min={getMinDate()}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                                     errors.preferredDate ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                             />
//                             {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Time Slot *
//                             </label>
//                             <select
//                                 name="timeSlot"
//                                 value={formData.timeSlot}
//                                 onChange={handleInputChange}
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                                     errors.timeSlot ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                             >
//                                 <option value="">Select time slot</option>
//                                 <option value="Morning">Morning (9:00 AM - 12:00 PM)</option>
//                                 <option value="Afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
//                                 <option value="Evening">Evening (5:00 PM - 8:00 PM)</option>
//                             </select>
//                             {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Problem Description *
//                             </label>
//                             <textarea
//                                 name="problemDescription"
//                                 value={formData.problemDescription}
//                                 onChange={handleInputChange}
//                                 rows="3"
//                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
//                                     errors.problemDescription ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                                 placeholder="Describe the problem in detail"
//                             />
//                             {errors.problemDescription && <p className="text-red-500 text-xs mt-1">{errors.problemDescription}</p>}
//                         </div>

//                         <div className="flex gap-3 pt-4">
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
//                             >
//                                 Book Now
//                             </button>
//                         </div>
//                     </form>
//                 </motion.div>
//             </motion.div>
//         </AnimatePresence>
//     );
// };

// export default BookingForm;
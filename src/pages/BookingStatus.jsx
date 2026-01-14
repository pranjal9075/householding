// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import StatusBadge from '../component/StatusBadge';

// const BookingStatus = () => {
//     const [bookings, setBookings] = useState([]);

//     useEffect(() => {
//         // Simulate fetching bookings
//         const dummyBookings = [
//             {
//                 id: 'BK001',
//                 service: 'AC Repair',
//                 technician: 'John Doe',
//                 status: 'confirmed',
//                 date: '2024-01-15',
//                 time: '10:00 AM'
//             },
//             {
//                 id: 'BK002',
//                 service: 'Plumber',
//                 technician: 'Jane Smith',
//                 status: 'in-progress',
//                 date: '2024-01-16',
//                 time: '2:00 PM'
//             },
//             {
//                 id: 'BK003',
//                 service: 'House Cleaning',
//                 technician: 'Mike Johnson',
//                 status: 'completed',
//                 date: '2024-01-14',
//                 time: '9:00 AM'
//             }
//         ];
//         setBookings(dummyBookings);
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4">
//             <div className="max-w-4xl mx-auto">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center mb-12"
//                 >
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">Booking Status</h1>
//                     <p className="text-gray-600 text-lg">Track your service bookings</p>
//                 </motion.div>

//                 <div className="space-y-6">
//                     {bookings.map((booking, index) => (
//                         <motion.div
//                             key={booking.id}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white rounded-lg shadow-md p-6"
//                         >
//                             <div className="flex justify-between items-start mb-4">
//                                 <div>
//                                     <h3 className="text-xl font-semibold">{booking.service}</h3>
//                                     <p className="text-gray-600">Booking ID: {booking.id}</p>
//                                 </div>
//                                 <StatusBadge status={booking.status} />
//                             </div>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                                 <div>
//                                     <span className="font-medium text-gray-700">Technician:</span>
//                                     <p>{booking.technician}</p>
//                                 </div>
//                                 <div>
//                                     <span className="font-medium text-gray-700">Date:</span>
//                                     <p>{booking.date}</p>
//                                 </div>
//                                 <div>
//                                     <span className="font-medium text-gray-700">Time:</span>
//                                     <p>{booking.time}</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingStatus;
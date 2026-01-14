// import React from 'react';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';

// const Dashboard = () => {
//     const { user, isLoggedIn } = useAuth();

//     if (!isLoggedIn) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <p className="text-xl text-gray-600">Please login to access dashboard</p>
//             </div>
//         );
//     }

//     const stats = [
//         { title: 'Total Bookings', value: '12', color: 'bg-blue-500' },
//         { title: 'Completed', value: '8', color: 'bg-green-500' },
//         { title: 'Pending', value: '3', color: 'bg-yellow-500' },
//         { title: 'Cancelled', value: '1', color: 'bg-red-500' }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-12"
//                 >
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                         Welcome back, {user?.name}!
//                     </h1>
//                     <p className="text-gray-600 text-lg">Here's your service dashboard overview</p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//                     {stats.map((stat, index) => (
//                         <motion.div
//                             key={stat.title}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white rounded-lg shadow-md p-6"
//                         >
//                             <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
//                                 <span className="text-white font-bold text-xl">{stat.value}</span>
//                             </div>
//                             <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         className="bg-white rounded-lg shadow-md p-6"
//                     >
//                         <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
//                         <div className="space-y-3">
//                             {['AC Repair', 'Plumber Service', 'House Cleaning'].map((service, index) => (
//                                 <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
//                                     <span>{service}</span>
//                                     <span className="text-sm text-gray-500">Jan {15 + index}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         className="bg-white rounded-lg shadow-md p-6"
//                     >
//                         <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
//                         <div className="space-y-3">
//                             <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
//                                 Book New Service
//                             </button>
//                             <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
//                                 View All Bookings
//                             </button>
//                             <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
//                                 Contact Support
//                             </button>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
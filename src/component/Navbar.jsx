// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { Home, User, Calendar, LogOut } from 'lucide-react';

// const Navbar = () => {
//     const { isLoggedIn, user, logout } = useAuth();

//     return (
//         <nav className="bg-white shadow-md">
//             <div className="max-w-6xl mx-auto px-4">
//                 <div className="flex justify-between items-center h-16">
//                     <Link to="/" className="flex items-center space-x-2">
//                         <Home className="w-8 h-8 text-blue-600" />
//                         <span className="text-xl font-bold text-gray-800">HouseHolding</span>
//                     </Link>

//                     <div className="flex items-center space-x-6">
//                         <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
//                             Home
//                         </Link>
//                         <Link to="/book-service" className="text-gray-600 hover:text-blue-600 transition-colors">
//                             Services
//                         </Link>
                        
//                         {isLoggedIn ? (
//                             <div className="flex items-center space-x-4">
//                                 <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
//                                     <User className="w-4 h-4" />
//                                     <span>{user?.name}</span>
//                                 </Link>
//                                 <Link to="/booking-status" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
//                                     <Calendar className="w-4 h-4" />
//                                     <span>Bookings</span>
//                                 </Link>
//                                 <button
//                                     onClick={logout}
//                                     className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
//                                 >
//                                     <LogOut className="w-4 h-4" />
//                                     <span>Logout</span>
//                                 </button>
//                             </div>
//                         ) : (
//                             <div className="flex items-center space-x-4">
//                                 <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
//                                     Login
//                                 </Link>
//                                 <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                                     Register
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
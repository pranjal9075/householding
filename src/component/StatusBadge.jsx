// import React from 'react';

// const StatusBadge = ({ status }) => {
//     const getStatusConfig = (status) => {
//         switch (status) {
//             case 'pending':
//                 return { color: 'bg-yellow-100 text-yellow-800', text: 'Pending' };
//             case 'confirmed':
//                 return { color: 'bg-blue-100 text-blue-800', text: 'Confirmed' };
//             case 'in-progress':
//                 return { color: 'bg-purple-100 text-purple-800', text: 'In Progress' };
//             case 'completed':
//                 return { color: 'bg-green-100 text-green-800', text: 'Completed' };
//             case 'cancelled':
//                 return { color: 'bg-red-100 text-red-800', text: 'Cancelled' };
//             default:
//                 return { color: 'bg-gray-100 text-gray-800', text: 'Unknown' };
//         }
//     };

//     const config = getStatusConfig(status);

//     return (
//         <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
//             {config.text}
//         </span>
//     );
// };

// export default StatusBadge;
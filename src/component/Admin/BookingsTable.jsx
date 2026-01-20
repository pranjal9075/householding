import React, { useState } from 'react';

const BookingsTable = () => {
  const [bookings] = useState([
    { id: '#B001', user: 'John Doe', technician: 'Raj Kumar', service: 'AC Repair', status: 'Completed', payment: '₹1,200', phone: '+91 98765 43210' },
    { id: '#B002', user: 'Alice Smith', technician: 'Amit Singh', service: 'Plumbing', status: 'On the way', payment: '₹800', phone: '+91 98765 43211' },
    { id: '#B003', user: 'Mike Brown', technician: 'Suresh Yadav', service: 'Electrical', status: 'Accepted', payment: '₹600', phone: '+91 98765 43212' },
    { id: '#B004', user: 'Sarah Lee', technician: 'Vikash Kumar', service: 'Cleaning', status: 'Pending', payment: '₹500', phone: '+91 98765 43213' },
    { id: '#B005', user: 'David Wilson', technician: 'Ravi Sharma', service: 'Carpentry', status: 'Cancelled', payment: '₹900', phone: '+91 98765 43214' }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-600';
      case 'On the way': return 'bg-blue-600';
      case 'Accepted': return 'bg-purple-600';
      case 'Pending': return 'bg-yellow-600';
      case 'Cancelled': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-medium mb-4">📋 Bookings Management</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="pb-3 font-medium">Booking ID</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Technician</th>
                <th className="pb-3 font-medium">Service</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Payment</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {bookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-slate-800/50 transition">
                  <td className="py-4 text-blue-400 font-medium">{booking.id}</td>
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{booking.user}</p>
                      <p className="text-xs text-slate-400">{booking.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 font-medium">{booking.technician}</td>
                  <td className="py-4">{booking.service}</td>
                  <td className="py-4">
                    <span className={`${getStatusColor(booking.status)} px-2 py-1 rounded text-xs font-medium`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 font-bold">{booking.payment}</td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs">View Details</button>
                      <button className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-xs">Reassign</button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">Cancel</button>
                      <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs">Refund</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsTable;
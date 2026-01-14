import React from 'react';

const BookingsTable = () => {
  const rows = [
    { id: 1, type: 'AC Repair', status: 'Completed', color: 'text-green-500' },
    { id: 2, type: 'Home Cleaning', status: 'Pending', color: 'text-orange-500' },
    { id: 3, type: 'Plumbian', status: 'Pending', color: 'text-orange-500' },
    { id: '1X', type: 'Insulating', status: 'Completed', color: 'text-green-500' },
    { id: '1X', type: 'Modular Kitchen', status: 'Cancelled', color: 'text-red-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="text-lg font-bold text-slate-800 mb-6">Recent Bookings</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400 text-xs font-bold border-b border-slate-50">
            <th className="pb-4">Order ID</th>
            <th className="pb-4">Service Type</th>
            <th className="pb-4 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="py-4 text-sm font-medium text-slate-500">{row.id}</td>
              <td className="py-4 text-sm font-bold text-slate-700">{row.type}</td>
              <td className="py-4 text-center">
                <span className={`text-[10px] font-black uppercase ${row.color}`}>● {row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
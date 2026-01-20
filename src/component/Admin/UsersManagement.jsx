import React, { useState } from 'react';

const UsersManagement = () => {
  const [users] = useState([
    { id: 'USR001', name: 'John Doe', email: 'john@email.com', phone: '+91 98765 43210', bookings: 12, lastBooking: '2024-01-15', city: 'Noida', status: 'Active', joinDate: '2023-05-10' },
    { id: 'USR002', name: 'Alice Smith', email: 'alice@email.com', phone: '+91 98765 43211', bookings: 8, lastBooking: '2024-01-14', city: 'Ghaziabad', status: 'Active', joinDate: '2023-07-22' },
    { id: 'USR003', name: 'Michael Brown', email: 'michael@email.com', phone: '+91 98765 43212', bookings: 15, lastBooking: '2024-01-13', city: 'Delhi', status: 'Active', joinDate: '2023-03-15' },
    { id: 'USR004', name: 'Sarah Lee', email: 'sarah@email.com', phone: '+91 98765 43213', bookings: 5, lastBooking: '2024-01-10', city: 'Noida', status: 'Blocked', joinDate: '2023-09-08' },
    { id: 'USR005', name: 'David Wilson', email: 'david@email.com', phone: '+91 98765 43214', bookings: 20, lastBooking: '2024-01-12', city: 'Gurgaon', status: 'Active', joinDate: '2023-01-20' }
  ]);

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-600' : 'bg-red-600';
  };

  const handleBlockUser = (userId) => {
    alert(`User ${userId} blocked successfully.`);
  };

  const handleUnblockUser = (userId) => {
    alert(`User ${userId} unblocked successfully.`);
  };

  const handleViewProfile = (userId) => {
    alert(`Viewing profile for user ${userId}`);
  };

  const handleViewHistory = (userId) => {
    alert(`Viewing booking history for user ${userId}`);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{users.length}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Total Users</p>
            </div>
            <div className="text-3xl opacity-80">👥</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{users.filter(u => u.status === 'Active').length}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Active Users</p>
            </div>
            <div className="text-3xl opacity-80">🟢</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{users.filter(u => u.status === 'Blocked').length}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Blocked Users</p>
            </div>
            <div className="text-3xl opacity-80">🚫</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{users.reduce((sum, u) => sum + u.bookings, 0)}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Total Bookings</p>
            </div>
            <div className="text-3xl opacity-80">📋</div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-medium mb-4">👥 Users Management</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="pb-3 font-medium">User ID</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Contact</th>
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">Bookings</th>
                <th className="pb-3 font-medium">Last Booking</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/50 transition">
                  <td className="py-4 text-blue-400 font-medium">{user.id}</td>
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-slate-400">Joined: {user.joinDate}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <p className="text-sm">{user.email}</p>
                      <p className="text-xs text-slate-400">{user.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 font-medium">{user.city}</td>
                  <td className="py-4 font-bold">{user.bookings}</td>
                  <td className="py-4">{user.lastBooking}</td>
                  <td className="py-4">
                    <span className={`${getStatusColor(user.status)} px-2 py-1 rounded text-xs font-medium`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewProfile(user.id)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs"
                      >
                        View Profile
                      </button>
                      <button 
                        onClick={() => handleViewHistory(user.id)}
                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs"
                      >
                        Booking History
                      </button>
                      {user.status === 'Active' ? (
                        <button 
                          onClick={() => handleBlockUser(user.id)}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs"
                        >
                          Block User
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleUnblockUser(user.id)}
                          className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-xs"
                        >
                          Unblock
                        </button>
                      )}
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

export default UsersManagement;
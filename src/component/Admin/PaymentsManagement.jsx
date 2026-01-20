import React, { useState } from 'react';

const PaymentsManagement = () => {
  const [transactions] = useState([
    { id: 'TXN001', user: 'John Doe', technician: 'Raj Kumar', service: 'AC Repair', amount: 1200, userStatus: 'Paid', techPayout: 'Pending', platformEarning: 240, date: '2024-01-15' },
    { id: 'TXN002', user: 'Alice Smith', technician: 'Amit Singh', service: 'Plumbing', amount: 800, userStatus: 'Paid', techPayout: 'Completed', platformEarning: 120, date: '2024-01-14' },
    { id: 'TXN003', user: 'Mike Brown', technician: 'Suresh Yadav', service: 'Electrical', amount: 600, userStatus: 'Pending', techPayout: 'Hold', platformEarning: 108, date: '2024-01-13' },
    { id: 'TXN004', user: 'Sarah Lee', technician: 'Vikash Kumar', service: 'Cleaning', amount: 500, userStatus: 'Paid', techPayout: 'Pending', platformEarning: 125, date: '2024-01-12' },
    { id: 'TXN005', user: 'David Wilson', technician: 'Ravi Sharma', service: 'Carpentry', amount: 1500, userStatus: 'Paid', techPayout: 'Completed', platformEarning: 330, date: '2024-01-11' }
  ]);

  const getPaymentStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-600';
      case 'Pending': return 'bg-yellow-600';
      case 'Failed': return 'bg-red-600';
      case 'Completed': return 'bg-green-600';
      case 'Hold': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  const handleProcessPayout = (txnId) => {
    alert(`Processing payout for transaction ${txnId}`);
  };

  const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0);
  const platformEarnings = transactions.reduce((sum, t) => sum + t.platformEarning, 0);
  const pendingPayouts = transactions.filter(t => t.techPayout === 'Pending').reduce((sum, t) => sum + (t.amount - t.platformEarning), 0);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Total Revenue</p>
            </div>
            <div className="text-3xl opacity-80">💳</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">₹{platformEarnings.toLocaleString()}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Platform Earnings</p>
            </div>
            <div className="text-3xl opacity-80">🏦</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">₹{pendingPayouts.toLocaleString()}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Pending Payouts</p>
            </div>
            <div className="text-3xl opacity-80">⏳</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{transactions.length}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">Total Transactions</p>
            </div>
            <div className="text-3xl opacity-80">📊</div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-medium mb-4">💳 All Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="pb-3 font-medium">Transaction ID</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Technician</th>
                <th className="pb-3 font-medium">Service</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">User Payment</th>
                <th className="pb-3 font-medium">Tech Payout</th>
                <th className="pb-3 font-medium">Platform Earning</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-800/50 transition">
                  <td className="py-4 text-blue-400 font-medium">{txn.id}</td>
                  <td className="py-4 font-medium">{txn.user}</td>
                  <td className="py-4 font-medium">{txn.technician}</td>
                  <td className="py-4">{txn.service}</td>
                  <td className="py-4 font-bold text-green-400">₹{txn.amount}</td>
                  <td className="py-4">
                    <span className={`${getPaymentStatusColor(txn.userStatus)} px-2 py-1 rounded text-xs font-medium`}>
                      {txn.userStatus}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`${getPaymentStatusColor(txn.techPayout)} px-2 py-1 rounded text-xs font-medium`}>
                      {txn.techPayout}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-yellow-400">₹{txn.platformEarning}</td>
                  <td className="py-4">{txn.date}</td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      {txn.techPayout === 'Pending' && (
                        <button 
                          onClick={() => handleProcessPayout(txn.id)}
                          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs"
                        >
                          Process Payout
                        </button>
                      )}
                      <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs">
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-medium mb-4">📈 Payment Analytics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Success Rate</span>
              <span className="font-bold text-green-400">
                {Math.round((transactions.filter(t => t.userStatus === 'Paid').length / transactions.length) * 100)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Avg Transaction</span>
              <span className="font-bold">₹{Math.round(totalRevenue / transactions.length)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Commission Rate</span>
              <span className="font-bold text-purple-400">
                {Math.round((platformEarnings / totalRevenue) * 100)}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-medium mb-4">⚡ Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-sm">
              Process All Pending Payouts
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm">
              Generate Payment Report
            </button>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-sm">
              Export Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsManagement;
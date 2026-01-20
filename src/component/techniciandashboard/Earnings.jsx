import React from 'react';
import { Download } from 'lucide-react';

const Earnings = ({ todayStats, earnings }) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="font-bold text-gray-800">Earnings & Wallet</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Today Earning</p>
            <p className="text-2xl font-bold text-blue-600">₹{todayStats.earningsToday}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Weekly Earning</p>
            <p className="text-2xl font-bold text-green-600">₹{Math.floor(todayStats.earningsMonth * 0.3)}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Monthly Earning</p>
            <p className="text-2xl font-bold text-purple-600">₹{todayStats.earningsMonth}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium text-gray-800 mb-3">Platform Commission (15%)</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Today Commission</p>
              <p className="font-bold text-red-600">₹{Math.floor(todayStats.earningsToday * 0.15)}</p>
            </div>
            <div>
              <p className="text-gray-600">Weekly Commission</p>
              <p className="font-bold text-red-600">₹{Math.floor(todayStats.earningsMonth * 0.3 * 0.15)}</p>
            </div>
            <div>
              <p className="text-gray-600">Monthly Commission</p>
              <p className="font-bold text-red-600">₹{Math.floor(todayStats.earningsMonth * 0.15)}</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2 mx-auto">
            <Download size={20} /> Withdraw Money
          </button>
          <p className="text-sm text-gray-500 mt-2">Minimum withdrawal: ₹500</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 text-lg mb-4">Recent Earnings</h4>
          <div className="space-y-3">
            {earnings.map((earning) => (
              <div key={earning.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Job #{earning.id}</p>
                  <p className="text-sm text-gray-500">{earning.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₹{earning.amount}</p>
                  <p className="text-xs text-red-500">-₹{Math.floor(earning.amount * 0.15)} commission</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
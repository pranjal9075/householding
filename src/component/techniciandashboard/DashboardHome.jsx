import React from 'react';
import { Briefcase, DollarSign, Star, Wallet } from 'lucide-react';

const DashboardHome = ({ todayStats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Today Jobs */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Today Jobs</p>
            <p className="text-3xl font-bold text-blue-600">{todayStats.jobsToday}</p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Briefcase className="text-blue-600" size={24} />
          </div>
        </div>
      </div>

      {/* Total Jobs */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Jobs</p>
            <p className="text-3xl font-bold text-purple-600">{todayStats.totalJobs || 127}</p>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Briefcase className="text-purple-600" size={24} />
          </div>
        </div>
      </div>

      {/* Earnings Today */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Earnings Today</p>
            <p className="text-3xl font-bold text-green-600">₹{todayStats.earningsToday}</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <DollarSign className="text-green-600" size={24} />
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Rating</p>
            <p className="text-3xl font-bold text-yellow-600 flex items-center gap-1">
              <Star className="text-yellow-500 fill-current" size={28} />
              {todayStats.rating}
            </p>
          </div>
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Star className="text-yellow-600" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
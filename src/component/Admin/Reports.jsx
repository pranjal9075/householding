import React, { useState } from 'react';

const Reports = () => {
  const [period, setPeriod] = useState('daily');

  const dailyData = [1200, 1800, 1500, 2200, 1900, 2500, 2100];
  const monthlyData = [45000, 52000, 48000, 58000, 61000, 67000];
  const labels = period === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = period === 'daily' ? dailyData : monthlyData;
  const max = Math.max(...data);

  const technicians = [
    { name: 'Rajesh Kumar', bookings: 45, rating: 4.8, earnings: '₹18,500' },
    { name: 'Amit Singh', bookings: 38, rating: 4.7, earnings: '₹15,200' },
    { name: 'Priya Sharma', bookings: 35, rating: 4.9, earnings: '₹14,800' }
  ];

  const services = [
    { name: 'AC Repair', bookings: 156, revenue: '₹78,000' },
    { name: 'Plumbing', bookings: 142, revenue: '₹71,000' },
    { name: 'Electrical', bookings: 128, revenue: '₹64,000' },
    { name: 'Cleaning', bookings: 98, revenue: '₹49,000' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-white">Reports</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Excel</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">PDF</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800">Revenue</h2>
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button onClick={() => setPeriod('daily')} className={`px-3 py-1 rounded text-sm text-black ${period === 'daily' ? 'bg-white shadow-sm' : ''}`}>Daily</button>
              <button onClick={() => setPeriod('monthly')} className={`px-3 py-1 rounded text-sm  text-black ${period === 'monthly' ? 'bg-white shadow-sm' : ''}`}>Monthly</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {data.map((value, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: `${(value / max) * 200}px` }}></div>
                <span className="text-xs text-slate-600 mt-2">{labels[i]}</span>
                <span className="text-xs font-medium text-green-500">₹{value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Top Technicians</h2>
          <div className="space-y-3">
            {technicians.map((tech, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                  <div>
                    <p className="font-medium">{tech.name}</p>
                    <p className="text-sm text-slate-600">{tech.bookings} bookings • ⭐ {tech.rating}</p>
                  </div>
                </div>
                <span className="font-bold text-green-600">{tech.earnings}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Most Used Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div key={i} className="p-4 border border-slate-200 rounded-lg">
              <h3 className="font-medium mb-2 text-black">{service.name}</h3>
              <p className="text-sm text-slate-600 mb-1">{service.bookings} bookings</p>
              <p className="text-lg font-bold text-green-600">{service.revenue}</p>
              <div className="mt-3 bg-slate-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(service.bookings / 156) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
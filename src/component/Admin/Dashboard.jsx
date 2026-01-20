import React from 'react';

import BookingsTable from './BookingsTable';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <KPICard title="Total Users" value="2,847" icon="👥" color="blue" />
        <KPICard title="Total Technicians" value="480" icon="👨🔧" color="green" />
        <KPICard title="Today Bookings" value="23" icon="📅" color="orange" />
        <KPICard title="Total Revenue" value="₹12.5L" icon="💰" color="purple" />
        <KPICard title="Pending Jobs" value="8" icon="⏳" color="orange" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-medium mb-4">📈 Daily Bookings</h3>
          <div className="h-64 flex items-end justify-between px-4 pb-4">
            {[12, 19, 15, 25, 22, 30, 28].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div 
                  className="bg-blue-500 w-8 rounded-t" 
                  style={{height: `${value * 4}px`}}
                ></div>
                <span className="text-xs text-slate-400 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-medium mb-4">💰 Revenue Graph</h3>
          <div className="h-64 flex items-end justify-between px-4 pb-4">
            {[45000, 52000, 48000, 65000, 58000, 72000, 68000].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div 
                  className="bg-green-500 w-8 rounded-t" 
                  style={{height: `${(value / 1000)}px`}}
                ></div>
                <span className="text-xs text-slate-400 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-medium mb-4">🔔 Recent Activities</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-900/20 border border-green-600 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-green-400">✅ New booking created</p>
                <p className="text-sm text-slate-400">John Doe booked AC Repair service</p>
              </div>
              <p className="text-xs text-slate-400">2 min ago</p>
            </div>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-600 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-blue-400">👨🔧 Technician registered</p>
                <p className="text-sm text-slate-400">Raj Kumar joined as Plumber</p>
              </div>
              <p className="text-xs text-slate-400">5 min ago</p>
            </div>
          </div>
          <div className="p-3 bg-purple-900/20 border border-purple-600 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-purple-400">💳 Payment received</p>
                <p className="text-sm text-slate-400">₹1,200 from Alice Smith</p>
              </div>
              <p className="text-xs text-slate-400">8 min ago</p>
            </div>
          </div>
          <div className="p-3 bg-orange-900/20 border border-orange-600 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-orange-400">✅ Job completed</p>
                <p className="text-sm text-slate-400">Electrical repair by Amit Singh</p>
              </div>
              <p className="text-xs text-slate-400">12 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, icon, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600', 
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600'
  };
  
  return (
    <div className={`bg-gradient-to-r ${colorClasses[color]} rounded-xl p-6 text-white shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm opacity-90 uppercase tracking-wider">{title}</p>
        </div>
        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );
};

export default Dashboard;
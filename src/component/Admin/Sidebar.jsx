import React from 'react';
import { LayoutDashboard, Users, Settings, BarChart3, Wrench, ChevronRight, Calendar, CreditCard, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Bookings', icon: <Calendar size={20} />, path: '/admin/bookings' },
    { name: 'Technicians', icon: <Wrench size={20} />, path: '/admin/technicians' },
    { name: 'Users', icon: <Users size={20} />, path: '/admin/users' },
    { name: 'Payments', icon: <CreditCard size={20} />, path: '/admin/payments' },
    { name: 'Support Tickets', icon: <MessageSquare size={20} />, path: '/admin/support-tickets' },
    { name: 'Reports', icon: <BarChart3 size={20} />, path: '/admin/reports' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="w-72 bg-[#1e293b] text-slate-300 min-h-screen p-6 flex flex-col fixed left-0">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="bg-orange-500 p-2 rounded text-xs font-black text-white">REPAIR</div>
        <span className="font-bold text-white tracking-widest text-lg">BAZAR</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={14} />}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
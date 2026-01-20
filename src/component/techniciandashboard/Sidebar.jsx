import React from 'react';
import { 
  Home, Inbox, Briefcase, Wallet, Star, User, Bell, 
  HelpCircle, Settings, LogOut, X, Calendar as CalendarIcon 
} from 'lucide-react';

const Sidebar = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  activeTab, 
  setActiveTab, 
  notifications 
}) => {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Inbox, label: "Job Requests" },
    { icon: Briefcase, label: "My Jobs" },
    { icon: Wallet, label: "Earnings" },
    { icon: Star, label: "Reviews" },
    { icon: User, label: "Profile" },
    { icon: CalendarIcon, label: "Availability" },
    { icon: Bell, label: "Notifications" },
    { icon: HelpCircle, label: "Support" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className={`w-64 bg-white border-r flex flex-col fixed lg:relative z-50 h-full transform transition-transform duration-300 overflow-y-auto scrollbar-hide ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      <div className="p-6 text-xl font-bold text-blue-600 border-b flex justify-between items-center flex-shrink-0">
        Partner Portal
        <button 
          className="lg:hidden p-1 hover:bg-gray-100 rounded"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={20} />
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
        {menuItems.map((item, i) => (
          <button 
            key={i} 
            onClick={() => setActiveTab(item.label)}
            className={`flex items-center w-full p-3 rounded-lg gap-3 transition ${
              activeTab === item.label ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
            {item.label === 'Notifications' && notifications.filter(n => !n.read).length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-auto">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t flex-shrink-0">
        <button className="flex items-center w-full p-3 rounded-lg gap-3 text-red-600 hover:bg-red-50 transition">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
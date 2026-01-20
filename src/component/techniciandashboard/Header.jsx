import React from 'react';
import { Menu, Bell } from 'lucide-react';

const Header = ({ 
  setSidebarOpen, 
  myProfile, 
  isOnline, 
  setIsOnline, 
  setActiveTab, 
  notifications 
}) => {
  return (
    <header className="h-16 bg-white border-b px-4 lg:px-6 flex items-center justify-between sticky top-0 z-30 flex-shrink-0">
      <button 
        className="lg:hidden p-2 hover:bg-gray-100 rounded mr-3"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={20} />
      </button>
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          {myProfile.photo ? (
            <img src={myProfile.photo} alt="Profile" className="w-full h-full rounded-full" />
          ) : (
            <span className="font-bold text-blue-600">{myProfile.name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">{myProfile.name}</h2>
          <p className="text-xs text-blue-600">{myProfile.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
            isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`} />
          {isOnline ? 'Online' : 'Offline'}
        </button>
        <button 
          onClick={() => setActiveTab('Notifications')}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative"
        >
          <Bell size={20} />
          {notifications.filter(n => !n.read).length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.filter(n => !n.read).length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
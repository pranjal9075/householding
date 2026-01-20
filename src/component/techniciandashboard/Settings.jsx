import React from 'react';
import { Bell, X, LogOut } from 'lucide-react';

const Settings = ({ 
  notificationsEnabled, 
  setNotificationsEnabled, 
  selectedLanguage, 
  setSelectedLanguage 
}) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border p-6">
      <h3 className="font-bold text-gray-800 mb-6">Settings</h3>
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Change Password</h4>
              <p className="text-sm text-gray-500">Update your account password</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Change
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Notifications</h4>
              <p className="text-sm text-gray-500">Receive job alerts and updates</p>
            </div>
            <button 
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                notificationsEnabled ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}
            >
              {notificationsEnabled ? <Bell size={16} /> : <X size={16} />}
              {notificationsEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Language</h4>
              <p className="text-sm text-gray-500">Choose your preferred language</p>
            </div>
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="English">English</option>
              <option value="Hindi">हिंदी (Hindi)</option>
            </select>
          </div>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-red-800">Logout</h4>
              <p className="text-sm text-red-600">Sign out of your account</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 flex items-center gap-2">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
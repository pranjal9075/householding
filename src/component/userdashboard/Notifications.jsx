import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, CheckCircle, CreditCard, Gift, AlertTriangle, Trash2, Check } from 'lucide-react';

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'booking',
      title: 'Technician Assigned',
      message: 'Ramesh Kumar has been assigned to your Electrician service',
      time: '2 hours ago',
      read: false,
      icon: <CheckCircle className="text-green-500" size={20} />
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Confirmed',
      message: '₹799 payment received for Electrician service',
      time: '1 day ago',
      read: false,
      icon: <CreditCard className="text-blue-500" size={20} />
    },
    {
      id: 3,
      type: 'offer',
      title: 'Special Offer',
      message: 'Get 20% off on your next AC service. Use code: AC20',
      time: '2 days ago',
      read: true,
      icon: <Gift className="text-purple-500" size={20} />
    },
    {
      id: 4,
      type: 'booking',
      title: 'Service Completed',
      message: 'Your Plumber service has been completed successfully',
      time: '3 days ago',
      read: true,
      icon: <CheckCircle className="text-green-500" size={20} />
    },
    {
      id: 5,
      type: 'alert',
      title: 'Service Reminder',
      message: 'AC maintenance is due in 2 days. Book now to avoid issues.',
      time: '1 week ago',
      read: false,
      icon: <AlertTriangle className="text-yellow-500" size={20} />
    }
  ]);

  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              <Bell size={20} />
              <h1 className="text-xl font-bold">Notifications</h1>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1"
            >
              <Check size={16} />
              Mark all as read
            </button>
          )}
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {/* Filter Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6 overflow-x-auto">
          {[
            { key: 'all', label: 'All' },
            { key: 'unread', label: 'Unread' },
            { key: 'booking', label: 'Bookings' },
            { key: 'payment', label: 'Payments' },
            { key: 'offer', label: 'Offers' },
            { key: 'alert', label: 'Alerts' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`py-2 px-4 rounded-md text-sm font-medium transition whitespace-nowrap ${
                filter === tab.key ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              {tab.label}
              {tab.key === 'unread' && unreadCount > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-white p-4 rounded-lg border transition hover:shadow-md ${
                  !notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {notification.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                        <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {!notification.read && (
                          <button 
                            onClick={() => markAsRead(notification.id)}
                            className="text-blue-500 hover:text-blue-600 p-1 rounded"
                            title="Mark as read"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}
                        <button 
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-500 hover:text-red-600 p-1 rounded"
                          title="Delete notification"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <Bell size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No notifications</h3>
              <p className="text-gray-500">
                {filter === 'all' 
                  ? "You don't have any notifications yet." 
                  : `No ${filter} notifications found.`
                }
              </p>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="mt-8 bg-white p-6 rounded-xl border">
          <h3 className="font-bold mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>Booking updates</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>Payment confirmations</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>Special offers and promotions</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>Service reminders</span>
            </label>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
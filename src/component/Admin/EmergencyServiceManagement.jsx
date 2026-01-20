import React, { useState } from 'react';

const EmergencyServiceManagement = () => {
  const [emergencySettings, setEmergencySettings] = useState({
    electrician: { enabled: true, price: 499, advancePrice: 199 },
    plumber: { enabled: true, price: 499, advancePrice: 199 },
    acRepair: { enabled: true, price: 599, advancePrice: 249 },
    appliance: { enabled: true, price: 549, advancePrice: 199 },
    general: { enabled: true, price: 499, advancePrice: 199 }
  });

  const [activeRequests, setActiveRequests] = useState([
    {
      id: 'EMG001',
      service: 'Electrician',
      customer: 'John Doe',
      location: 'Andheri East',
      status: 'searching',
      amount: 499,
      createdAt: '2024-01-15 14:30'
    },
    {
      id: 'EMG002', 
      service: 'Plumber',
      customer: 'Jane Smith',
      location: 'Bandra West',
      status: 'assigned',
      technician: 'Rahul Kumar',
      amount: 499,
      createdAt: '2024-01-15 13:45'
    }
  ]);

  const handlePriceUpdate = (service, field, value) => {
    setEmergencySettings(prev => ({
      ...prev,
      [service]: {
        ...prev[service],
        [field]: parseInt(value)
      }
    }));
  };

  const handleToggleService = (service) => {
    setEmergencySettings(prev => ({
      ...prev,
      [service]: {
        ...prev[service],
        enabled: !prev[service].enabled
      }
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'searching': return 'bg-yellow-100 text-yellow-800';
      case 'assigned': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🚨 Emergency Service Management</h1>

      {/* Emergency Service Settings */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Service Pricing & Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(emergencySettings).map(([service, settings]) => (
            <div key={service} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold capitalize">{service.replace(/([A-Z])/g, ' $1')}</h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.enabled}
                    onChange={() => handleToggleService(service)}
                    className="mr-2"
                  />
                  <span className="text-sm">Enabled</span>
                </label>
              </div>
              
              <div className="space-y-2">
                <div>
                  <label className="block text-sm text-gray-600">Fixed Price</label>
                  <input
                    type="number"
                    value={settings.price}
                    onChange={(e) => handlePriceUpdate(service, 'price', e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!settings.enabled}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Advance Price</label>
                  <input
                    type="number"
                    value={settings.advancePrice}
                    onChange={(e) => handlePriceUpdate(service, 'advancePrice', e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!settings.enabled}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Emergency Requests */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Active Emergency Requests</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Request ID</th>
                <th className="px-4 py-2 text-left">Service</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Technician</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {activeRequests.map(request => (
                <tr key={request.id} className="border-t">
                  <td className="px-4 py-2 font-mono">{request.id}</td>
                  <td className="px-4 py-2">{request.service}</td>
                  <td className="px-4 py-2">{request.customer}</td>
                  <td className="px-4 py-2">{request.location}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{request.technician || '-'}</td>
                  <td className="px-4 py-2 font-semibold">₹{request.amount}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{request.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Emergency Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-semibold text-red-800">Today's Emergency</h3>
          <p className="text-2xl font-bold text-red-600">12</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800">Pending Requests</h3>
          <p className="text-2xl font-bold text-yellow-600">3</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800">Completed Today</h3>
          <p className="text-2xl font-bold text-green-600">9</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800">Revenue Today</h3>
          <p className="text-2xl font-bold text-blue-600">₹4,491</p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServiceManagement;
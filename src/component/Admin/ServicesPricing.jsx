import React, { useState } from 'react';

const ServicesPricing = () => {
  const [services] = useState([
    { id: 1, name: 'AC Repair', category: 'Appliances', basePrice: 499, hourlyRate: 150, emergencyCharge: 200, commission: 20 },
    { id: 2, name: 'Plumbing', category: 'Home Services', basePrice: 299, hourlyRate: 100, emergencyCharge: 150, commission: 15 },
    { id: 3, name: 'Electrical Work', category: 'Home Services', basePrice: 399, hourlyRate: 120, emergencyCharge: 180, commission: 18 },
    { id: 4, name: 'House Cleaning', category: 'Cleaning', basePrice: 199, hourlyRate: 80, emergencyCharge: 100, commission: 25 },
    { id: 5, name: 'Carpentry', category: 'Home Services', basePrice: 599, hourlyRate: 200, emergencyCharge: 300, commission: 22 }
  ]);

  const handleEditService = (serviceId) => {
    alert(`Edit service ${serviceId}`);
  };

  const handleAddService = () => {
    alert('Add new service');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">🔧 Services & Pricing Management</h2>
        <button 
          onClick={handleAddService}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium"
        >
          + Add New Service
        </button>
      </div>

      {/* Services Table */}
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="pb-3 font-medium">Service</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Base Price</th>
                <th className="pb-3 font-medium">Per Hour</th>
                <th className="pb-3 font-medium">Emergency</th>
                <th className="pb-3 font-medium">Commission</th>
                <th className="pb-3 font-medium">Admin Earning</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-slate-800/50 transition">
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-xs text-slate-400">ID: {service.id}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      {service.category}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-green-400">₹{service.basePrice}</td>
                  <td className="py-4 font-medium">₹{service.hourlyRate}/hr</td>
                  <td className="py-4 font-medium text-orange-400">+₹{service.emergencyCharge}</td>
                  <td className="py-4">
                    <span className="bg-purple-600 px-2 py-1 rounded text-xs font-medium">
                      {service.commission}%
                    </span>
                  </td>
                  <td className="py-4 font-bold text-yellow-400">
                    ₹{Math.round(service.basePrice * service.commission / 100)}
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEditService(service.id)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-medium mb-4">💰 Revenue Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Services</span>
              <span className="font-bold">{services.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Avg Commission</span>
              <span className="font-bold text-purple-400">
                {Math.round(services.reduce((sum, s) => sum + s.commission, 0) / services.length)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Base Revenue</span>
              <span className="font-bold text-green-400">
                ₹{services.reduce((sum, s) => sum + s.basePrice, 0)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-medium mb-4">📊 Price Range</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Lowest Price</span>
              <span className="font-bold text-green-400">
                ₹{Math.min(...services.map(s => s.basePrice))}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Highest Price</span>
              <span className="font-bold text-red-400">
                ₹{Math.max(...services.map(s => s.basePrice))}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Avg Emergency</span>
              <span className="font-bold text-orange-400">
                ₹{Math.round(services.reduce((sum, s) => sum + s.emergencyCharge, 0) / services.length)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-medium mb-4">⚙️ Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-sm">
              Bulk Price Update
            </button>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-sm">
              Commission Settings
            </button>
            <button className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded text-sm">
              Export Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPricing;
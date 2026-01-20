import React, { useState } from 'react';

const ServiceManagement = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Plumbing Repair', basePrice: 250, commission: 50, finalPrice: 300, active: true },
    { id: 2, name: 'AC Repair', basePrice: 450, commission: 50, finalPrice: 500, active: true },
    { id: 3, name: 'Electrical Work', basePrice: 200, commission: 50, finalPrice: 250, active: true },
  ]);

  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({ basePrice: '', commission: '' });

  const handleEdit = (service) => {
    setEditingService(service.id);
    setFormData({ basePrice: service.basePrice, commission: service.commission });
  };

  const handleSave = (serviceId) => {
    const basePrice = parseInt(formData.basePrice);
    const commission = parseInt(formData.commission);
    const finalPrice = basePrice + commission;

    setServices(services.map(s => 
      s.id === serviceId 
        ? { ...s, basePrice, commission, finalPrice }
        : s
    ));
    setEditingService(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Service Price Management</h2>
      
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Service Name</th>
              <th className="p-4 text-left">Base Price (₹)</th>
              <th className="p-4 text-left">Commission (₹)</th>
              <th className="p-4 text-left">Final Price (₹)</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id} className="border-b">
                <td className="p-4 font-medium">{service.name}</td>
                <td className="p-4">
                  {editingService === service.id ? (
                    <input
                      type="number"
                      value={formData.basePrice}
                      onChange={(e) => setFormData({...formData, basePrice: e.target.value})}
                      className="w-24 px-2 py-1 border rounded"
                    />
                  ) : (
                    `₹${service.basePrice}`
                  )}
                </td>
                <td className="p-4">
                  {editingService === service.id ? (
                    <input
                      type="number"
                      value={formData.commission}
                      onChange={(e) => setFormData({...formData, commission: e.target.value})}
                      className="w-24 px-2 py-1 border rounded"
                    />
                  ) : (
                    `₹${service.commission}`
                  )}
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-bold text-lg">
                    ₹{editingService === service.id 
                      ? (parseInt(formData.basePrice || 0) + parseInt(formData.commission || 0))
                      : service.finalPrice}
                  </span>
                </td>
                <td className="p-4">
                  {editingService === service.id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSave(service.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingService(null)}
                        className="px-3 py-1 bg-gray-400 text-white rounded text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(service)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                    >
                      Edit Price
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold mb-2">ℹ️ How Pricing Works:</h3>
        <ul className="text-sm space-y-1">
          <li>• <strong>Base Price:</strong> Amount technician receives</li>
          <li>• <strong>Commission:</strong> Platform fee</li>
          <li>• <strong>Final Price:</strong> What user pays (Base + Commission)</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceManagement;

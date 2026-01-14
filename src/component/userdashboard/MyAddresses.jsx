import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Plus, Edit3, Trash2, Home, Building2, Star } from 'lucide-react';

const MyAddresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', address: '123, Anand Vihar, Delhi - 110092', isDefault: true },
    { id: 2, type: 'Office', address: '456, Nehru Place, Delhi - 110019', isDefault: false },
    { id: 3, type: 'Other', address: '789, Connaught Place, Delhi - 110001', isDefault: false }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ type: 'Home', address: '', landmark: '' });

  const handleSave = () => {
    if (editingId) {
      setAddresses(addresses.map(addr => 
        addr.id === editingId ? { ...addr, ...formData } : addr
      ));
    } else {
      setAddresses([...addresses, { id: Date.now(), ...formData, isDefault: false }]);
    }
    setFormData({ type: 'Home', address: '', landmark: '' });
    setShowAddForm(false);
    setEditingId(null);
  };

  const handleEdit = (addr) => {
    setFormData({ type: addr.type, address: addr.address, landmark: addr.landmark || '' });
    setEditingId(addr.id);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const setDefault = (id) => {
    setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">My Addresses</h1>
          </div>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={16} /> Add Address
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {showAddForm && (
          <div className="bg-white p-6 rounded-xl border mb-6">
            <h3 className="font-bold mb-4">{editingId ? 'Edit' : 'Add New'} Address</h3>
            <div className="space-y-4">
              <select 
                value={formData.type} 
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full p-3 border rounded-lg"
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
              <textarea 
                placeholder="Complete address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full p-3 border rounded-lg" 
                rows="3"
              />
              <input 
                placeholder="Landmark (optional)"
                value={formData.landmark}
                onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
              <div className="flex gap-3">
                <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-lg">
                  Save
                </button>
                <button 
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingId(null);
                    setFormData({ type: 'Home', address: '', landmark: '' });
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {addresses.map((addr) => (
            <div key={addr.id} className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {addr.type === 'Home' ? <Home size={20} className="text-blue-500" /> : 
                     addr.type === 'Office' ? <Building2 size={20} className="text-green-500" /> : 
                     <MapPin size={20} className="text-gray-500" />}
                    <span className="font-semibold">{addr.type}</span>
                    {addr.isDefault && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <Star size={12} /> Default
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700">{addr.address}</p>
                  {addr.landmark && <p className="text-sm text-gray-500">Near: {addr.landmark}</p>}
                </div>
                <div className="flex gap-2">
                  {!addr.isDefault && (
                    <button 
                      onClick={() => setDefault(addr.id)}
                      className="text-blue-500 hover:bg-blue-50 p-2 rounded"
                      title="Set as default"
                    >
                      <Star size={16} />
                    </button>
                  )}
                  <button 
                    onClick={() => handleEdit(addr)}
                    className="text-gray-500 hover:bg-gray-50 p-2 rounded"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(addr.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAddresses;
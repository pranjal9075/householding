import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Camera, FileText } from 'lucide-react';

const TechnicianRegister = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', phone: '', category: '', area: '', password: '',
    aadhar: null, address: null, photo: null, bankDetails: ''
  });

  const categories = ['Plumber', 'Electrician', 'AC Technician', 'Carpenter', 'Appliance Repair'];

  const handleFileUpload = (field, file) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = () => {
    alert('Registration submitted! Status: PENDING_APPROVAL');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl w-full max-w-md p-8 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Register as Technician</h2>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mobile Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Service Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Area</label>
              <input 
                type="text" 
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Upload Documents</h3>
            
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <FileText className="mx-auto mb-2 text-gray-400" size={32} />
              <label className="cursor-pointer text-blue-600">
                Upload Aadhar
                <input type="file" className="hidden" onChange={(e) => handleFileUpload('aadhar', e.target.files[0])} />
              </label>
              {formData.aadhar && <p className="text-sm text-green-600 mt-2">Uploaded</p>}
            </div>

            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <FileText className="mx-auto mb-2 text-gray-400" size={32} />
              <label className="cursor-pointer text-blue-600">
                Upload Address Proof
                <input type="file" className="hidden" onChange={(e) => handleFileUpload('address', e.target.files[0])} />
              </label>
              {formData.address && <p className="text-sm text-green-600 mt-2">Uploaded</p>}
            </div>

            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <Camera className="mx-auto mb-2 text-gray-400" size={32} />
              <label className="cursor-pointer text-blue-600">
                Upload Photo
                <input type="file" className="hidden" onChange={(e) => handleFileUpload('photo', e.target.files[0])} />
              </label>
              {formData.photo && <p className="text-sm text-green-600 mt-2">Uploaded</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bank Details</label>
              <textarea 
                value={formData.bankDetails}
                onChange={(e) => setFormData({...formData, bankDetails: e.target.value})}
                className="w-full p-3 border rounded-lg"
                rows="3"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg"
              >
                Back
              </button>
              <button 
                onClick={handleSubmit}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TechnicianRegister;

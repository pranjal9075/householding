import React, { useState } from 'react';
import { Calculator, DollarSign, FileText, X } from 'lucide-react';

const BillForm = ({ job, onBillGenerate, onClose }) => {
  const [billData, setBillData] = useState({
    serviceCharge: job?.basePrice || 500,
    extraCharge: 0,
    tax: 0,
    description: ''
  });

  const totalAmount = billData.serviceCharge + billData.extraCharge + billData.tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bill = {
      jobId: job.id,
      customer: job.customer,
      service: job.service,
      ...billData,
      totalAmount,
      status: 'PENDING_USER_APPROVAL',
      generatedAt: new Date().toISOString(),
      billId: `BILL-${Date.now()}`
    };
    onBillGenerate(bill);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Calculator className="text-blue-600" size={24} />
              Generate Bill
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">Service: {job?.service}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Charge (Base)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
              <input
                type="number"
                value={billData.serviceCharge}
                onChange={(e) => setBillData({...billData, serviceCharge: Number(e.target.value)})}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Extra Work / Material Charge
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
              <input
                type="number"
                value={billData.extraCharge}
                onChange={(e) => setBillData({...billData, extraCharge: Number(e.target.value)})}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax (Optional)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
              <input
                type="number"
                value={billData.tax}
                onChange={(e) => setBillData({...billData, tax: Number(e.target.value)})}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-blue-600">₹{totalAmount}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              Generate Bill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillForm;
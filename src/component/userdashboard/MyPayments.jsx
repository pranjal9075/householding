import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Download, Eye } from 'lucide-react';

const MyPayments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bills');

  const bills = [
    { id: 'INV001', service: 'Electrician', date: 'Dec 15, 2024', amount: '₹799', status: 'Paid', method: 'UPI' },
    { id: 'INV002', service: 'Plumber', date: 'Dec 10, 2024', amount: '₹599', status: 'Paid', method: 'Card' },
    { id: 'INV003', service: 'AC Repair', date: 'Dec 5, 2024', amount: '₹1299', status: 'Pending', method: 'COD' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Payment History</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-4">
          {bills.map((bill) => (
            <div key={bill.id} className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{bill.service}</h3>
                  <p className="text-sm text-gray-600">Invoice: {bill.id}</p>
                  <p className="text-sm text-gray-600">{bill.date} • {bill.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{bill.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    bill.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {bill.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded text-sm">
                  <Download size={14} /> Download
                </button>
                <button className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white rounded text-sm">
                  <Eye size={14} /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPayments;
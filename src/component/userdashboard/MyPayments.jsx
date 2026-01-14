import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Download, Wallet, Plus, Eye, RefreshCw } from 'lucide-react';

const MyPayments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bills');

  const bills = [
    { id: 'INV001', service: 'Electrician', date: 'Dec 15, 2024', amount: '₹799', status: 'Paid', method: 'UPI' },
    { id: 'INV002', service: 'Plumber', date: 'Dec 10, 2024', amount: '₹599', status: 'Paid', method: 'Card' },
    { id: 'INV003', service: 'AC Repair', date: 'Dec 5, 2024', amount: '₹1299', status: 'Pending', method: 'Wallet' }
  ];

  const walletData = {
    balance: 1200,
    cashback: 150,
    credits: 50
  };

  const transactions = [
    { id: 'TXN001', type: 'Credit', amount: '+₹200', desc: 'Cashback from AC service', date: 'Dec 16' },
    { id: 'TXN002', type: 'Debit', amount: '-₹799', desc: 'Payment for Electrician', date: 'Dec 15' },
    { id: 'TXN003', type: 'Credit', amount: '+₹500', desc: 'Wallet top-up', date: 'Dec 12' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Payments & Bills</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Wallet Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold mb-4">My Wallet</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-blue-100 text-sm">Balance</p>
                  <p className="text-2xl font-bold">₹{walletData.balance}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Cashback</p>
                  <p className="text-xl font-semibold">₹{walletData.cashback}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Credits</p>
                  <p className="text-xl font-semibold">₹{walletData.credits}</p>
                </div>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <Plus size={16} /> Add Money
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {['bills', 'transactions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              {tab === 'bills' ? 'Bills & Invoices' : 'Transactions'}
            </button>
          ))}
        </div>

        {activeTab === 'bills' ? (
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
        ) : (
          <div className="space-y-4">
            {transactions.map((txn) => (
              <div key={txn.id} className="bg-white p-4 rounded-lg border flex justify-between items-center">
                <div>
                  <p className="font-medium">{txn.desc}</p>
                  <p className="text-sm text-gray-600">{txn.date}</p>
                </div>
                <span className={`font-bold ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {txn.amount}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPayments;
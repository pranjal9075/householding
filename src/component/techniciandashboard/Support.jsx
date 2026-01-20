import React from 'react';
import { MessageCircle, Phone, AlertCircle, HelpCircle } from 'lucide-react';

const Support = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="font-bold text-gray-800">Support & Help</h3>
        <p className="text-sm text-gray-500 mt-1">Get help and raise issues</p>
      </div>
      <div className="p-6 space-y-4">
        <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
          <MessageCircle className="text-blue-600" size={20} />
          <div>
            <h4 className="font-medium text-gray-800">Chat with Admin</h4>
            <p className="text-sm text-gray-500">Get instant help from our support team</p>
          </div>
        </button>
        
        <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
          <Phone className="text-green-600" size={20} />
          <div>
            <h4 className="font-medium text-gray-800">Call Support</h4>
            <p className="text-sm text-gray-500">+91 1800-123-4567 (Toll Free)</p>
          </div>
        </button>
        
        <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
          <AlertCircle className="text-orange-600" size={20} />
          <div>
            <h4 className="font-medium text-gray-800">Raise an Issue</h4>
            <p className="text-sm text-gray-500">Report problems or complaints</p>
          </div>
        </button>
        
        <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
          <HelpCircle className="text-purple-600" size={20} />
          <div>
            <h4 className="font-medium text-gray-800">FAQ & Help Center</h4>
            <p className="text-sm text-gray-500">Find answers to common questions</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Support;
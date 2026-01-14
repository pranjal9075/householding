import { Sidebar } from 'lucide-react';
import React from 'react';


const ServicePartners = () => {
  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 md:ml-72 p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black text-slate-800 mb-8">Service Partners</h1>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-600">Service Partners management content will go here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicePartners;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  
  // Find the specific service data based on the URL slug
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20">Service Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <Link to="/" className="text-blue-500 mb-6 inline-block">← Back to Services</Link>
      
      <div className="flex flex-col items-center border p-10 rounded-2xl shadow-lg">
        <img src={service.icon} alt={service.name} className="w-48 h-48 mb-6" />
        <h1 className="text-4xl font-bold text-[#4472c4] mb-4">{service.name}</h1>
        <p className="text-gray-600 text-center text-lg">
          Detailed information about our {service.name} goes here.
        </p>
        <button className="mt-8 bg-[#4472c4] text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition">
          Book Service
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
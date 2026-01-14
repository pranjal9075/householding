import React from 'react';
import { Navigation, Phone, Wrench, CheckCircle, MapPin, DollarSign } from 'lucide-react';

const ActiveJobCard = ({ job, onStatusUpdate }) => {
  const getStatusButton = () => {
    switch(job.bookingStatus) {
      case 'ASSIGNED':
        return (
          <button 
            onClick={() => onStatusUpdate(job.id, 'ON_THE_WAY')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
          >
            <Navigation size={18} /> Start Journey
          </button>
        );
      case 'ON_THE_WAY':
        return (
          <button 
            onClick={() => onStatusUpdate(job.id, 'ARRIVED')}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 flex items-center gap-2"
          >
            <CheckCircle size={18} /> Mark Arrived
          </button>
        );
      case 'ARRIVED':
        return (
          <button 
            onClick={() => onStatusUpdate(job.id, 'IN_PROGRESS')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 flex items-center gap-2"
          >
            <Wrench size={18} /> Start Service
          </button>
        );
      case 'IN_PROGRESS':
        return (
          <button 
            onClick={() => onStatusUpdate(job.id, 'COMPLETED')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 flex items-center gap-2"
          >
            <CheckCircle size={18} /> Complete Service
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        Active Job
        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
          {job.bookingStatus.replace('_', ' ')}
        </span>
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold text-lg">{job.service}</h4>
          <p className="opacity-90">Customer: {job.customer}</p>
          <p className="opacity-90 flex items-center gap-1 mt-1">
            <MapPin size={16} /> {job.location}
          </p>
          <p className="opacity-90 flex items-center gap-1 mt-1">
            <DollarSign size={16} /> Rs {job.amount}
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          {getStatusButton()}
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 flex items-center justify-center gap-2">
            <Phone size={18} /> Call Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveJobCard;

import React, { useState, useEffect } from 'react';
import { MapPin, DollarSign, Clock, Timer, CheckSquare, X } from 'lucide-react';

const JobRequestCard = ({ request, onAccept, onReject }) => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onReject(request.id);
    }
  }, [countdown]);

  return (
    <div className="border-2 border-orange-400 bg-orange-50 rounded-xl p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{request.service}</h4>
          <p className="text-gray-600 text-sm">Customer: {request.customer}</p>
          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {request.area}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {request.time}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">Rs {request.amount}</p>
          <div className="text-red-600 font-bold flex items-center gap-1 mt-1">
            <Timer size={16} /> {countdown}s
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button 
          onClick={() => onAccept(request.id)}
          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2"
        >
          <CheckSquare size={18} /> Accept
        </button>
        <button 
          onClick={() => onReject(request.id)}
          className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-2"
        >
          <X size={18} /> Reject
        </button>
      </div>
    </div>
  );
};

export default JobRequestCard;

import React from 'react';
import { User, Wrench, MapPin, DollarSign, Clock, Timer, CheckSquare, X } from 'lucide-react';

const JobRequests = ({ 
  newRequests, 
  myProfile, 
  isOnline, 
  requestCountdown, 
  handleAcceptRequest, 
  handleRejectRequest 
}) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="font-bold text-gray-800 text-red-600 flex items-center gap-2">
          🔥 New Job Requests - {myProfile.role}
          {newRequests.length > 0 && (
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
              {newRequests.length} pending
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Only {myProfile.role.toLowerCase()} jobs will appear here</p>
      </div>
      <div className="divide-y">
        {newRequests.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            {isOnline ? 'No new job requests at the moment' : 'Go online to receive job requests'}
          </div>
        ) : (
          newRequests.map((request) => (
            <div key={request.id} className="p-6 border-l-4 border-blue-500">
              {request.isAssigned ? (
                <div className="text-center py-8">
                  <p className="text-red-600 font-bold text-lg">❌ Job already assigned to another technician</p>
                </div>
              ) : (
                <>
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <User size={18} className="text-blue-600" />
                      {request.customer}
                    </h3>
                  </div>

                  <div className="mb-3">
                    <p className="text-gray-700 flex items-center gap-2">
                      <Wrench size={16} className="text-orange-600" />
                      <span className="font-medium">Service:</span> {request.serviceType} - {request.service}
                    </p>
                  </div>

                  <div className="mb-3">
                    <p className="text-gray-700 flex items-center gap-2">
                      <MapPin size={16} className="text-red-500" />
                      <span className="font-medium">Location:</span> {request.area} ({request.distance})
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium text-gray-800 mb-2">Problem Description:</p>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{request.problemDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-green-600" />
                      <span className="font-bold text-green-600 text-lg">₹{request.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-600" />
                      <span className="text-gray-700">{request.timeSlot}</span>
                    </div>
                  </div>

                  <div className="mb-4 text-center">
                    <div className="text-red-600 font-bold flex items-center justify-center gap-1">
                      <Timer size={16} /> {requestCountdown[request.id] || request.countdown}s remaining
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleAcceptRequest(request.id)}
                      className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2 transition-colors"
                    >
                      <CheckSquare size={18} /> Accept Job
                    </button>
                    <button 
                      onClick={() => handleRejectRequest(request.id)}
                      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-2 transition-colors"
                    >
                      <X size={18} /> Reject
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default JobRequests;
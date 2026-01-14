import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, CheckCircle, Truck, User, MessageCircle, Share2, Navigation } from 'lucide-react';

const TrackService = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState('');

  const trackingSteps = [
    { id: 1, title: 'Booking Confirmed', time: '10:30 AM', completed: true, description: 'Your service request has been confirmed' },
    { id: 2, title: 'Technician Assigned', time: '11:00 AM', completed: true, description: 'Ramesh Kumar has been assigned to your service' },
    { id: 3, title: 'On the way', time: '2:00 PM', completed: false, current: true, description: 'Technician is traveling to your location' },
    { id: 4, title: 'Service Started', time: '', completed: false, description: 'Technician has arrived and service has begun' },
    { id: 5, title: 'Service Completed', time: '', completed: false, description: 'Service completed successfully' }
  ];

  const serviceDetails = {
    id: 'RB001',
    service: 'Electrician Service',
    technician: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    estimatedTime: '15 mins',
    address: '123, Anand Vihar, Delhi - 110092',
    technicianPhoto: null,
    vehicleNumber: 'DL 01 AB 1234',
    otp: '1234'
  };

  const handleShareOTP = () => {
    setShowOTPModal(true);
  };

  const handleCallTechnician = () => {
    window.open(`tel:${serviceDetails.phone}`);
  };

  const handleChatTechnician = () => {
    navigate('/chat-technician', { state: { booking: serviceDetails } });
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate technician location updates
      console.log('Updating technician location...');
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Live Tracking</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Live Map Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Technician Location</h2>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin size={48} className="text-blue-500 mx-auto mb-2" />
              <p className="text-gray-600">Live map will be displayed here</p>
              <p className="text-sm text-gray-500">Technician is 2.5 km away</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition">
              <Navigation size={16} />
              Open in Maps
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Info Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{serviceDetails.service}</h2>
                <p className="text-gray-600">Booking ID: {serviceDetails.id}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                On the way
              </span>
            </div>

            {/* Technician Info */}
            <div className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {serviceDetails.technicianPhoto ? (
                  <img src={serviceDetails.technicianPhoto} alt="Technician" className="w-full h-full object-cover" />
                ) : (
                  <User size={24} className="text-gray-500" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{serviceDetails.technician}</h3>
                <p className="text-sm text-gray-600">{serviceDetails.phone}</p>
                <p className="text-sm text-gray-600">Vehicle: {serviceDetails.vehicleNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span className="text-gray-700">ETA: {serviceDetails.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-500" />
                <span className="text-gray-700">Service Location</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600">{serviceDetails.address}</p>
            </div>

            {/* OTP Section */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-yellow-800">Service OTP</p>
                  <p className="text-2xl font-bold text-yellow-900">{serviceDetails.otp}</p>
                  <p className="text-sm text-yellow-700">Share this OTP when technician arrives</p>
                </div>
                <button 
                  onClick={handleShareOTP}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition"
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleCallTechnician}
                className="bg-green-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition"
              >
                <Phone size={16} />
                Call Technician
              </button>
              <button 
                onClick={handleChatTechnician}
                className="bg-blue-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition"
              >
                <MessageCircle size={16} />
                Chat
              </button>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Service Progress</h3>
            
            <div className="space-y-6">
              {trackingSteps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : step.current 
                          ? 'bg-blue-500 text-white animate-pulse' 
                          : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.completed ? (
                        <CheckCircle size={20} />
                      ) : step.current ? (
                        <Truck size={20} />
                      ) : (
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div className={`w-0.5 h-12 mt-2 ${
                        step.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <h4 className={`font-semibold text-lg ${
                      step.completed || step.current ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm mt-1 ${
                      step.completed || step.current ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                    {step.time && (
                      <p className="text-sm text-gray-500 mt-1">{step.time}</p>
                    )}
                    {step.current && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                          <p className="text-sm font-medium">Live update: Technician is 5 minutes away</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Actions */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/support')}
              className="bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Contact Support
            </button>
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to cancel this service?')) {
                  navigate('/user-dashboard');
                }
              }}
              className="bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition"
            >
              Cancel Service
            </button>
          </div>
        </div>
      </div>

      {/* OTP Share Modal */}
      {showOTPModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Share OTP</h3>
            <p className="text-gray-600 mb-4">Your service OTP is:</p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-blue-600">{serviceDetails.otp}</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(serviceDetails.otp);
                  alert('OTP copied to clipboard!');
                  setShowOTPModal(false);
                }}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Copy OTP
              </button>
              <button 
                onClick={() => setShowOTPModal(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default TrackService;
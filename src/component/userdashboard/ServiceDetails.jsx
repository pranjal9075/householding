import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Phone, MapPin, User, CreditCard, Star } from 'lucide-react';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking || {
    id: 'RB001',
    service: 'Electrician',
    date: 'Dec 18, 2024',
    time: '2:00 PM',
    technician: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    status: 'Completed',
    amount: '₹799'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'On the way': return 'bg-blue-100 text-blue-700';
      case 'Confirmed': return 'bg-green-100 text-green-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              // Check if we came from user dashboard or my bookings
              const referrer = document.referrer;
              if (referrer.includes('/user-dashboard')) {
                navigate('/user-dashboard');
              } else {
                navigate('/my-bookings');
              }
            }} 
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Service Details</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {/* Service Info */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{booking.service}</h2>
              <p className="text-gray-600">Booking ID: {booking.id}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
              {booking.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-semibold">{booking.date} at {booking.time}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-semibold text-lg">{booking.amount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technician Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Technician Details</h3>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={24} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{booking.technician}</h4>
              <p className="text-gray-600">Certified Technician</p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">4.8 (127 reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Phone size={20} className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Contact Number</p>
              <p className="font-semibold">{booking.phone}</p>
            </div>
          </div>
        </div>

        {/* Service Address */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Service Address</h3>
          
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-gray-500 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Service Location</p>
              <p className="font-semibold">123, Anand Vihar, Near Metro Station</p>
              <p className="text-gray-600">Delhi - 110092</p>
            </div>
          </div>
        </div>

        {/* Service Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Service Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Service Charge</span>
              <span className="font-semibold">₹699</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Material Cost</span>
              <span className="font-semibold">₹50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GST (18%)</span>
              <span className="font-semibold">₹50</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold">{booking.amount}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {booking.status === 'Completed' ? (
            <>
              <button className="flex-1 bg-yellow-500 text-white py-3 rounded-lg font-medium">
                Rate Service
              </button>
              <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-medium">
                Book Again
              </button>
            </>
          ) : booking.status === 'On the way' ? (
            <>
              <button className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium">
                Call Technician
              </button>
              <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-medium">
                Track Service
              </button>
            </>
          ) : (
            <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-medium">
              Contact Support
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, CreditCard, Home } from 'lucide-react';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    bookingId, 
    serviceName, 
    amount, 
    paymentMethod, 
    booking_status = 'pending', 
    payment_status = 'unpaid' 
  } = location.state || {};

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'unpaid': return 'text-orange-600 bg-orange-100';
      case 'pending': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
            <Home size={20} />
          </button>
          <h1 className="text-xl font-bold">Booking Confirmation</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600">Your service request has been submitted successfully</p>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Booking Details</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Booking ID</span>
              <span className="font-semibold text-gray-800">{bookingId}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Service</span>
              <span className="font-semibold text-gray-800">{serviceName}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold text-gray-800">₹{amount}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-semibold text-gray-800">{paymentMethod}</span>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Booking Status */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="text-blue-600" size={24} />
              <h4 className="font-bold text-gray-800">Booking Status</h4>
            </div>
            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking_status)}`}>
              {booking_status.charAt(0).toUpperCase() + booking_status.slice(1)}
            </div>
          </div>

          {/* Payment Status */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="text-green-600" size={24} />
              <h4 className="font-bold text-gray-800">Payment Status</h4>
            </div>
            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payment_status)}`}>
              {payment_status.charAt(0).toUpperCase() + payment_status.slice(1)}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h4 className="font-bold text-blue-800 mb-3">What's Next?</h4>
          <div className="space-y-2 text-blue-700">
            {payment_status === 'unpaid' ? (
              <>
                <p>• Your booking is confirmed with Cash on Delivery</p>
                <p>• A technician will be assigned shortly</p>
                <p>• You can pay after service completion</p>
              </>
            ) : (
              <>
                <p>• Payment received successfully</p>
                <p>• A technician will be assigned shortly</p>
                <p>• You'll receive updates via SMS/WhatsApp</p>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/user-dashboard')}
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate('/track-service')}
            className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Track Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
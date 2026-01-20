import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, MapPin, Phone, Calendar, Clock, Star, Download, Repeat, X, MessageCircle, CreditCard } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';

const MyBookings = () => {
  const navigate = useNavigate();
  const { bookings, getUserBookings } = useBooking();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('ongoing');

  // Get user bookings from context
  const userBookings = getUserBookings(user?.id || 'guest');
  
  // Categorize bookings
  const categorizedBookings = {
    ongoing: userBookings.filter(b => b.booking_status === 'pending' || b.booking_status === 'accepted'),
    completed: userBookings.filter(b => b.booking_status === 'completed'),
    cancelled: userBookings.filter(b => b.booking_status === 'cancelled')
  };

  const tabs = [
    { key: 'ongoing', label: 'Ongoing', count: categorizedBookings.ongoing.length },
    { key: 'completed', label: 'Completed', count: categorizedBookings.completed.length },
    { key: 'cancelled', label: 'Cancelled', count: categorizedBookings.cancelled.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'accepted': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'unpaid': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      alert('Booking cancelled successfully!');
    }
  };

  const handleRateService = (bookingId) => {
    navigate('/feedback-form', { state: { bookingId } });
  };

  const BookingCard = ({ booking }) => (
    <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{booking.serviceName}</h3>
          <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.booking_status)}`}>
            {booking.booking_status?.charAt(0).toUpperCase() + booking.booking_status?.slice(1)}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(booking.payment_status)}`}>
            {booking.payment_status?.charAt(0).toUpperCase() + booking.payment_status?.slice(1)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{booking.preferredDate} at {booking.timeSlot}</span>
        </div>
        {booking.technician && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} />
            <span>{booking.technician.name}</span>
          </div>
        )}
      </div>

      {/* Payment Method */}
      {booking.payment_method && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CreditCard size={16} />
            <span>Payment: {booking.payment_method}</span>
          </div>
        </div>
      )}

      {/* Problem Description */}
      {booking.problemDescription && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Issue:</strong> {booking.problemDescription}
          </p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <span className="font-bold text-xl text-gray-800">₹{booking.amount}</span>
        <div className="flex gap-2">
          <button 
            onClick={() => navigate('/service-details', { state: { booking } })}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-gray-600 transition"
          >
            <Eye size={16} />
            View
          </button>
          
          {booking.booking_status === 'pending' && (
            <button 
              onClick={() => handleCancelBooking(booking.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-red-600 transition"
            >
              <X size={16} />
              Cancel
            </button>
          )}
          
          {(booking.booking_status === 'cancelled' || booking.booking_status === 'completed') && (
            <button 
              onClick={() => navigate('/', { state: { rebookService: booking.serviceName } })}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-purple-600 transition"
            >
              <Repeat size={16} />
              Rebook
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">My Bookings</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                activeTab === tab.key
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {categorizedBookings[activeTab].length > 0 ? (
            categorizedBookings[activeTab].map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Calendar size={64} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No {activeTab} bookings</h3>
              <p className="text-gray-500 mb-6">You don't have any {activeTab} bookings at the moment.</p>
              <button 
                onClick={() => navigate('/')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book a Service
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
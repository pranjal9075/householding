import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, MapPin, Phone, Calendar, Clock, Star, Download, Repeat, X, MessageCircle } from 'lucide-react';

const MyBookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ongoing');

  const bookings = {
    ongoing: [
      {
        id: 'RB001',
        service: 'Electrician',
        date: 'Dec 18, 2024',
        time: '2:00 PM',
        technician: 'Ramesh Kumar',
        phone: '+91 98765 43210',
        status: 'On the way',
        amount: '₹799',
        canCancel: true,
        canTrack: true
      }
    ],
    completed: [
      {
        id: 'RB003',
        service: 'Plumber',
        date: 'Dec 15, 2024',
        time: '3:00 PM',
        technician: 'Rajesh Singh',
        phone: '+91 98765 43212',
        status: 'Completed',
        amount: '₹599',
        rating: 0,
        canRebook: true
      },
      {
        id: 'RB005',
        service: 'AC Repair',
        date: 'Dec 10, 2024',
        time: '11:00 AM',
        technician: 'Suresh Sharma',
        phone: '+91 98765 43211',
        status: 'Completed',
        amount: '₹1299',
        rating: 5,
        canRebook: true
      }
    ],
    cancelled: [
      {
        id: 'RB004',
        service: 'House Cleaning',
        date: 'Dec 12, 2024',
        time: '11:00 AM',
        technician: 'Priya Devi',
        phone: '+91 98765 43213',
        status: 'Cancelled',
        amount: '₹1199',
        cancelReason: 'Customer request',
        canRebook: true
      }
    ]
  };

  const tabs = [
    { key: 'ongoing', label: 'Ongoing', count: bookings.ongoing.length },
    { key: 'completed', label: 'Completed', count: bookings.completed.length },
    { key: 'cancelled', label: 'Cancelled', count: bookings.cancelled.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'On the way': return 'bg-blue-100 text-blue-700';
      case 'Working': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
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
          <h3 className="font-bold text-lg text-gray-800">{booking.service}</h3>
          <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
          {booking.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{booking.date} at {booking.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone size={16} />
          <span>{booking.technician}</span>
        </div>
      </div>

      {booking.cancelReason && (
        <div className="mb-4 p-3 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700">Cancelled: {booking.cancelReason}</p>
        </div>
      )}

      {booking.status === 'Completed' && booking.rating === 0 && (
        <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-700 mb-2">Rate your service experience</p>
          <button 
            onClick={() => handleRateService(booking.id)}
            className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
          >
            Give Rating ⭐
          </button>
        </div>
      )}

      {booking.status === 'Completed' && booking.rating > 0 && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-gray-600">Your rating:</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < booking.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} 
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <span className="font-bold text-xl text-gray-800">{booking.amount}</span>
        <div className="flex gap-2">
          {booking.canTrack && (
            <button 
              onClick={() => navigate('/track-service', { state: { booking } })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-blue-600 transition"
            >
              <MapPin size={16} />
              Track
            </button>
          )}
          
          {booking.status === 'Ongoing' && (
            <button 
              onClick={() => navigate('/chat-technician', { state: { booking } })}
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-green-600 transition"
            >
              <MessageCircle size={16} />
              Chat
            </button>
          )}
          
          <button 
            onClick={() => navigate('/service-details', { state: { booking } })}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-gray-600 transition"
          >
            <Eye size={16} />
            View
          </button>
          
          {booking.canCancel && (
            <button 
              onClick={() => handleCancelBooking(booking.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-red-600 transition"
            >
              <X size={16} />
              Cancel
            </button>
          )}
          
          {booking.canRebook && (
            <button 
              onClick={() => navigate('/', { state: { rebookService: booking.service } })}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-purple-600 transition"
            >
              <Repeat size={16} />
              Rebook
            </button>
          )}
          
          {booking.status === 'Completed' && (
            <button 
              onClick={() => navigate('/download-bill', { state: { booking } })}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-orange-600 transition"
            >
              <Download size={16} />
              Bill
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
          {bookings[activeTab].length > 0 ? (
            bookings[activeTab].map((booking) => (
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
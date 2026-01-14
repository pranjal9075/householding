import React from 'react';

import LoginRequiredModal from './LoginRequiredModal';
import Login from '../Login';
import BookingForm from '../booking/BookingForm';
import {useBookingFlow} from '../../hooks/useBookingFlow';

const BookNowButton = ({ 
  serviceName, 
  className = "bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors",
  children = "Book Now"
}) => {
  const {
    showLoginRequired,
    showLogin,
    showBookingForm,
    pendingService,
    handleBookNow,
    handleLoginRequired,
    handleLoginSuccess,
    handleCloseAll,
    handleBookingFormClose
  } = useBookingFlow();

  return (
    <>
      <button
        onClick={() => handleBookNow(serviceName)}
        className={className}
      >
        {children}
      </button>

      {/* Authentication Modals */}
      <LoginRequiredModal
        isOpen={showLoginRequired}
        onClose={handleCloseAll}
        onLoginClick={handleLoginRequired}
        serviceName={pendingService}
      />

      <Login
        isOpen={showLogin}
        onClose={handleCloseAll}
        onLoginSuccess={handleLoginSuccess}
      />

      <BookingForm
        isOpen={showBookingForm}
        onClose={handleBookingFormClose}
        serviceName={pendingService}
      />
    </>
  );
};

export default BookNowButton;
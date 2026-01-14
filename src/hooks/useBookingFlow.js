import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const useBookingFlow = () => {
  const { isLoggedIn } = useAuth();
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [pendingService, setPendingService] = useState(null);

  const handleBookNow = (serviceName) => {
    if (!isLoggedIn) {
      setPendingService(serviceName);
      setShowLoginRequired(true);
      return;
    }
    
    // User is logged in, show booking form directly
    setPendingService(serviceName);
    setShowBookingForm(true);
  };

  const handleLoginRequired = () => {
    setShowLoginRequired(false);
    setShowLogin(true);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    // After successful login, show booking form for the pending service
    if (pendingService) {
      setShowBookingForm(true);
    }
  };

  const handleCloseAll = () => {
    setShowLoginRequired(false);
    setShowLogin(false);
    setShowBookingForm(false);
    setPendingService(null);
  };

  const handleBookingFormClose = () => {
    setShowBookingForm(false);
    setPendingService(null);
  };

  return {
    showLoginRequired,
    showLogin,
    showBookingForm,
    pendingService,
    handleBookNow,
    handleLoginRequired,
    handleLoginSuccess,
    handleCloseAll,
    handleBookingFormClose,
    setShowLoginRequired
  };
};
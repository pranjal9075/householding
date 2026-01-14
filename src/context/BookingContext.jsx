import React, { createContext, useContext, useState, useReducer } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

// Booking reducer for managing booking state
const bookingReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_BOOKING':
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
                currentBooking: action.payload
            };
        case 'UPDATE_BOOKING_STATUS':
            return {
                ...state,
                bookings: state.bookings.map(booking =>
                    booking.id === action.payload.id
                        ? { ...booking, status: action.payload.status, technician: action.payload.technician }
                        : booking
                )
            };
        case 'TECHNICIAN_ACCEPT_BOOKING':
            return {
                ...state,
                bookings: state.bookings.map(booking =>
                    booking.id === action.payload.bookingId
                        ? { ...booking, status: 'accepted', technician: action.payload.technician }
                        : booking
                )
            };
        case 'SET_CURRENT_BOOKING':
            return {
                ...state,
                currentBooking: action.payload
            };
        case 'CLEAR_CURRENT_BOOKING':
            return {
                ...state,
                currentBooking: null
            };
        case 'SET_SELECTED_TECHNICIAN':
            return {
                ...state,
                selectedTechnician: action.payload
            };
        default:
            return state;
    }
};

const initialState = {
    bookings: [],
    currentBooking: null,
    selectedTechnician: null
};

export const BookingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookingReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    const createBooking = async (bookingData) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const newBooking = {
                ...bookingData,
                id: `BK${Date.now()}`,
                status: 'searching', // User creates booking, system searches for technicians
                createdAt: new Date().toISOString()
            };
            
            dispatch({ type: 'CREATE_BOOKING', payload: newBooking });
            
            // Simulate technician acceptance after 3 seconds
            setTimeout(() => {
                const mockTechnician = {
                    name: 'Raj Kumar',
                    phone: '+91 98765 11111',
                    rating: 4.8,
                    skill: 'Plumbing'
                };
                dispatch({ 
                    type: 'TECHNICIAN_ACCEPT_BOOKING', 
                    payload: { 
                        bookingId: newBooking.id, 
                        technician: mockTechnician 
                    } 
                });
            }, 3000);
            
            return newBooking;
        } catch (error) {
            console.error('Error creating booking:', error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const updateBookingStatus = (bookingId, status) => {
        dispatch({
            type: 'UPDATE_BOOKING_STATUS',
            payload: { id: bookingId, status }
        });
    };

    const setCurrentBooking = (booking) => {
        dispatch({ type: 'SET_CURRENT_BOOKING', payload: booking });
    };

    const clearCurrentBooking = () => {
        dispatch({ type: 'CLEAR_CURRENT_BOOKING' });
    };

    const setSelectedTechnician = (technician) => {
        dispatch({ type: 'SET_SELECTED_TECHNICIAN', payload: technician });
    };

    const getBookingById = (id) => {
        return state.bookings.find(booking => booking.id === id);
    };

    const getUserBookings = (userId) => {
        return state.bookings.filter(booking => booking.userId === userId);
    };

    const value = {
        ...state,
        isLoading,
        createBooking,
        updateBookingStatus,
        setCurrentBooking,
        clearCurrentBooking,
        setSelectedTechnician,
        getBookingById,
        getUserBookings
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};
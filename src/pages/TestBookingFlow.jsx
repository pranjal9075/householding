import React from 'react';
import BookNowButton from '../component/common/BookNowButton';

const TestBookingFlow = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Test Booking Flow
          </h1>
          <p className="text-gray-600 text-lg">
            Test the authentication flow for booking services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test Service Cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">AC Repair</h3>
            <p className="text-gray-600 mb-4">Professional AC repair and maintenance services</p>
            <BookNowButton 
              serviceName="AC Repair"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Plumber Service</h3>
            <p className="text-gray-600 mb-4">Expert plumbing solutions for your home</p>
            <BookNowButton 
              serviceName="Plumber Service"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">House Cleaning</h3>
            <p className="text-gray-600 mb-4">Complete house cleaning and maintenance</p>
            <BookNowButton 
              serviceName="House Cleaning"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            />
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">How the Flow Works</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <p>User clicks "Book Now" button</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <p>System checks if user is logged in</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <p>If not logged in: Shows "Login Required" modal</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <p>User clicks "Continue with Login" → Login modal opens</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
              <p>After successful login → Booking form opens automatically</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
              <p>If already logged in: Booking form opens directly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestBookingFlow;
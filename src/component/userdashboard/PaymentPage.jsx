import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet, Building2, CheckCircle, Banknote } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updatePaymentStatus } = useBooking();
  const { serviceName = 'Plumbing Repair', amount = '299', bookingData } = location.state || {};
  
  const [selectedMethod, setSelectedMethod] = useState('');
  const [processing, setProcessing] = useState(false);

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: '📱', desc: 'Google Pay, PhonePe, Paytm', type: 'online' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', desc: 'Visa, Mastercard, Rupay', type: 'online' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦', desc: 'All major banks', type: 'online' },
    { id: 'cod', name: 'Cash on Delivery', icon: '💵', desc: 'Pay after service completion', type: 'cod' }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    setProcessing(true);
    
    try {
      // Create booking first
      const bookingId = `BK${Date.now()}`;
      
      if (selectedMethod === 'cod') {
        // For COD, booking is created but payment remains unpaid
        setTimeout(() => {
          setProcessing(false);
          navigate('/booking-confirmation', { 
            state: { 
              bookingId,
              serviceName, 
              amount,
              paymentMethod: 'Cash on Delivery',
              booking_status: 'pending',
              payment_status: 'unpaid'
            } 
          });
        }, 1000);
      } else {
        // For online payment, simulate payment processing
        setTimeout(() => {
          // Update payment status to paid
          updatePaymentStatus(bookingId, 'paid', selectedMethod);
          
          setProcessing(false);
          navigate('/booking-confirmation', { 
            state: { 
              bookingId,
              serviceName, 
              amount,
              paymentMethod: paymentMethods.find(m => m.id === selectedMethod)?.name,
              booking_status: 'pending',
              payment_status: 'paid'
            } 
          });
        }, 2000);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Payment</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {/* Payment Summary */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl mb-6 shadow-lg">
          <div className="text-center">
            <p className="text-green-100 text-sm mb-2">You are paying</p>
            <h2 className="text-5xl font-bold mb-3">₹{amount}</h2>
            <div className="bg-white bg-opacity-20 rounded-lg p-3 inline-block">
              <p className="text-sm">Service: <span className="font-semibold">{serviceName}</span></p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Select Payment Method</h3>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{method.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{method.name}</h4>
                    <p className="text-sm text-gray-600">{method.desc}</p>
                    {method.type === 'cod' && (
                      <p className="text-xs text-orange-600 mt-1">💡 No advance payment required</p>
                    )}
                  </div>
                  {selectedMethod === method.id && (
                    <CheckCircle className="text-blue-500" size={24} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={processing}
          className={`w-full py-4 rounded-xl font-bold text-lg transition ${
            processing
              ? 'bg-gray-400 cursor-not-allowed'
              : selectedMethod === 'cod'
              ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
          }`}
        >
          {processing 
            ? 'Processing...' 
            : selectedMethod === 'cod' 
            ? 'Confirm Booking (Pay Later)' 
            : `Pay ₹${amount}`
          }
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          🔒 Your {selectedMethod === 'cod' ? 'booking' : 'payment'} is secure
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;

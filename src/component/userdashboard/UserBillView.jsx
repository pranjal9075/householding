import React, { useState } from 'react';
import { CreditCard, AlertCircle, CheckCircle, Clock, FileText } from 'lucide-react';

const UserBillView = ({ bill, onPayment, onRaiseIssue, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const handlePayNow = () => {
    setShowPayment(true);
  };

  const handlePayment = () => {
    onPayment({
      billId: bill.billId,
      method: paymentMethod,
      amount: bill.totalAmount,
      status: 'PAID',
      paidAt: new Date().toISOString()
    });
  };

  if (showPayment) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <CreditCard className="text-green-600" size={24} />
              Payment Options
            </h3>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹{bill.totalAmount}</div>
                <div className="text-sm text-gray-500">Amount to Pay</div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Cash on Delivery</div>
                  <div className="text-sm text-gray-500">Pay with cash</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">UPI Payment</div>
                  <div className="text-sm text-gray-500">Pay with UPI</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="CARD"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-gray-500">Pay with card</div>
                </div>
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowPayment(false)}
                className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Back
              </button>
              <button
                onClick={handlePayment}
                disabled={!paymentMethod}
                className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-gray-300"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FileText className="text-blue-600" size={24} />
              Service Bill
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Clock className="text-orange-500" size={16} />
            <span className="text-sm text-orange-600 font-medium">Pending Approval</span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium">{bill.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Technician:</span>
              <span className="font-medium">Raj Kumar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium">{new Date(bill.generatedAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-800 mb-3">Bill Breakdown:</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Service Charge:</span>
                <span>₹{bill.serviceCharge}</span>
              </div>
              {bill.extraCharge > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Extra Work:</span>
                  <span>₹{bill.extraCharge}</span>
                </div>
              )}
              {bill.tax > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax:</span>
                  <span>₹{bill.tax}</span>
                </div>
              )}
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total Amount:</span>
                <span className="text-blue-600">₹{bill.totalAmount}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onRaiseIssue}
              className="flex-1 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 flex items-center justify-center gap-2"
            >
              <AlertCircle size={16} />
              Raise Issue
            </button>
            <button
              onClick={handlePayNow}
              className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <CheckCircle size={16} />
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBillView;
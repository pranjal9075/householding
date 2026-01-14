import React, { useState } from 'react';
import { Bell, FileText, Clock, X } from 'lucide-react';


import UserBillView from './UserBillView';

const BillNotification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'bill_ready',
      message: 'Your service bill is ready',
      service: 'Switch Board Repair',
      technician: 'Priya Singh',
      time: '2 minutes ago',
      bill: {
        billId: 'BILL-1703123456789',
        jobId: 3,
        customer: 'Priya Singh',
        service: 'Switch Board Repair',
        serviceCharge: 600,
        extraCharge: 100,
        tax: 35,
        totalAmount: 735,
        status: 'PENDING_USER_APPROVAL',
        generatedAt: new Date().toISOString(),
        description: 'Replaced faulty switch and checked all connections'
      }
    }
  ]);

  const [showBillView, setShowBillView] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const handleViewBill = (notification) => {
    setSelectedBill(notification.bill);
    setShowBillView(true);
  };

  const handlePayment = (payment) => {
    setPaymentData(payment);
    setShowBillView(false);
    setShowInvoice(true);
    
    setNotifications(notifications.map(notif => 
      notif.bill.billId === payment.billId 
        ? { ...notif, bill: { ...notif.bill, status: 'PAID' } }
        : notif
    ));
  };

  const handleRaiseIssue = () => {
    alert('Issue raised successfully! Our team will contact you soon.');
    setShowBillView(false);
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-40 space-y-3 max-w-sm">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-white border border-blue-200 rounded-lg shadow-lg p-4 animate-slide-in">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                  <Bell size={16} />
                </div>
                <div className="text-sm font-medium text-gray-800">
                  {notification.message}
                </div>
              </div>
              <button 
                onClick={() => dismissNotification(notification.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="ml-10 space-y-2">
              <div className="text-sm text-gray-600">
                Service: <span className="font-medium">{notification.service}</span>
              </div>
              <div className="text-sm text-gray-600">
                Amount: <span className="font-medium text-blue-600">₹{notification.bill.totalAmount}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} />
                {notification.time}
              </div>
              
              <button
                onClick={() => handleViewBill(notification)}
                className="w-full mt-3 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <FileText size={14} />
                View Bill
              </button>
            </div>
          </div>
        ))}
      </div>

      {showBillView && selectedBill && (
        <UserBillView
          bill={selectedBill}
          onPayment={handlePayment}
          onRaiseIssue={handleRaiseIssue}
          onClose={() => setShowBillView(false)}
        />
      )}

      {showInvoice && paymentData && selectedBill && (
        <Invoice
          payment={paymentData}
          bill={selectedBill}
          onClose={() => setShowInvoice(false)}
        />
      )}
    </>
  );
};

export default BillNotification;
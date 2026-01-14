import React from 'react';
import { Download, Share2, FileText } from 'lucide-react';

const Invoice = ({ payment, bill, onClose }) => {
  const invoiceNumber = `INV-${Date.now()}`;
  const currentDate = new Date().toLocaleDateString();

  const handleDownload = () => {
    alert('Invoice downloaded successfully!');
  };

  const handleShare = () => {
    alert('Invoice shared via WhatsApp/Email!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FileText className="text-green-600" size={24} />
              Invoice Generated
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
        </div>

        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">HouseholdServices</h2>
            <p className="text-sm text-gray-500">Professional Home Services</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-700">Invoice Number:</div>
                <div className="font-bold">{invoiceNumber}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Date:</div>
                <div className="font-bold">{currentDate}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Payment Method:</div>
                <div className="font-bold">{payment.method}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">Status:</div>
                <div className="font-bold text-green-600">PAID</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Service Details:</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">{bill.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer:</span>
                <span className="font-medium">{bill.customer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Technician:</span>
                <span className="font-medium">Raj Kumar</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Amount Details:</h4>
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
                <span>Total Paid:</span>
                <span className="text-green-600">₹{payment.amount}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg mb-6">
            <div className="text-sm">
              <div className="font-medium">GST Registration: 29ABCDE1234F1Z5</div>
              <div className="text-gray-600">Thank you for choosing our services!</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download PDF
            </button>
            <button
              onClick={handleShare}
              className="flex-1 px-4 py-2 text-green-600 bg-green-50 rounded-lg hover:bg-green-100 flex items-center justify-center gap-2"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
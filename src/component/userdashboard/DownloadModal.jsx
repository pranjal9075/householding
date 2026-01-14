import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Download, FileText } from 'lucide-react';
import jsPDF from 'jspdf';

const DownloadModal = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadType, setDownloadType] = useState('pdf');

  useEffect(() => {
    if (isOpen && !isCompleted) {
      setProgress(0);
      setIsDownloading(false);
      setIsCompleted(false);
    }
  }, [isOpen]);

  const startDownload = () => {
    setIsDownloading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setIsCompleted(true);
          
          // Generate invoice based on type
          if (downloadType === 'pdf') {
            generatePDFInvoice();
          } else {
            generateHTMLInvoice();
          }
          
          // Auto close after 2 seconds
          setTimeout(() => {
            onClose();
            setIsCompleted(false);
          }, 2000);
          
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const generatePDFInvoice = () => {
    const pdf = new jsPDF();
    
    // Colors
    const primaryColor = [59, 130, 246]; // Blue
    const darkColor = [31, 41, 55]; // Dark gray
    const lightColor = [107, 114, 128]; // Light gray
    
    // Header with logo and title
    pdf.setFillColor(...primaryColor);
    pdf.rect(0, 0, 210, 25, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('🔧 REPAIR BAZAR', 20, 17);
    
    pdf.setFontSize(16);
    pdf.text('INVOICE', 160, 17);
    
    // Invoice details
    pdf.setTextColor(...darkColor);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Invoice #: RB-2024-001', 160, 35);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, 160, 42);
    
    // Bill To section
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Bill To:', 20, 50);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text('Rahul Sharma', 20, 58);
    pdf.text('123 Main Street', 20, 65);
    pdf.text('New Delhi, 110001', 20, 72);
    pdf.text('Phone: +91 9876543210', 20, 79);
    
    // Service Details
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Service Details:', 110, 50);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text('Service Type: Electrician', 110, 58);
    pdf.text('Date: December 15, 2024', 110, 65);
    pdf.text('Time: 2:00 PM - 4:00 PM', 110, 72);
    pdf.text('Technician: Amit Kumar', 110, 79);
    
    // Table header
    const tableY = 95;
    pdf.setFillColor(249, 250, 251);
    pdf.rect(20, tableY, 170, 10, 'F');
    
    pdf.setTextColor(...darkColor);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Description', 25, tableY + 7);
    pdf.text('Qty', 110, tableY + 7);
    pdf.text('Rate', 130, tableY + 7);
    pdf.text('Amount', 160, tableY + 7);
    
    // Table rows
    const items = [
      ['Electrical Repair Service', '1', '₹600', '₹600'],
      ['Switch Replacement', '2', '₹50', '₹100'],
      ['Service Charge', '1', '₹99', '₹99']
    ];
    
    pdf.setFont('helvetica', 'normal');
    let currentY = tableY + 15;
    
    items.forEach((item, index) => {
      pdf.text(item[0], 25, currentY);
      pdf.text(item[1], 110, currentY);
      pdf.text(item[2], 130, currentY);
      pdf.text(item[3], 160, currentY);
      currentY += 8;
    });
    
    // Total row
    pdf.setFillColor(...primaryColor);
    pdf.rect(20, currentY + 5, 170, 10, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Total Amount', 25, currentY + 12);
    pdf.text('₹799', 160, currentY + 12);
    
    // Footer
    pdf.setTextColor(...lightColor);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Thank you for choosing REPAIR BAZAR!', 105, currentY + 35, { align: 'center' });
    pdf.text('For support: support@repairbazar.com | +91 1800-123-4567', 105, currentY + 42, { align: 'center' });
    
    // Add border
    pdf.setDrawColor(...primaryColor);
    pdf.setLineWidth(0.5);
    pdf.rect(15, 30, 180, currentY + 20);
    
    pdf.save('REPAIR_BAZAR_Invoice_RB-2024-001.pdf');
  };

  const generateHTMLInvoice = () => {
    const invoiceHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>REPAIR BAZAR - Invoice</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
            .invoice { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 3px solid #3b82f6; padding-bottom: 20px; }
            .logo { font-size: 28px; font-weight: bold; color: #3b82f6; }
            .invoice-info { text-align: right; }
            .invoice-title { font-size: 24px; color: #1f2937; margin-bottom: 20px; }
            .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
            .detail-section h3 { color: #374151; margin-bottom: 10px; font-size: 16px; }
            .detail-section p { margin: 5px 0; color: #6b7280; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
            th { background-color: #f9fafb; font-weight: 600; color: #374151; }
            .total-row { background-color: #3b82f6; color: white; font-weight: bold; }
            .footer { margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="invoice">
            <div class="header">
                <div class="logo">🔧 REPAIR BAZAR</div>
                <div class="invoice-info">
                    <h2>INVOICE</h2>
                    <p><strong>Invoice #:</strong> RB-2024-001</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                </div>
            </div>
            
            <div class="details-grid">
                <div class="detail-section">
                    <h3>Bill To:</h3>
                    <p><strong>Rahul Sharma</strong></p>
                    <p>123 Main Street</p>
                    <p>New Delhi, 110001</p>
                    <p>Phone: +91 9876543210</p>
                </div>
                <div class="detail-section">
                    <h3>Service Details:</h3>
                    <p><strong>Service Type:</strong> Electrician</p>
                    <p><strong>Date:</strong> December 15, 2024</p>
                    <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
                    <p><strong>Technician:</strong> Amit Kumar</p>
                </div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Electrical Repair Service</td>
                        <td>1</td>
                        <td>₹600</td>
                        <td>₹600</td>
                    </tr>
                    <tr>
                        <td>Switch Replacement</td>
                        <td>2</td>
                        <td>₹50</td>
                        <td>₹100</td>
                    </tr>
                    <tr>
                        <td>Service Charge</td>
                        <td>1</td>
                        <td>₹99</td>
                        <td>₹99</td>
                    </tr>
                    <tr class="total-row">
                        <td colspan="3"><strong>Total Amount</strong></td>
                        <td><strong>₹799</strong></td>
                    </tr>
                </tbody>
            </table>
            
            <div class="footer">
                <p>Thank you for choosing REPAIR BAZAR!</p>
                <p>For support: support@repairbazar.com | +91 1800-123-4567</p>
            </div>
        </div>
    </body>
    </html>
    `;
    
    const blob = new Blob([invoiceHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'REPAIR_BAZAR_Invoice_RB-2024-001.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        
        <div className="text-center">
          {!isCompleted ? (
            <>
              <div className="mb-6">
                <FileText size={48} className="mx-auto text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isDownloading ? 'Generating Invoice...' : 'Download Invoice'}
                </h3>
                <p className="text-gray-600">
                  {isDownloading ? 'Creating your professional invoice' : 'Choose format and download your invoice'}
                </p>
              </div>
              
              {!isDownloading && (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Select Format:</p>
                  <div className="flex gap-2 justify-center mb-4">
                    <button
                      onClick={() => setDownloadType('pdf')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        downloadType === 'pdf' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      📄 PDF
                    </button>
                    <button
                      onClick={() => setDownloadType('html')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        downloadType === 'html' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      🌐 HTML
                    </button>
                  </div>
                </div>
              )}
              
              {isDownloading && (
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-300 ease-out relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{Math.round(progress)}% Complete</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {progress < 30 ? 'Preparing document...' : 
                     progress < 70 ? 'Adding content...' : 
                     progress < 90 ? 'Formatting...' : 'Finalizing...'}
                  </p>
                </div>
              )}
              
              {!isDownloading && (
                <button 
                  onClick={startDownload}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition w-full shadow-lg"
                >
                  <Download size={16} className="inline mr-2" />
                  Generate {downloadType.toUpperCase()}
                </button>
              )}
            </>
          ) : (
            <>
              <div className="mb-6">
                <div className="relative">
                  <CheckCircle size={48} className="mx-auto text-green-500 mb-4 animate-bounce" />
                  <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Success!</h3>
                <p className="text-gray-600">Your {downloadType.toUpperCase()} invoice has been downloaded</p>
                <p className="text-sm text-green-600 mt-2">✓ Professional format with colors and branding</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
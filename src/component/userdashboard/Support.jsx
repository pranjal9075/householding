import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, Mail, Plus, ChevronDown, ChevronUp, AlertTriangle, CreditCard, FileText, HelpCircle, Flag, MessageSquare } from 'lucide-react';

const Support = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('main');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketForm, setTicketForm] = useState({ 
    bookingId: '', 
    category: '', 
    message: '', 
    image: null 
  });
  const [reportForm, setReportForm] = useState({
    bookingId: '',
    reason: '',
    rating: 0,
    comment: ''
  });
  const [newReply, setNewReply] = useState('');

  const myBookings = [
    { id: 'RB001', service: 'Electrician', date: 'Dec 15, 2024' },
    { id: 'RB002', service: 'Plumber', date: 'Dec 10, 2024' }
  ];

  const tickets = [
    { 
      id: 'TKT001', 
      booking: 'RB001', 
      issue: 'Technician Late', 
      status: 'Open', 
      lastUpdate: 'Dec 16, 2024',
      messages: [
        { sender: 'user', message: 'Technician was 2 hours late for my plumbing service', time: 'Dec 15, 2:30 PM' },
        { sender: 'admin', message: 'We apologize for the delay. We have contacted the technician and issued a warning. You will receive a 20% discount on your next booking.', time: 'Dec 16, 10:15 AM' }
      ]
    },
    { 
      id: 'TKT002', 
      booking: 'RB002', 
      issue: 'Payment Problem', 
      status: 'Resolved', 
      lastUpdate: 'Dec 12, 2024',
      messages: [
        { sender: 'user', message: 'Payment was deducted twice from my account', time: 'Dec 10, 3:45 PM' },
        { sender: 'admin', message: 'We have verified the duplicate charge. Refund of ₹600 has been initiated and will reflect in 3-5 business days.', time: 'Dec 11, 11:20 AM' },
        { sender: 'user', message: 'Thank you! Refund received.', time: 'Dec 12, 9:30 AM' }
      ]
    }
  ];

  const faqs = [
    { q: 'How to cancel booking?', a: 'Go to My Bookings → Select booking → Cancel. Charges may apply.' },
    { q: 'Refund policy?', a: 'Refunds processed within 5-7 business days to original payment method.' },
    { q: 'Technician late?', a: 'Contact technician directly or raise a support ticket for assistance.' },
    { q: 'Payment failed?', a: 'Check payment method or try alternative payment option. Contact support if issue persists.' }
  ];

  const supportOptions = [
    { title: 'Raise a Ticket', icon: <Plus />, action: () => setActiveSection('raise-ticket'), color: 'bg-blue-500' },
    { title: 'My Tickets', icon: <FileText />, action: () => setActiveSection('my-tickets'), color: 'bg-green-500' },
    { title: 'Live Chat', icon: <MessageSquare />, action: () => alert('Live Chat: Real-time replies will appear here. Feature coming soon!'), color: 'bg-purple-500' },
    { title: 'Call Support', icon: <Phone />, action: () => window.open('tel:18001234567'), color: 'bg-orange-500' },
    { title: 'WhatsApp Support', icon: <MessageCircle />, action: () => window.open('https://wa.me/918001234567?text=Hi, I need help'), color: 'bg-green-600' },
    { title: 'FAQs', icon: <HelpCircle />, action: () => setActiveSection('faqs'), color: 'bg-indigo-500' },
    { title: 'Report Technician', icon: <Flag />, action: () => setActiveSection('report-technician'), color: 'bg-red-500' },
    { title: 'Payment Issues', icon: <CreditCard />, action: () => setActiveSection('payment-issues'), color: 'bg-yellow-500' }
  ];

  const handleSubmitTicket = () => {
    if (ticketForm.bookingId && ticketForm.category && ticketForm.message) {
      alert('Ticket submitted successfully! You can track replies in My Tickets section.');
      setTicketForm({ bookingId: '', category: '', message: '', image: null });
      setActiveSection('my-tickets');
    }
  };

  const handleReportSubmit = () => {
    if (reportForm.bookingId && reportForm.reason && reportForm.rating) {
      alert('Report submitted successfully! Admin will review and take action. Check My Tickets for updates.');
      setReportForm({ bookingId: '', reason: '', rating: 0, comment: '' });
      setActiveSection('my-tickets');
    }
  };

  const handleSendReply = () => {
    if (newReply.trim() && selectedTicket) {
      alert('Reply sent! Admin will respond within 24 hours.');
      setNewReply('');
    }
  };

  const renderMainScreen = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">How can we help you?</h2>
      
      {/* Quick Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl border text-center">
          <Phone className="mx-auto mb-2 text-green-600" size={24} />
          <p className="font-medium">Call Support</p>
          <p className="text-sm text-gray-600">1800-123-4567</p>
          <p className="text-xs text-gray-500">9 AM - 9 PM</p>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <MessageCircle className="mx-auto mb-2 text-green-600" size={24} />
          <p className="font-medium">WhatsApp</p>
          <p className="text-sm text-gray-600">+91 8001234567</p>
          <p className="text-xs text-gray-500">24/7 Available</p>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <Mail className="mx-auto mb-2 text-blue-600" size={24} />
          <p className="font-medium">Email</p>
          <p className="text-sm text-gray-600">support@repairbazar.com</p>
          <p className="text-xs text-gray-500">24 hrs response</p>
        </div>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {supportOptions.map((option, index) => (
          <button
            key={index}
            onClick={option.action}
            className={`${option.color} text-white p-4 rounded-xl hover:opacity-90 transition flex flex-col items-center gap-2`}
          >
            {option.icon}
            <span className="font-medium">{option.title}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderRaiseTicket = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Raise a Ticket</h2>
      <div className="bg-white p-6 rounded-xl border">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Booking ID</label>
            <select 
              value={ticketForm.bookingId}
              onChange={(e) => setTicketForm({...ticketForm, bookingId: e.target.value})}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Booking</option>
              {myBookings.map(booking => (
                <option key={booking.id} value={booking.id}>
                  {booking.id} - {booking.service} ({booking.date})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Issue Category</label>
            <select 
              value={ticketForm.category}
              onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Category</option>
              <option value="technician-late">Technician Late</option>
              <option value="bad-service">Bad Service</option>
              <option value="payment-problem">Payment Problem</option>
              <option value="cancel-refund">Cancel / Refund</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              value={ticketForm.message}
              onChange={(e) => setTicketForm({...ticketForm, message: e.target.value})}
              placeholder="Describe your issue in detail"
              className="w-full p-3 border rounded-lg" 
              rows="4"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Upload Image (Optional)</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setTicketForm({...ticketForm, image: e.target.files[0]})}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          
          <div className="flex gap-3">
            <button onClick={handleSubmitTicket} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Submit Ticket
            </button>
            <button onClick={() => setActiveSection('main')} className="bg-gray-500 text-white px-6 py-2 rounded-lg">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyTickets = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">My Tickets</h2>
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Ticket ID</th>
                <th className="px-4 py-3 text-left">Booking</th>
                <th className="px-4 py-3 text-left">Issue</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Last Update</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(ticket => (
                <tr key={ticket.id} className="border-t">
                  <td className="px-4 py-3 font-mono">{ticket.id}</td>
                  <td className="px-4 py-3">{ticket.booking}</td>
                  <td className="px-4 py-3">{ticket.issue}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-700' :
                      ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{ticket.lastUpdate}</td>
                  <td className="px-4 py-3">
                    <button 
                      onClick={() => { setSelectedTicket(ticket); setActiveSection('ticket-detail'); }}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
                    >
                      View Chat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={() => setActiveSection('main')} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg">
        Back
      </button>
    </div>
  );

  const renderFAQs = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg border">
            <button 
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-medium">{faq.q}</span>
              {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedFAQ === index && (
              <div className="px-4 pb-4 text-gray-600 border-t">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => setActiveSection('main')} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg">
        Back
      </button>
    </div>
  );

  const renderReportTechnician = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Report a Technician</h2>
      <div className="bg-white p-6 rounded-xl border">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Booking</label>
            <select 
              value={reportForm.bookingId}
              onChange={(e) => setReportForm({...reportForm, bookingId: e.target.value})}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Booking</option>
              {myBookings.map(booking => (
                <option key={booking.id} value={booking.id}>
                  {booking.id} - {booking.service} ({booking.date})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Reason</label>
            <select 
              value={reportForm.reason}
              onChange={(e) => setReportForm({...reportForm, reason: e.target.value})}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Reason</option>
              <option value="unprofessional">Unprofessional Behavior</option>
              <option value="poor-quality">Poor Quality Work</option>
              <option value="overcharging">Overcharging</option>
              <option value="damage">Damaged Property</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(star => (
                <button
                  key={star}
                  onClick={() => setReportForm({...reportForm, rating: star})}
                  className={`text-2xl ${star <= reportForm.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Comment</label>
            <textarea 
              value={reportForm.comment}
              onChange={(e) => setReportForm({...reportForm, comment: e.target.value})}
              placeholder="Provide additional details"
              className="w-full p-3 border rounded-lg" 
              rows="3"
            />
          </div>
          
          <div className="flex gap-3">
            <button onClick={handleReportSubmit} className="bg-red-500 text-white px-6 py-2 rounded-lg">
              Submit Report
            </button>
            <button onClick={() => setActiveSection('main')} className="bg-gray-500 text-white px-6 py-2 rounded-lg">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentIssues = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Issues</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border">
          <h3 className="font-semibold mb-2">Common Payment Issues:</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Payment failed but amount deducted</li>
            <li>• Refund not received</li>
            <li>• Wrong amount charged</li>
            <li>• Payment method not working</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <p className="text-blue-800 font-medium">For immediate payment assistance:</p>
          <div className="flex gap-4 mt-2">
            <button 
              onClick={() => window.open('tel:18001234567')}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Call Support
            </button>
            <button 
              onClick={() => setActiveSection('raise-ticket')}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Raise Ticket
            </button>
          </div>
          <p className="text-sm text-blue-600 mt-2">💬 Replies will appear in My Tickets section</p>
        </div>
      </div>
      <button onClick={() => setActiveSection('main')} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg">
        Back
      </button>
    </div>
  );

  const renderTicketDetail = () => (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => setActiveSection('my-tickets')} className="p-2 hover:bg-gray-100 rounded-lg">
          ←
        </button>
        <h2 className="text-xl font-bold">Ticket #{selectedTicket?.id}</h2>
        <span className={`px-2 py-1 rounded-full text-xs ${
          selectedTicket?.status === 'Open' ? 'bg-yellow-100 text-yellow-700' :
          selectedTicket?.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
          selectedTicket?.status === 'Resolved' ? 'bg-green-100 text-green-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {selectedTicket?.status}
        </span>
      </div>
      
      <div className="bg-white rounded-xl border p-4 mb-4">
        <p><strong>Issue:</strong> {selectedTicket?.issue}</p>
        <p><strong>Booking:</strong> {selectedTicket?.booking}</p>
      </div>

      <div className="bg-white rounded-xl border">
        <div className="p-4 border-b">
          <h3 className="font-semibold">💬 Conversation</h3>
        </div>
        
        <div className="p-4 max-h-96 overflow-y-auto space-y-4">
          {selectedTicket?.messages?.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.sender === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {msg.sender === 'user' ? 'You' : 'Support'} • {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedTicket?.status !== 'Resolved' && (
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input 
                type="text"
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 border rounded-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
              />
              <button 
                onClick={handleSendReply}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        )}
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
          <h1 className="text-xl font-bold">Help & Support</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {activeSection === 'main' && renderMainScreen()}
        {activeSection === 'raise-ticket' && renderRaiseTicket()}
        {activeSection === 'my-tickets' && renderMyTickets()}
        {activeSection === 'ticket-detail' && renderTicketDetail()}
        {activeSection === 'faqs' && renderFAQs()}
        {activeSection === 'report-technician' && renderReportTechnician()}
        {activeSection === 'payment-issues' && renderPaymentIssues()}
      </div>
    </div>
  );
};

export default Support;
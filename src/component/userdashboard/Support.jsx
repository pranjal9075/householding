import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, Mail, Plus, ChevronDown, ChevronUp } from 'lucide-react';

const Support = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tickets');
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [ticketForm, setTicketForm] = useState({ subject: '', category: 'General', description: '' });

  const tickets = [
    { id: 'TKT001', subject: 'Payment Issue', status: 'Open', date: 'Dec 16, 2024', category: 'Payment' },
    { id: 'TKT002', subject: 'Service Quality', status: 'Resolved', date: 'Dec 10, 2024', category: 'Service' }
  ];

  const faqs = [
    { q: 'How do I book a service?', a: 'You can book a service by clicking on the "Book New Service" button on your dashboard and selecting the required service.' },
    { q: 'How can I track my service?', a: 'Once your service is confirmed, you can track it in real-time from the "Track Service" section in your dashboard.' },
    { q: 'What payment methods are accepted?', a: 'We accept UPI, Credit/Debit cards, Net Banking, and Wallet payments.' },
    { q: 'How do I cancel a booking?', a: 'You can cancel your booking from "My Bookings" section. Cancellation charges may apply based on timing.' }
  ];

  const handleSubmitTicket = () => {
    if (ticketForm.subject && ticketForm.description) {
      alert('Ticket submitted successfully!');
      setTicketForm({ subject: '', category: 'General', description: '' });
      setShowTicketForm(false);
    }
  };

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
        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button className="bg-green-500 text-white p-4 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition">
            <Phone size={20} />
            <div className="text-left">
              <p className="font-medium">Call Support</p>
              <p className="text-sm opacity-90">1800-123-4567</p>
            </div>
          </button>
          <button className="bg-blue-500 text-white p-4 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-600 transition">
            <MessageCircle size={20} />
            <div className="text-left">
              <p className="font-medium">Live Chat</p>
              <p className="text-sm opacity-90">Available 24/7</p>
            </div>
          </button>
          <button className="bg-purple-500 text-white p-4 rounded-xl flex items-center justify-center gap-3 hover:bg-purple-600 transition">
            <Mail size={20} />
            <div className="text-left">
              <p className="font-medium">Email Support</p>
              <p className="text-sm opacity-90">support@repairbazar.com</p>
            </div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {['tickets', 'faqs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              {tab === 'tickets' ? 'My Tickets' : 'FAQs'}
            </button>
          ))}
        </div>

        {activeTab === 'tickets' ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Support Tickets</h2>
              <button 
                onClick={() => setShowTicketForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Plus size={16} /> Raise Ticket
              </button>
            </div>

            {showTicketForm && (
              <div className="bg-white p-6 rounded-xl border mb-6">
                <h3 className="font-bold mb-4">Raise New Ticket</h3>
                <div className="space-y-4">
                  <input 
                    placeholder="Subject"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                  />
                  <select 
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="General">General</option>
                    <option value="Payment">Payment</option>
                    <option value="Service">Service Quality</option>
                    <option value="Technical">Technical Issue</option>
                  </select>
                  <textarea 
                    placeholder="Describe your issue in detail"
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                    className="w-full p-3 border rounded-lg" 
                    rows="4"
                  />
                  <div className="flex gap-3">
                    <button onClick={handleSubmitTicket} className="bg-green-500 text-white px-6 py-2 rounded-lg">
                      Submit Ticket
                    </button>
                    <button 
                      onClick={() => setShowTicketForm(false)}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{ticket.subject}</h3>
                      <p className="text-sm text-gray-600">Ticket ID: {ticket.id}</p>
                      <p className="text-sm text-gray-600">{ticket.date} • {ticket.category}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
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
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
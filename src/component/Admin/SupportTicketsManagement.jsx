import React, { useState } from 'react';
import { Eye, MessageSquare, Edit, Ban, RefreshCw, Filter, Search, User, Calendar, AlertCircle } from 'lucide-react';

const SupportTicketsManagement = () => {
  const [tickets, setTickets] = useState([
    {
      id: 'TKT001',
      type: 'Raise Ticket',
      bookingId: 'RB001',
      userId: 'U001',
      userName: 'John Doe',
      userPhone: '+91 9876543210',
      category: 'technician-late',
      issue: 'Technician Late',
      message: 'Technician was 2 hours late without any notification',
      status: 'Open',
      priority: 'High',
      assignedTo: '',
      createdAt: '2024-01-15 10:30',
      lastUpdate: '2024-01-15 10:30',
      technicianId: 'T001',
      technicianName: 'Rahul Kumar'
    },
    {
      id: 'TKT002',
      type: 'Payment Issue',
      bookingId: 'RB002',
      userId: 'U002',
      userName: 'Jane Smith',
      userPhone: '+91 9876543211',
      category: 'payment-problem',
      issue: 'Payment Problem',
      message: 'Amount deducted but service not confirmed',
      status: 'In Progress',
      priority: 'Medium',
      assignedTo: 'Admin1',
      createdAt: '2024-01-14 15:20',
      lastUpdate: '2024-01-15 09:15',
      technicianId: 'T002',
      technicianName: 'Amit Sharma'
    },
    {
      id: 'TKT003',
      type: 'Report Technician',
      bookingId: 'RB003',
      userId: 'U003',
      userName: 'Michael Brown',
      userPhone: '+91 9876543212',
      category: 'technician-report',
      issue: 'Technician Report - Poor Service',
      message: 'Technician was unprofessional and did poor quality work',
      status: 'Open',
      priority: 'High',
      assignedTo: '',
      createdAt: '2024-01-16 14:45',
      lastUpdate: '2024-01-16 14:45',
      technicianId: 'T003',
      technicianName: 'Suresh Kumar'
    },
    {
      id: 'TKT004',
      type: 'Live Chat',
      bookingId: 'RB004',
      userId: 'U004',
      userName: 'Sarah Lee',
      userPhone: '+91 9876543213',
      category: 'live-chat',
      issue: 'Live Chat - Service Query',
      message: 'Need immediate help with ongoing AC repair service',
      status: 'In Progress',
      priority: 'High',
      assignedTo: 'Support1',
      createdAt: '2024-01-16 16:20',
      lastUpdate: '2024-01-16 16:25',
      technicianId: 'T004',
      technicianName: 'Vikash Kumar'
    },
    {
      id: 'TKT005',
      type: 'Payment Issue',
      bookingId: 'RB005',
      userId: 'U005',
      userName: 'David Wilson',
      userPhone: '+91 9876543214',
      category: 'refund-request',
      issue: 'Refund Request',
      message: 'Need refund for cancelled service due to emergency',
      status: 'Resolved',
      priority: 'Medium',
      assignedTo: 'Admin2',
      createdAt: '2024-01-13 11:20',
      lastUpdate: '2024-01-14 16:30',
      technicianId: 'T005',
      technicianName: 'Ravi Sharma'
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [refundAmount, setRefundAmount] = useState('');

  const supportStaff = ['Admin1', 'Admin2', 'Support1', 'Support2'];
  const statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'All' || ticket.status === filterStatus;
    const matchesSearch = ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.issue.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets(tickets.map(ticket =>
      ticket.id === ticketId
        ? { ...ticket, status: newStatus, lastUpdate: new Date().toLocaleString() }
        : ticket
    ));
  };

  const assignTicket = (ticketId, staffMember) => {
    setTickets(tickets.map(ticket =>
      ticket.id === ticketId
        ? { ...ticket, assignedTo: staffMember, lastUpdate: new Date().toLocaleString() }
        : ticket
    ));
  };

  const handleReply = () => {
    if (replyMessage && selectedTicket) {
      alert(`Reply sent to ${selectedTicket.userName}: ${replyMessage}`);
      updateTicketStatus(selectedTicket.id, 'In Progress');
      setReplyMessage('');
      setShowReplyModal(false);
    }
  };

  const handleRefund = () => {
    if (refundAmount && selectedTicket) {
      alert(`Refund of ₹${refundAmount} initiated for ${selectedTicket.userName}`);
      updateTicketStatus(selectedTicket.id, 'Resolved');
      setRefundAmount('');
      setShowRefundModal(false);
    }
  };

  const blockTechnician = (technicianId, technicianName) => {
    if (window.confirm(`Are you sure you want to block ${technicianName}?`)) {
      alert(`${technicianName} has been blocked`);
      // Update technician status in database
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6 text-white">🎫 Support Tickets Management</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-semibold text-red-800">🎫 Raise Ticket</h3>
          <p className="text-2xl font-bold text-red-600">{tickets.filter(t => t.type === 'Raise Ticket').length}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800">💳 Payment Issues</h3>
          <p className="text-2xl font-bold text-yellow-600">{tickets.filter(t => t.type === 'Payment Issue').length}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800">💬 Live Chat</h3>
          <p className="text-2xl font-bold text-purple-600">{tickets.filter(t => t.type === 'Live Chat').length}</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800">🚩 Technician Reports</h3>
          <p className="text-2xl font-bold text-orange-600">{tickets.filter(t => t.type === 'Report Technician').length}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800">✅ Resolved Today</h3>
          <p className="text-2xl font-bold text-green-600">{tickets.filter(t => t.status === 'Resolved').length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-black" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 text-black"
            >
              <option value="All">All Status</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <Search size={16} className="text-black" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg px-3 py-2 text-black"
            />
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-black">Ticket ID</th>
                <th className="px-4 py-3 text-left text-black">Type</th>
                <th className="px-4 py-3 text-left text-black">User</th>
                <th className="px-4 py-3 text-left text-black">Issue</th>
                <th className="px-4 py-3 text-left text-black">Status</th>
                <th className="px-4 py-3 text-left text-black">Priority</th>
                <th className="px-4 py-3 text-left text-black">Assigned To</th>
                <th className="px-4 py-3 text-left text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map(ticket => (
                <tr key={ticket.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-black">{ticket.id}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      ticket.type === 'Raise Ticket' ? 'bg-blue-100 text-blue-800' :
                      ticket.type === 'Live Chat' ? 'bg-purple-100 text-purple-800' :
                      ticket.type === 'Payment Issue' ? 'bg-yellow-100 text-yellow-800' :
                      ticket.type === 'Report Technician' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-black">{ticket.userName}</p>
                      <p className="text-sm text-gray-600">{ticket.userPhone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-black">{ticket.issue}</p>
                      <p className="text-sm text-gray-600">Booking: {ticket.bookingId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={ticket.status}
                      onChange={(e) => updateTicketStatus(ticket.id, e.target.value)}
                      className={`px-2 py-1 rounded-full text-xs font-semibold border-0 ${getStatusColor(ticket.status)}`}
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`font-semibold ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={ticket.assignedTo}
                      onChange={(e) => assignTicket(ticket.id, e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      <option value="">Unassigned</option>
                      {supportStaff.map(staff => (
                        <option key={staff} value={staff}>{staff}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedTicket(ticket)}
                        className="text-blue-600 hover:bg-blue-50 p-1 rounded"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTicket(ticket);
                          setShowReplyModal(true);
                        }}
                        className="text-green-600 hover:bg-green-50 p-1 rounded"
                        title="Reply to User"
                      >
                        <MessageSquare size={16} />
                      </button>
                      {ticket.type === 'Payment Issue' && (
                        <button
                          onClick={() => {
                            setSelectedTicket(ticket);
                            setShowRefundModal(true);
                          }}
                          className="text-purple-600 hover:bg-purple-50 p-1 rounded"
                          title="Process Refund"
                        >
                          <RefreshCw size={16} />
                        </button>
                      )}
                      {ticket.type === 'Report Technician' && (
                        <button
                          onClick={() => blockTechnician(ticket.technicianId, ticket.technicianName)}
                          className="text-red-600 hover:bg-red-50 p-1 rounded"
                          title="Block Technician"
                        >
                          <Ban size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Details Modal */}
      {selectedTicket && !showReplyModal && !showRefundModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Ticket Details - {selectedTicket.id}</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">User</label>
                  <p>{selectedTicket.userName}</p>
                  <p className="text-sm text-gray-600">{selectedTicket.userPhone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Booking ID</label>
                  <p>{selectedTicket.bookingId}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Issue Category</label>
                <p>{selectedTicket.category}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <p className="bg-gray-50 p-3 rounded">{selectedTicket.message}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Technician</label>
                  <p>{selectedTicket.technicianName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Created At</label>
                  <p>{selectedTicket.createdAt}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowReplyModal(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Reply to User
              </button>
              <button
                onClick={() => setShowRefundModal(true)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Process Refund
              </button>
              <button
                onClick={() => setSelectedTicket(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Reply to {selectedTicket?.userName}</h3>
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply..."
              className="w-full p-3 border rounded-lg"
              rows="4"
            />
            <div className="flex gap-3 mt-4">
              <button onClick={handleReply} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Send Reply
              </button>
              <button
                onClick={() => {
                  setShowReplyModal(false);
                  setReplyMessage('');
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Refund Modal */}
      {showRefundModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Process Refund for {selectedTicket?.userName}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Refund Amount</label>
                <input
                  type="number"
                  value={refundAmount}
                  onChange={(e) => setRefundAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Reason</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>Service not provided</option>
                  <option>Poor service quality</option>
                  <option>Technician issue</option>
                  <option>Payment error</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={handleRefund} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Process Refund
              </button>
              <button
                onClick={() => {
                  setShowRefundModal(false);
                  setRefundAmount('');
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportTicketsManagement;
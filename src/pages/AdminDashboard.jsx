import React, { useState } from 'react';
import AdminHeader from '../component/Admin/AdminHeader';
import Dashboard from '../component/Admin/Dashboard';
import BookingsTable from '../component/Admin/BookingsTable';
import TechniciansManagement from '../component/Admin/TechniciansManagement';
import UsersManagement from '../component/Admin/UsersManagement';
import ServicesPricing from '../component/Admin/ServicesPricing';
import PaymentsManagement from '../component/Admin/PaymentsManagement';
import SupportTicketsManagement from '../component/Admin/SupportTicketsManagement';
import Reports from '../component/Admin/Reports';
import Reviews from '../component/Admin/Reviews';
import Settings from '../component/Admin/Settings';
import { 
  LayoutDashboard, ListOrdered, Wrench, CreditCard, 
  Users, BarChart3, X, Phone, MapPin, Clock, Eye, Download, MessageSquare
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showModal, setShowModal] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  // Mock Data - Direct user to technician bookings
  const bookings = [
    { id: '#9015', customer: 'John Doe', phone: '+91 98765 43210', service: 'Plumbing - Leak Repair', technician: 'Raj Kumar', status: 'Working', time: '11:00 AM', location: 'Sector 15, Noida', amount: 800 },
    { id: '#9016', customer: 'Alice Smith', phone: '+91 98765 43211', service: 'Electrical - Wiring Fix', technician: 'Amit Singh', status: 'On the way', time: '12:30 PM', location: 'Indirapuram', amount: 600 },
    { id: '#9017', customer: 'Michael Brown', phone: '+91 98765 43212', service: 'Carpentry - Door Fix', technician: 'Suresh Yadav', status: 'Completed', time: '01:00 PM', location: 'Sector 22, Noida', amount: 500 },
    { id: '#9018', customer: 'Sarah Lee', phone: '+91 98765 43213', service: 'AC Repair', technician: 'Vikash Kumar', status: 'Accepted', time: '02:15 PM', location: 'Ghaziabad', amount: 1200 },
  ];

  const technicians = [
    { id: 1, name: 'Raj Kumar', skill: 'Plumbing', status: 'Busy', rating: 4.8, phone: '+91 98765 11111', city: 'Noida', completedJobs: 145, earnings: 25000, verified: true },
    { id: 2, name: 'Amit Singh', skill: 'Electrical', status: 'Busy', rating: 4.6, phone: '+91 98765 22222', city: 'Ghaziabad', completedJobs: 98, earnings: 18500, verified: true },
    { id: 3, name: 'Suresh Yadav', skill: 'AC Repair', status: 'Available', rating: 4.9, phone: '+91 98765 33333', city: 'Noida', completedJobs: 67, earnings: 32000, verified: true },
    { id: 4, name: 'Vikash Kumar', skill: 'AC Repair', status: 'Busy', rating: 4.7, phone: '+91 98765 44444', city: 'Delhi', completedJobs: 89, earnings: 21000, verified: false },
  ];

  const pendingTechnicians = [
    { id: 5, name: 'Rajesh Kumar', skill: 'Plumber', phone: '+91 98765 55555', documents: 'Complete', status: 'pending' },
    { id: 6, name: 'Mohan Singh', skill: 'Electrician', phone: '+91 98765 66666', documents: 'Incomplete', status: 'pending' }
  ];

  const handleApproveTechnician = (techId) => {
    alert(`Technician approved! They can now login and receive jobs.`);
  };

  const handleRejectTechnician = (techId) => {
    alert('Technician rejected. Documents need revision.');
  };

  const services = [
    { name: 'Plumbing', price: '₹500-2000', technicians: 45, bookings: 234 },
    { name: 'Electrical', price: '₹300-1500', technicians: 38, bookings: 189 },
    { name: 'AC Repair', price: '₹800-3000', technicians: 22, bookings: 156 },
    { name: 'Carpentry', price: '₹400-2500', technicians: 31, bookings: 98 },
  ];

  const payments = [
    { id: 'PAY001', technician: 'Raj Kumar', amount: '₹2,500', date: '2024-01-15', status: 'Pending', jobs: 3 },
    { id: 'PAY002', technician: 'Amit Singh', amount: '₹1,800', date: '2024-01-15', status: 'Pending', jobs: 2 },
    { id: 'PAY003', technician: 'Suresh Yadav', amount: '₹3,200', date: '2024-01-14', status: 'Completed', jobs: 4 },
  ];

  const users = [
    { id: 'USR001', name: 'John Doe', email: 'john@email.com', phone: '+91 98765 43210', bookings: 12, lastBooking: '2024-01-15', city: 'Noida', status: 'Active' },
    { id: 'USR002', name: 'Alice Smith', email: 'alice@email.com', phone: '+91 98765 43211', bookings: 8, lastBooking: '2024-01-14', city: 'Ghaziabad', status: 'Active' },
    { id: 'USR003', name: 'Michael Brown', email: 'michael@email.com', phone: '+91 98765 43212', bookings: 15, lastBooking: '2024-01-13', city: 'Delhi', status: 'Active' },
  ];

  // Modal Components
  const BookingDetailsModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-[500px] border border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">📋 Booking Details</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        {selectedBooking && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-800 rounded">
                <p className="text-sm text-slate-400">Booking ID</p>
                <p className="font-bold">{selectedBooking.id}</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <p className="text-sm text-slate-400">Status</p>
                <StatusBadge status={selectedBooking.status} />
              </div>
            </div>
            
            <div className="p-4 bg-slate-800 rounded">
              <h4 className="font-bold mb-2">👤 Customer Details</h4>
              <p><strong>Name:</strong> {selectedBooking.customer}</p>
              <p><strong>Phone:</strong> {selectedBooking.phone}</p>
              <p><strong>Location:</strong> {selectedBooking.location}</p>
            </div>
            
            <div className="p-4 bg-slate-800 rounded">
              <h4 className="font-bold mb-2">🔧 Service Details</h4>
              <p><strong>Service:</strong> {selectedBooking.service}</p>
              <p><strong>Time:</strong> {selectedBooking.time}</p>
              <p><strong>Amount:</strong> ₹{selectedBooking.amount}</p>
            </div>
            
            <div className="p-4 bg-slate-800 rounded">
              <h4 className="font-bold mb-2">👨🔧 Assigned Technician</h4>
              <p><strong>Name:</strong> {selectedBooking.technician}</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs flex items-center gap-1">
                  <Phone size={12} /> Call Technician
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs flex items-center gap-1">
                  <MapPin size={12} /> Track Location
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const TrackStatusModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-96 border border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">📍 Live Tracking</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="mb-4 p-3 bg-slate-800 rounded">
          <p className="font-medium">{selectedBooking?.id} - {selectedBooking?.customer}</p>
          <p className="text-sm text-slate-400">{selectedBooking?.service}</p>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-3">Booking Timeline:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-green-500">✅</div>
              <div>
                <p className="text-sm font-medium">Booking Created</p>
                <p className="text-xs text-slate-400">10:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-green-500">✅</div>
              <div>
                <p className="text-sm font-medium">Technician Accepted</p>
                <p className="text-xs text-slate-400">11:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-blue-500">🔄</div>
              <div>
                <p className="text-sm font-medium">Work In Progress</p>
                <p className="text-xs text-slate-400">11:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-yellow-500">⏳</div>
              <div>
                <p className="text-sm font-medium">Completion Pending</p>
                <p className="text-xs text-slate-400">Expected: 12:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 p-3 bg-slate-800 rounded">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-blue-400" />
            <p className="text-sm">Technician: {selectedBooking?.technician}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-green-400" />
            <p className="text-sm">Status: {selectedBooking?.status}</p>
          </div>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded flex items-center justify-center gap-2">
          <Phone size={16} />
          Contact Customer
        </button>
      </div>
    </div>
  );

  const TechnicianDetailsModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-[600px] border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">👨🔧 Technician Management</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          {technicians.map((tech) => (
            <div key={tech.id} className={`p-4 rounded border ${
              tech.verified ? 'bg-green-900/20 border-green-600' : 'bg-yellow-900/20 border-yellow-600'
            }`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold">{tech.verified ? '✅' : '⏳'} {tech.name}</p>
                  <p className="text-sm text-slate-400">{tech.skill} • {tech.city}</p>
                  <p className="text-sm text-slate-400">Phone: {tech.phone}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={tech.status} />
                  <p className="text-xs text-yellow-400 mt-1">⭐ {tech.rating}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="text-center p-2 bg-slate-800 rounded">
                  <p className="text-xs text-slate-400">Jobs</p>
                  <p className="font-bold">{tech.completedJobs}</p>
                </div>
                <div className="text-center p-2 bg-slate-800 rounded">
                  <p className="text-xs text-slate-400">Earnings</p>
                  <p className="font-bold">₹{tech.earnings}</p>
                </div>
                <div className="text-center p-2 bg-slate-800 rounded">
                  <p className="text-xs text-slate-400">Rating</p>
                  <p className="font-bold">{tech.rating}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs">📞 Call</button>
                <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs">📊 View History</button>
                {!tech.verified && (
                  <button className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-xs">✅ Verify</button>
                )}
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">🚫 Block</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const VerifyBlockModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-[600px] border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">✅ Technician Management</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Pending Verifications ({pendingTechnicians.length}):</h4>
            <div className="space-y-2">
              {pendingTechnicians.map((tech) => (
                <div key={tech.id} className="p-3 bg-yellow-900/20 border border-yellow-600 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">📄 {tech.name}</p>
                      <p className="text-sm text-slate-400">{tech.skill} • {tech.documents}</p>
                    </div>
                    <div className="space-x-2">
                      <button 
                        onClick={() => handleApproveTechnician(tech.id)}
                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleRejectTechnician(tech.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Verified Technicians (45):</h4>
            <div className="space-y-2">
              {technicians.map((tech, idx) => (
                <div key={idx} className="p-3 bg-green-900/20 border border-green-600 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">✅ {tech.name}</p>
                      <p className="text-sm text-slate-400">{tech.status} - {tech.skill}</p>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-xs">📝 Edit</button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">🚫 Block</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Blocked Technicians (2):</h4>
            <div className="space-y-2">
              <div className="p-3 bg-red-900/20 border border-red-600 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">❌ Mohan Lal</p>
                    <p className="text-sm text-slate-400">Blocked for poor service</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs">🔓 Unblock</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AddServiceModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-96 border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">🔧 Add New Service</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <input className="w-full bg-slate-800 border border-slate-600 rounded p-3" placeholder="Service Name" />
          
          <select className="w-full bg-slate-800 border border-slate-600 rounded p-3">
            <option>Select Category</option>
            <option>Home Services</option>
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>AC & Appliances</option>
          </select>

          <div className="grid grid-cols-2 gap-2">
            <input className="bg-slate-800 border border-slate-600 rounded p-3" placeholder="Base Price ₹" />
            <input className="bg-slate-800 border border-slate-600 rounded p-3" placeholder="Max Price ₹" />
          </div>

          <input className="w-full bg-slate-800 border border-slate-600 rounded p-3" placeholder="Service Duration (hours)" />

          <div>
            <p className="mb-2 font-medium">Required Skills:</p>
            <select className="w-full bg-slate-800 border border-slate-600 rounded p-3">
              <option>Select Skills</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>AC Repair</option>
              <option>Carpentry</option>
            </select>
          </div>

          <textarea className="w-full bg-slate-800 border border-slate-600 rounded p-3" placeholder="Service Description" rows="3"></textarea>

          <div>
            <p className="mb-2 font-medium">Upload Service Image:</p>
            <input type="file" className="w-full text-sm" />
          </div>

          <button 
            onClick={() => {
              alert('Service created successfully!');
              setShowModal(null);
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
          >
            Create Service
          </button>
        </div>
      </div>
    </div>
  );

  const ProcessPaymentsModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-[600px] border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">💳 Process Payments</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 bg-slate-800 rounded">
            <h4 className="font-medium mb-3">Pending Payments (₹45,000):</h4>
            <div className="space-y-3">
              {[{name: 'Raj Kumar', amount: '₹2,500', jobs: 3}, {name: 'Amit Singh', amount: '₹1,800', jobs: 2}].map((payment, idx) => (
                <div key={idx} className="p-3 bg-yellow-900/20 border border-yellow-600 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">💰 {payment.name}</p>
                      <p className="text-sm text-slate-400">{payment.amount} ({payment.jobs} jobs completed)</p>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs">Process</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-800 rounded">
              <p className="text-sm text-slate-400">Payment Method:</p>
              <select className="w-full bg-slate-700 border border-slate-600 rounded p-2 mt-1">
                <option>Bank Transfer</option>
                <option>UPI</option>
                <option>Wallet</option>
              </select>
            </div>
            <div className="p-3 bg-slate-800 rounded">
              <p className="text-sm text-slate-400">Processing Fee:</p>
              <p className="font-bold">₹50 per transaction</p>
            </div>
          </div>

          <div className="p-4 bg-slate-800 rounded">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-slate-400">Admin Commission (15%)</p>
                <p className="text-xl font-bold text-orange-400">₹6,750</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Technician Share (85%)</p>
                <p className="text-xl font-bold text-green-400">₹38,250</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              alert('All payments processed successfully!');
              setShowModal(null);
            }}
            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded font-medium"
          >
            Process All Payments
          </button>
        </div>
      </div>
    </div>
  );

  const ManageUsersModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-xl p-6 w-[700px] border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">👥 User Management</h3>
          <button onClick={() => setShowModal(null)} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <input className="flex-1 bg-slate-800 border border-slate-600 rounded p-3" placeholder="Search users..." />
            <select className="bg-slate-800 border border-slate-600 rounded p-3">
              <option>All Users</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Blocked</option>
            </select>
          </div>

          <div className="space-y-3">
            {users.map((user, idx) => (
              <div key={idx} className="p-4 bg-slate-800 rounded border border-slate-700">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">👤 {user.name}</p>
                    <p className="text-sm text-slate-400">{user.email}</p>
                    <p className="text-sm text-slate-400">{user.bookings} bookings • Joined: {user.joined} • Status: {user.status}</p>
                  </div>
                  <div className="space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs">📝 Edit Profile</button>
                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">🚫 Block User</button>
                    <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs">📊 View History</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded">Add New User</button>
            <button className="flex-1 bg-green-600 hover:bg-green-700 py-2 rounded">Export User Data</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'Bookings') {
      return <BookingsTable />;
    }

    if (activeTab === 'Technicians') {
      return <TechniciansManagement />;
    }

    if (activeTab === 'Services') {
      return <ServicesPricing />;
    }

    if (activeTab === 'Payments') {
      return <PaymentsManagement />;
    }

    if (activeTab === 'Users') {
      return <UsersManagement />;
    }

    if (activeTab === 'Support Tickets') {
      return <SupportTicketsManagement />;
    }

    if (activeTab === 'Reports') {
      return <Reports />;
    }

    if (activeTab === 'Reviews') {
      return <Reviews />;
    }

    if (activeTab === 'Settings') {
      return <Settings />;
    }

    // Default Dashboard
    return <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <div className="fixed top-0 left-0 right-0 z-50">
        <AdminHeader />
      </div>
      <div className="flex pt-16">
      {/* --- Sidebar --- */}
      <aside
  className={`
    fixed z-40
    top-16 bottom-0 w-64
    bg-[#1e293b] border-r border-slate-700
    flex flex-col flex-shrink-0
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    overflow-y-auto scrollbar-hide
  `}
>

        <div className="p-6 flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded">
            <Wrench size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">House Holding</h1>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto scrollbar-hide">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => {setActiveTab('Dashboard');setSidebarOpen(false);}} 
/>
          <NavItem icon={<ListOrdered size={20}/>} label="Bookings" active={activeTab === 'Bookings'} onClick={() =>{ setActiveTab('Bookings');setSidebarOpen(false);}} />
          <NavItem icon={<Users size={20}/>} label="Technicians" active={activeTab === 'Technicians'} onClick={() => {setActiveTab('Technicians');setSidebarOpen(false);}} />
          <NavItem icon={<Users size={20}/>} label="Users" active={activeTab === 'Users'} onClick={() => {setActiveTab('Users');setSidebarOpen(false);}} />
          <NavItem icon={<Wrench size={20}/>} label="Services & Pricing" active={activeTab === 'Services'} onClick={() => {setActiveTab('Services');setSidebarOpen(false);}} />
          <NavItem icon={<CreditCard size={20}/>} label="Payments" active={activeTab === 'Payments'} onClick={() => {setActiveTab('Payments');setSidebarOpen(false);}} />
          <NavItem icon={<MessageSquare size={20}/>} label="Support Tickets" active={activeTab === 'Support Tickets'} onClick={() => {setActiveTab('Support Tickets');setSidebarOpen(false);}} />
          <NavItem icon={<BarChart3 size={20}/>} label="Reports" active={activeTab === 'Reports'} onClick={() => {setActiveTab('Reports');setSidebarOpen(false);}} />
          <NavItem icon={<BarChart3 size={20}/>} label="Reviews" active={activeTab === 'Reviews'} onClick={() => {setActiveTab('Reviews');setSidebarOpen(false);}} />
          <NavItem icon={<BarChart3 size={20}/>} label="Settings" active={activeTab === 'Settings'} onClick={() => {setActiveTab('Settings');setSidebarOpen(false);}} />
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 md:ml-64 overflow-y-auto h-screen scrollbar-hide">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden bg-slate-800 p-2 rounded"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>

            <h2 className="text-2xl font-semibold">{activeTab} Overview</h2>
          </div>
        </div>


          {renderContent()}
        </div>
      </main>

      {/* --- Modals --- */}
      {showModal === 'bookingDetails' && <BookingDetailsModal />}
      {showModal === 'trackStatus' && <TrackStatusModal />}
      {showModal === 'technicianDetails' && <TechnicianDetailsModal />}
      {showModal === 'processPayments' && <ProcessPaymentsModal />}
      {showModal === 'manageUsers' && <ManageUsersModal />}
      </div>
    </div>
  );
};

// --- Reusable Components ---

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

const KPICard = ({ title, value, icon, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600', 
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600'
  };
  
  return (
    <div className={`bg-gradient-to-r ${colorClasses[color]} rounded-xl p-6 text-white shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm opacity-90 uppercase tracking-wider">{title}</p>
        </div>
        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-green-600';
      case 'in progress': return 'bg-blue-600';
      case 'pending': return 'bg-yellow-600';
      case 'assigned': return 'bg-purple-600';
      case 'active': return 'bg-green-600';
      case 'busy': return 'bg-red-600';
      case 'available': return 'bg-blue-600';
      default: return 'bg-slate-600';
    }
  };
  
  return (
    <span className={`${getStatusColor(status)} px-2 py-1 rounded text-xs font-medium`}>
      {status}
    </span>
  );
};

export default AdminDashboard;
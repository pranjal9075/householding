import React, { useState } from 'react';
import { 
  LayoutDashboard, ListOrdered, Wrench, CreditCard, 
  Users, BarChart3, X, Phone, MapPin, Clock, Eye, Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showModal, setShowModal] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  
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
            <h4 className="font-medium mb-3">Pending Verifications (3):</h4>
            <div className="space-y-2">
              {[{name: 'Ramesh Kumar', status: 'Documents Submitted'}, {name: 'Vikash Singh', status: 'Background Check Pending'}].map((tech, idx) => (
                <div key={idx} className="p-3 bg-yellow-900/20 border border-yellow-600 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">📄 {tech.name}</p>
                      <p className="text-sm text-slate-400">{tech.status}</p>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs">Verify</button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">Reject</button>
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
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <KPICard title="Total Bookings" value="1,247" icon="📋" color="blue" />
            <KPICard title="Today's Bookings" value="23" icon="📅" color="green" />
            <KPICard title="Ongoing Jobs" value="8" icon="🔄" color="orange" />
            <KPICard title="Completed Today" value="15" icon="✅" color="purple" />
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-medium mb-4">📋 Live Booking Monitor</h3>
            <p className="text-sm text-slate-400 mb-4">Users directly book with technicians. Admin monitors all activities.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="pb-3 font-medium">Booking ID</th>
                    <th className="pb-3 font-medium">Customer</th>
                    <th className="pb-3 font-medium">Service</th>
                    <th className="pb-3 font-medium">Technician</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {bookings.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/50 transition">
                      <td className="py-4 text-blue-400">{item.id}</td>
                      <td className="py-4">
                        <div>
                          <p className="font-medium">{item.customer}</p>
                          <p className="text-xs text-slate-400">{item.phone}</p>
                        </div>
                      </td>
                      <td className="py-4">{item.service}</td>
                      <td className="py-4">
                        <div>
                          <p className="font-medium">{item.technician}</p>
                          <p className="text-xs text-slate-400">{item.location}</p>
                        </div>
                      </td>
                      <td className="py-4"><StatusBadge status={item.status} /></td>
                      <td className="py-4 font-bold">₹{item.amount}</td>
                      <td className="py-4">
                        <button 
                          onClick={() => {
                            setSelectedBooking(item);
                            setShowModal('bookingDetails');
                          }}
                          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs mr-2 flex items-center gap-1"
                        >
                          <Eye size={12} /> View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Services') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <KPICard title="Total Services" value="12" icon="🔧" color="blue" />
            <KPICard title="Active Technicians" value="89" icon="⚡" color="green" />
            <KPICard title="Avg Rating" value="4.7" icon="⭐" color="orange" />
            <KPICard title="Revenue" value="₹8.5L" icon="💰" color="purple" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-medium mb-4">🔧 Service Categories</h3>
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                        <p className="text-sm text-slate-400">{service.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{service.technicians} Techs</p>
                        <p className="text-sm text-green-400">{service.bookings} Bookings</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-medium mb-4">👨🔧 Technician Overview</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-3 rounded text-center">
                    <p className="text-2xl font-bold text-green-400">{technicians.filter(t => t.status === 'Available').length}</p>
                    <p className="text-sm text-slate-400">Available</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded text-center">
                    <p className="text-2xl font-bold text-orange-400">{technicians.filter(t => t.status === 'Busy').length}</p>
                    <p className="text-sm text-slate-400">Busy</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowModal('technicianDetails')}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded"
                >
                  Manage Technicians
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Payments') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <KPICard title="Total Payments" value="₹12.5L" icon="💳" color="blue" />
            <KPICard title="Pending" value="₹45K" icon="⏳" color="orange" />
            <KPICard title="Admin Share" value="₹1.8L" icon="🏦" color="green" />
            <KPICard title="Tech Share" value="₹10.7L" icon="👨🔧" color="purple" />
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-medium mb-4">💳 Payment History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="pb-3 font-medium">Payment ID</th>
                    <th className="pb-3 font-medium">Technician</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {payments.map((payment, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/50 transition">
                      <td className="py-4 text-blue-400">{payment.id}</td>
                      <td className="py-4">{payment.technician}</td>
                      <td className="py-4 font-bold">{payment.amount}</td>
                      <td className="py-4">{payment.date}</td>
                      <td className="py-4"><StatusBadge status={payment.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Users') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <KPICard title="Total Users" value="2,847" icon="👥" color="blue" />
            <KPICard title="Active Today" value="156" icon="🟢" color="green" />
            <KPICard title="New This Week" value="89" icon="🆕" color="orange" />
            <KPICard title="Repeat Customers" value="234" icon="⭐" color="purple" />
          </div>
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">👥 User Management</h3>
              <button 
                onClick={() => setShowModal('manageUsers')}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
              >
                Manage Users
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="pb-3 font-medium">User ID</th>
                    <th className="pb-3 font-medium">Name</th>
                    <th className="pb-3 font-medium">Contact</th>
                    <th className="pb-3 font-medium">Bookings</th>
                    <th className="pb-3 font-medium">Last Booking</th>
                    <th className="pb-3 font-medium">City</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {users.map((user, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/50 transition">
                      <td className="py-4 text-blue-400">{user.id}</td>
                      <td className="py-4">{user.name}</td>
                      <td className="py-4">
                        <div>
                          <p className="text-sm">{user.email}</p>
                          <p className="text-xs text-slate-400">{user.phone}</p>
                        </div>
                      </td>
                      <td className="py-4 font-bold">{user.bookings}</td>
                      <td className="py-4">{user.lastBooking}</td>
                      <td className="py-4">{user.city}</td>
                      <td className="py-4">
                        <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs mr-2">📊 View History</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'Reports') {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <KPICard title="Monthly Revenue" value="₹15.2L" icon="📈" color="blue" />
            <KPICard title="Growth Rate" value="+12%" icon="📊" color="green" />
            <KPICard title="Avg Rating" value="4.8" icon="⭐" color="orange" />
            <KPICard title="Completion Rate" value="94%" icon="✅" color="purple" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-medium mb-4">📊 System Health</h3>
              <div className="space-y-4">
                <div className="bg-green-900/30 p-4 rounded-lg text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="text-green-400 font-bold text-lg">System Smooth Chal Raha Hai!</p>
                  <p className="text-sm text-slate-400">All services running perfectly</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-3 rounded text-center">
                    <p className="text-green-400 font-bold">Server</p>
                    <p className="text-xs text-slate-400">Online</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded text-center">
                    <p className="text-green-400 font-bold">Database</p>
                    <p className="text-xs text-slate-400">Connected</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-medium mb-4">📈 Analytics</h3>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded">
                  <p className="text-sm text-slate-400">Today's Bookings</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <div className="bg-slate-800 p-4 rounded">
                  <p className="text-sm text-slate-400">Revenue Today</p>
                  <p className="text-2xl font-bold text-green-400">₹45,600</p>
                </div>
                <div className="bg-slate-800 p-4 rounded">
                  <p className="text-sm text-slate-400">Active Technicians</p>
                  <p className="text-2xl font-bold text-blue-400">67</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default Dashboard
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard title="Total Users" value="2,847" icon="👥" color="blue" />
          <KPICard title="Total Technicians" value="480" icon="👨🔧" color="green" />
          <KPICard title="Total Bookings" value="1,247" icon="📋" color="orange" />
          <KPICard title="Today's Bookings" value="23" icon="📅" color="purple" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-medium mb-4">🔥 Live Activity Monitor</h3>
            <p className="text-sm text-slate-400 mb-4">Real-time booking flow: User → Technician (Direct)</p>
            
            <div className="space-y-3">
              <div className="p-3 bg-green-900/20 border border-green-600 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-green-400">✅ New Booking Accepted</p>
                    <p className="text-sm text-slate-400">John Doe → Raj Kumar (Plumbing)</p>
                  </div>
                  <p className="text-xs text-slate-400">2 min ago</p>
                </div>
              </div>
              
              <div className="p-3 bg-blue-900/20 border border-blue-600 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-blue-400">🚗 Technician On The Way</p>
                    <p className="text-sm text-slate-400">Amit Singh → Alice Smith (Electrical)</p>
                  </div>
                  <p className="text-xs text-slate-400">5 min ago</p>
                </div>
              </div>
              
              <div className="p-3 bg-purple-900/20 border border-purple-600 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-purple-400">✅ Job Completed</p>
                    <p className="text-sm text-slate-400">Suresh Yadav → Michael Brown (AC Repair)</p>
                  </div>
                  <p className="text-xs text-slate-400">8 min ago</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              <button 
                onClick={() => setShowModal('trackStatus')}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm"
              >
                📍 Live Tracking
              </button>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-medium mb-4">👨🔧 Technician Status</h3>
            <div className="space-y-3">
              {technicians.slice(0, 4).map((tech, idx) => (
                <div key={idx} className="bg-slate-800 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-xs text-slate-400">{tech.skill} • {tech.city}</p>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={tech.status} />
                      <p className="text-xs text-yellow-400">⭐ {tech.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <button 
                onClick={() => setShowModal('technicianDetails')}
                className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-sm"
              >
                Manage All Technicians
              </button>
              <button 
                onClick={() => setShowModal('processPayments')}
                className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded text-sm"
              >
                💳 Process Payments
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-medium mb-4">📊 Today's Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Ongoing Jobs</span>
                <span className="font-bold text-orange-400">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Completed Jobs</span>
                <span className="font-bold text-green-400">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Revenue Today</span>
                <span className="font-bold text-blue-400">₹45,600</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Admin Commission</span>
                <span className="font-bold text-purple-400">₹6,840</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-medium mb-4">⚠️ Alerts</h3>
            <div className="space-y-2">
              <div className="p-2 bg-yellow-900/20 border border-yellow-600 rounded text-sm">
                <p className="text-yellow-400 font-medium">2 Technicians Pending Verification</p>
              </div>
              <div className="p-2 bg-red-900/20 border border-red-600 rounded text-sm">
                <p className="text-red-400 font-medium">1 Payment Dispute</p>
              </div>
              <div className="p-2 bg-blue-900/20 border border-blue-600 rounded text-sm">
                <p className="text-blue-400 font-medium">5 New User Registrations</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-medium mb-4">📈 Quick Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setShowModal('manageUsers')}
                className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm"
              >
                👥 Manage Users
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-sm">
                📄 Download Reports
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-sm">
                ⚙️ System Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* --- Sidebar --- */}
      <aside className="w-64 bg-[#1e293b] border-r border-slate-700 flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded">
            <Wrench size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">REPAIR BAZAR</h1>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <NavItem icon={<ListOrdered size={20}/>} label="Bookings" active={activeTab === 'Bookings'} onClick={() => setActiveTab('Bookings')} />
          <NavItem icon={<Wrench size={20}/>} label="Services" active={activeTab === 'Services'} onClick={() => setActiveTab('Services')} />
          <NavItem icon={<CreditCard size={20}/>} label="Payments" active={activeTab === 'Payments'} onClick={() => setActiveTab('Payments')} />
          <NavItem icon={<Users size={20}/>} label="Users" active={activeTab === 'Users'} onClick={() => setActiveTab('Users')} />
          <NavItem icon={<BarChart3 size={20}/>} label="Reports" active={activeTab === 'Reports'} onClick={() => setActiveTab('Reports')} />
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">{activeTab} Overview</h2>
        </div>

        {renderContent()}
      </main>

      {/* --- Modals --- */}
      {showModal === 'bookingDetails' && <BookingDetailsModal />}
      {showModal === 'trackStatus' && <TrackStatusModal />}
      {showModal === 'technicianDetails' && <TechnicianDetailsModal />}
      {showModal === 'processPayments' && <ProcessPaymentsModal />}
      {showModal === 'manageUsers' && <ManageUsersModal />}
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
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, User, Briefcase, Star, Settings, 
  Bell, MapPin, Calendar, Clock, CheckCircle, Menu, X, FileText,
  Phone, Navigation, DollarSign, TrendingUp, Users, Award,
  Zap, Wrench, Snowflake, Brush, Timer, CheckSquare, AlertCircle,
  Wallet, MessageCircle, HelpCircle, LogOut, Shield, Camera,
  CreditCard, Calendar as CalendarIcon, ToggleLeft, ToggleRight,
  Home, Inbox, History, Eye, EyeOff, Download, Upload
} from 'lucide-react';
import BillForm from '../component/techniciandashboard/BillForm';


const TechnicianDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [jobTab, setJobTab] = useState('Ongoing');
  const [showBillForm, setShowBillForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [generatedBills, setGeneratedBills] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const [currentStatus, setCurrentStatus] = useState('Idle'); // Idle, On Job
  const [walletBalance] = useState(15420);
  const [notifications] = useState([
    { id: 1, type: 'job', message: 'New job request received', time: '2 min ago', read: false },
    { id: 2, type: 'payment', message: 'Payment of ₹800 credited', time: '1 hour ago', read: false },
    { id: 3, type: 'admin', message: 'Profile verification completed', time: '2 hours ago', read: true }
  ]);
  const [workingHours, setWorkingHours] = useState({ start: '09:00', end: '18:00' });
  const [availability, setAvailability] = useState({
    monday: true, tuesday: true, wednesday: true, thursday: true,
    friday: true, saturday: true, sunday: false
  });
  
  const [myProfile, setMyProfile] = useState({
    name: "Amit Kumar",
    role: "Electrician",
    phone: "+91 98765 43210",
    email: "amit.kumar@email.com",
    experience: "3 years",
    area: "Noida, Ghaziabad",
    rating: 4.7,
    totalReviews: 127,
    photo: null
  });
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({});

  const [todayStats] = useState({
    jobsToday: 3,
    earningsToday: 1200,
    earningsMonth: 18500,
    rating: 4.7
  });

  const [newRequests, setNewRequests] = useState([]);
  const [requestCountdown, setRequestCountdown] = useState({});

  const [allJobs, setAllJobs] = useState([
    { id: 1, service: "MCB Repair", customer: "Vikram Raj", time: "Today, 05:30 PM", location: "Indirapuram", status: "Upcoming", amount: 800, phone: "+91 98765 43210", bookingStatus: "ASSIGNED", bookingId: "HHS001", distance: "2.1 km" },
    { id: 2, service: "Switch Board", customer: "Priya Singh", time: "Ongoing", location: "Sector 22, Noida", status: "Ongoing", amount: 600, phone: "+91 98765 43211", bookingStatus: "ON_THE_WAY", bookingId: "HHS002", distance: "1.5 km" },
    { id: 3, service: "Fan Installation", customer: "Rahul Sharma", time: "Yesterday", location: "Sector 15, Noida", status: "Completed", amount: 500, phone: "+91 98765 43212", bookingStatus: "COMPLETED", bookingId: "HHS003", distance: "3.2 km" },
    { id: 4, service: "Wiring Issue", customer: "Anita Sharma", time: "2 days ago", location: "Sector 18, Noida", status: "Completed", amount: 750, phone: "+91 98765 43213", bookingStatus: "COMPLETED", bookingId: "HHS004", distance: "2.8 km" },
    { id: 5, service: "Socket Repair", customer: "Manoj Kumar", time: "3 days ago", location: "Ghaziabad", status: "Cancelled", amount: 400, phone: "+91 98765 43214", bookingStatus: "CANCELLED", bookingId: "HHS005", distance: "4.1 km" }
  ]);

  // Simulate new booking requests
  useEffect(() => {
    const interval = setInterval(() => {
      // Only show new requests if online AND no active job
      const hasActiveJob = allJobs.some(job => ['ASSIGNED', 'ON_THE_WAY', 'STARTED'].includes(job.bookingStatus));
      
      if (isOnline && newRequests.length < 3 && !hasActiveJob) {
        // Filter requests based on technician's skill category
        const electricianRequests = [
          { id: Date.now(), service: "Fan Installation", area: "Sector 15, Noida", distance: "2.5 km", amount: 500, time: "2:00 PM", countdown: 30, customer: "Rahul Sharma" },
          { id: Date.now() + 1, service: "MCB Repair", area: "Sector 22, Noida", distance: "1.8 km", amount: 400, time: "3:30 PM", countdown: 30, customer: "Priya Singh" },
          { id: Date.now() + 2, service: "Switch Board Repair", area: "Indirapuram", distance: "3.2 km", amount: 600, time: "4:00 PM", countdown: 30, customer: "Amit Kumar" },
          { id: Date.now() + 3, service: "Wiring Issue", area: "Ghaziabad", distance: "4.1 km", amount: 750, time: "5:00 PM", countdown: 30, customer: "Sanjay Gupta" },
          { id: Date.now() + 4, service: "Socket Installation", area: "Sector 18, Noida", distance: "2.8 km", amount: 350, time: "6:00 PM", countdown: 30, customer: "Neha Sharma" }
        ];
        
        const plumberRequests = [
          { id: Date.now(), service: "Tap Repair", area: "Sector 15, Noida", distance: "2.5 km", amount: 300, time: "2:00 PM", countdown: 30, customer: "Rahul Sharma" },
          { id: Date.now() + 1, service: "Pipeline Issue", area: "Sector 22, Noida", distance: "1.8 km", amount: 500, time: "3:30 PM", countdown: 30, customer: "Priya Singh" },
          { id: Date.now() + 2, service: "Toilet Repair", area: "Indirapuram", distance: "3.2 km", amount: 400, time: "4:00 PM", countdown: 30, customer: "Amit Kumar" }
        ];
        
        const acTechnicianRequests = [
          { id: Date.now(), service: "AC Repair", area: "Sector 15, Noida", distance: "2.5 km", amount: 800, time: "2:00 PM", countdown: 30, customer: "Rahul Sharma" },
          { id: Date.now() + 1, service: "AC Installation", area: "Sector 22, Noida", distance: "1.8 km", amount: 1200, time: "3:30 PM", countdown: 30, customer: "Priya Singh" },
          { id: Date.now() + 2, service: "AC Servicing", area: "Indirapuram", distance: "3.2 km", amount: 600, time: "4:00 PM", countdown: 30, customer: "Amit Kumar" }
        ];
        
        // Select requests based on technician's role
        let availableRequests = [];
        if (myProfile.role === "Electrician") {
          availableRequests = electricianRequests;
        } else if (myProfile.role === "Plumber") {
          availableRequests = plumberRequests;
        } else if (myProfile.role === "AC Technician") {
          availableRequests = acTechnicianRequests;
        } else {
          // Default to electrician requests for other roles
          availableRequests = electricianRequests;
        }
        
        const randomRequest = availableRequests[Math.floor(Math.random() * availableRequests.length)];
        const newRequest = { ...randomRequest, id: Date.now() + Math.random() };
        setNewRequests(prev => [...prev, newRequest]);
        setRequestCountdown(prev => ({ ...prev, [newRequest.id]: 30 }));
      }
    }, 15000); // New request every 15 seconds

    return () => clearInterval(interval);
  }, [isOnline, newRequests.length, allJobs, myProfile.role]);

  // Countdown timer for requests
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCountdown(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(id => {
          if (updated[id] > 0) {
            updated[id] -= 1;
          } else {
            // Auto-reject expired requests
            setNewRequests(current => current.filter(req => req.id.toString() !== id));
            delete updated[id];
          }
        });
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [earnings] = useState([
    { id: 123, amount: 450, date: "Today" },
    { id: 124, amount: 600, date: "Yesterday" },
    { id: 125, amount: 350, date: "2 days ago" }
  ]);

  const [reviews] = useState([
    { id: 1, customer: "Rahul Sharma", rating: 5, comment: "Excellent work! Very professional.", date: "2 days ago" },
    { id: 2, customer: "Sanjay Kumar", rating: 4, comment: "Good service, on time.", date: "1 week ago" }
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileForm({...profileForm, photo: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    setEditingProfile(true);
    setProfileForm({ ...myProfile });
  };

  const handleSaveProfile = () => {
    setMyProfile({ ...myProfile, ...profileForm });
    setEditingProfile(false);
    alert('Profile updated successfully!');
  };

  const updateBookingStatus = (jobId, newBookingStatus) => {
    setAllJobs(allJobs.map(job => {
      if (job.id === jobId) {
        const updatedJob = { ...job, bookingStatus: newBookingStatus };
        if (newBookingStatus === 'ON_THE_WAY') updatedJob.status = 'Ongoing';
        if (newBookingStatus === 'STARTED') updatedJob.status = 'Ongoing';
        if (newBookingStatus === 'COMPLETED') updatedJob.status = 'Completed';
        return updatedJob;
      }
      return job;
    }));
  };

  const getCurrentJob = () => {
    return allJobs.find(job => ['ASSIGNED', 'ON_THE_WAY', 'STARTED'].includes(job.bookingStatus));
  };

  const handleAcceptRequest = (id) => {
    const request = newRequests.find(r => r.id === id);
    setAllJobs([...allJobs, { ...request, status: 'Upcoming', bookingStatus: 'ASSIGNED' }]);
    setNewRequests(newRequests.filter(r => r.id !== id));
    setCurrentStatus('On Job');
    alert('Job accepted successfully!');
  };

  const handleRejectRequest = (id) => {
    setNewRequests(newRequests.filter(r => r.id !== id));
  };

  const handleStatusChange = (jobId, newStatus) => {
    setAllJobs(allJobs.map(job => 
      job.id === jobId ? { ...job, status: newStatus } : job
    ));
    if (newStatus === 'Completed') {
      setCurrentStatus('Idle');
    }
  };

  const handleGenerateBill = (job) => {
    setSelectedJob(job);
    setShowBillForm(true);
  };

  const handleBillGenerate = (billData) => {
    setGeneratedBills([...generatedBills, billData]);
    setShowBillForm(false);
    setSelectedJob(null);
    alert('Bill generated successfully!');
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r flex flex-col fixed md:relative z-50 h-full transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 text-xl font-bold text-blue-600 border-b flex justify-between items-center">
          Partner Portal
          <button 
            className="md:hidden p-1 hover:bg-gray-100 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: Home, label: "Home" },
            { icon: Inbox, label: "Job Requests" },
            { icon: Briefcase, label: "My Jobs" },
            { icon: Wallet, label: "Earnings" },
            { icon: Star, label: "Reviews" },
            { icon: User, label: "Profile" },
            { icon: CalendarIcon, label: "Availability" },
            { icon: Bell, label: "Notifications" },
            { icon: HelpCircle, label: "Support" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center w-full p-3 rounded-lg gap-3 transition ${
                activeTab === item.label ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
              {item.label === 'Notifications' && notifications.filter(n => !n.read).length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-auto">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center w-full p-3 rounded-lg gap-3 text-red-600 hover:bg-red-50 transition">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between sticky top-0 z-10">
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded mr-3"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              {myProfile.photo ? (
                <img src={myProfile.photo} alt="Profile" className="w-full h-full rounded-full" />
              ) : (
                <span className="font-bold text-blue-600">{myProfile.name.charAt(0)}</span>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">{myProfile.name}</h2>
              <p className="text-xs text-blue-600">{myProfile.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right mr-4">
              <p className="text-sm text-gray-500">Wallet Balance</p>
              <p className="font-bold text-green-600">₹{walletBalance.toLocaleString()}</p>
            </div>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${
                isOnline ? 'bg-green-500' : 'bg-red-500'
              }`} />
              {isOnline ? 'Online' : 'Offline'}
            </button>
            <button 
              onClick={() => setActiveTab('Notifications')}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative"
            >
              <Bell size={20} />
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* New Job Requests - Always show on Job Requests tab OR if there are active requests */}
          {((activeTab === 'Job Requests') || (isOnline && newRequests.length > 0 && !getCurrentJob())) && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800 text-red-600 flex items-center gap-2">
                  🔥 New Job Requests - {myProfile.role}
                  {newRequests.length > 0 && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
                      {newRequests.length} pending
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500 mt-1">Only {myProfile.role.toLowerCase()} jobs will appear here</p>
              </div>
              <div className="divide-y">
                {newRequests.length === 0 ? (
                  <div className="p-10 text-center text-gray-500">
                    {isOnline ? 'No new job requests at the moment' : 'Go online to receive job requests'}
                  </div>
                ) : (
                  newRequests.map((request) => (
                    <div key={request.id} className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900">{request.service}</h4>
                          <p className="text-gray-600 text-sm">Customer: {request.customer}</p>
                          <div className="flex gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1"><MapPin size={14} /> {request.area} ({request.distance})</span>
                            <span className="flex items-center gap-1"><DollarSign size={14} /> ₹{request.amount}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {request.time}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-red-600 font-bold flex items-center gap-1">
                            <Timer size={16} /> {requestCountdown[request.id] || request.countdown}s
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleAcceptRequest(request.id)}
                          className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-1"
                        >
                          <CheckSquare size={16} /> Accept
                        </button>
                        <button 
                          onClick={() => handleRejectRequest(request.id)}
                          className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-1"
                        >
                          <X size={16} /> Reject
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {/* Current Job Status Display */}
          {getCurrentJob() && (
            <section className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-blue-800">Current Job Status</h3>
                  <p className="text-blue-600">{getCurrentJob().service} - {getCurrentJob().customer}</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {getCurrentJob().bookingStatus.replace('_', ' ')}
                  </span>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'Home' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="text-sm text-gray-500">Today's Jobs</h4>
                  <p className="text-2xl font-bold text-blue-600">{todayStats.jobsToday}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="text-sm text-gray-500">Today's Earnings</h4>
                  <p className="text-2xl font-bold text-green-600">₹{todayStats.earningsToday}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="text-sm text-gray-500">Rating</h4>
                  <p className="text-2xl font-bold text-yellow-600">⭐ {todayStats.rating}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="text-sm text-gray-500">Wallet Balance</h4>
                  <p className="text-2xl font-bold text-green-600">₹{walletBalance.toLocaleString()}</p>
                </div>
              </div>

              {/* Active Job Card */}
              {getCurrentJob() && (
                <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">🔧 Active Job</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-lg">{getCurrentJob().service}</h4>
                      <p className="opacity-90">Customer: {getCurrentJob().customer}</p>
                      <p className="opacity-90 flex items-center gap-1 mt-1">
                        <MapPin size={16} /> {getCurrentJob().location} ({getCurrentJob().distance})
                      </p>
                      <p className="opacity-90 flex items-center gap-1 mt-1">
                        <DollarSign size={16} /> ₹{getCurrentJob().amount}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {getCurrentJob().bookingStatus === 'ASSIGNED' && (
                        <button 
                          onClick={() => updateBookingStatus(getCurrentJob().id, 'ON_THE_WAY')}
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center gap-2"
                        >
                          <Navigation size={16} /> Start Journey
                        </button>
                      )}
                      {getCurrentJob().bookingStatus === 'ON_THE_WAY' && (
                        <button 
                          onClick={() => updateBookingStatus(getCurrentJob().id, 'STARTED')}
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center gap-2"
                        >
                          <Wrench size={16} /> Start Service
                        </button>
                      )}
                      {getCurrentJob().bookingStatus === 'STARTED' && (
                        <button 
                          onClick={() => updateBookingStatus(getCurrentJob().id, 'COMPLETED')}
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center gap-2"
                        >
                          <CheckCircle size={16} /> Complete Service
                        </button>
                      )}
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 flex items-center justify-center gap-2">
                        <Phone size={16} /> Call Customer
                      </button>
                    </div>
                  </div>
                </section>
              )}
            </>
          )}

          {activeTab === 'Job Requests' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800">Job Requests</h3>
                <p className="text-sm text-gray-500 mt-1">Manage incoming job requests from customers</p>
              </div>
              {/* Job requests content is handled above */}
            </section>
          )}

          {activeTab === 'My Jobs' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800 mb-4">My Jobs</h3>
                <div className="flex gap-2 flex-wrap">
                  {['Ongoing', 'Upcoming', 'Completed', 'Cancelled'].map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setJobTab(tab)}
                      className={`px-4 py-2 text-sm rounded-lg ${
                        jobTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab} ({allJobs.filter(job => {
                        if (tab === 'Ongoing') return job.status === 'Ongoing';
                        if (tab === 'Upcoming') return job.status === 'Upcoming';
                        if (tab === 'Completed') return job.status === 'Completed';
                        if (tab === 'Cancelled') return job.status === 'Cancelled';
                        return false;
                      }).length})
                    </button>
                  ))}
                </div>
              </div>
              <div className="divide-y">
                {allJobs.filter(job => {
                  if (jobTab === 'Ongoing') return job.status === 'Ongoing';
                  if (jobTab === 'Upcoming') return job.status === 'Upcoming';
                  if (jobTab === 'Completed') return job.status === 'Completed';
                  if (jobTab === 'Cancelled') return job.status === 'Cancelled';
                  return false;
                }).map((job) => (
                  <div key={job.id} className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900">{job.service}</h4>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            #{job.bookingId}
                          </span>
                        </div>
                        <p className="text-gray-600">{job.customer}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin size={14} /> {job.location} ({job.distance})
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock size={14} /> {job.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">₹{job.amount}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          job.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                          job.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-700' :
                          job.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {job.bookingStatus.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      {job.bookingStatus === 'ASSIGNED' && (
                        <>
                          <button 
                            onClick={() => updateBookingStatus(job.id, 'ON_THE_WAY')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-1"
                          >
                            <Navigation size={16} /> On the way
                          </button>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-1">
                            <Phone size={16} /> Call {job.customer.split(' ')[0]}
                          </button>
                        </>
                      )}
                      {job.bookingStatus === 'ON_THE_WAY' && (
                        <>
                          <button 
                            onClick={() => updateBookingStatus(job.id, 'STARTED')}
                            className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 flex items-center gap-1"
                          >
                            <Wrench size={16} /> Start Service
                          </button>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-1">
                            <Phone size={16} /> Call
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-1">
                            <Navigation size={16} /> Navigate
                          </button>
                        </>
                      )}
                      {job.bookingStatus === 'STARTED' && (
                        <>
                          <button 
                            onClick={() => updateBookingStatus(job.id, 'COMPLETED')}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-1"
                          >
                            <CheckCircle size={16} /> Complete Service
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-1">
                            <Phone size={16} /> Call
                          </button>
                        </>
                      )}
                      {job.bookingStatus === 'COMPLETED' && (
                        <button 
                          onClick={() => handleGenerateBill(job)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 flex items-center gap-1"
                        >
                          <FileText size={16} /> Generate Bill
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {allJobs.filter(job => {
                  if (jobTab === 'Ongoing') return job.status === 'Ongoing';
                  if (jobTab === 'Upcoming') return job.status === 'Upcoming';
                  if (jobTab === 'Completed') return job.status === 'Completed';
                  if (jobTab === 'Cancelled') return job.status === 'Cancelled';
                  return false;
                }).length === 0 && (
                  <div className="p-10 text-center text-gray-500">
                    No {jobTab.toLowerCase()} jobs.
                  </div>
                )}
              </div>
            </section>
          )}

          {activeTab === 'Earnings' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800">Earnings & Wallet</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-500">Today</p>
                    <p className="text-xl font-bold text-blue-600">₹{todayStats.earningsToday}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-500">This Week</p>
                    <p className="text-xl font-bold text-green-600">₹{Math.floor(todayStats.earningsMonth * 0.3)}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-500">This Month</p>
                    <p className="text-xl font-bold text-purple-600">₹{todayStats.earningsMonth}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-500">Wallet Balance</p>
                    <p className="text-xl font-bold text-yellow-600">₹{walletBalance.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                    <Download size={16} /> Withdraw Money
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                    <CreditCard size={16} /> Bank Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-medium mb-4">Recent Earnings</h4>
                <div className="space-y-3">
                  {earnings.map((earning) => (
                    <div key={earning.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>Job #{earning.id}</span>
                      <div className="text-right">
                        <p className="font-bold">₹{earning.amount}</p>
                        <p className="text-sm text-gray-500">{earning.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeTab === 'Reviews' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800">Customer Reviews</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600 flex items-center gap-1"><Star size={24} /> {myProfile.rating}</div>
                    <div className="text-sm text-gray-500">{myProfile.totalReviews} reviews</div>
                  </div>
                </div>
              </div>
              <div className="divide-y">
                {reviews.map((review) => (
                  <div key={review.id} className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{review.customer}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({length: review.rating}, (_, i) => <Star key={i} size={16} className="text-yellow-500 fill-current" />)}
                          <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'Profile' && (
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold overflow-hidden">
                  {myProfile.photo ? (
                    <img src={myProfile.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    myProfile.name.charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{myProfile.name}</h3>
                  <p className="text-blue-600 font-medium">{myProfile.role}</p>
                  <p className="text-sm text-gray-500">{myProfile.experience} experience</p>
                </div>
              </div>
              
              {editingProfile ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold overflow-hidden">
                      {profileForm.photo ? (
                        <img src={profileForm.photo} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        profileForm.name?.charAt(0) || myProfile.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 text-sm"
                      >
                        Upload Photo
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Name</label>
                      <input
                        type="text"
                        value={profileForm.name || ''}
                        onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                        className="w-full p-2 border rounded-lg mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <input
                        type="text"
                        value={profileForm.phone || ''}
                        onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                        className="w-full p-2 border rounded-lg mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <input
                        type="email"
                        value={profileForm.email || ''}
                        onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                        className="w-full p-2 border rounded-lg mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Experience</label>
                      <input
                        type="text"
                        value={profileForm.experience || ''}
                        onChange={(e) => setProfileForm({...profileForm, experience: e.target.value})}
                        className="w-full p-2 border rounded-lg mt-1"
                        placeholder="e.g., 3 years"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Skill Category</label>
                      <select
                        value={profileForm.role || myProfile.role}
                        onChange={(e) => setProfileForm({...profileForm, role: e.target.value})}
                        className="w-full p-2 border rounded-lg mt-1"
                      >
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="AC Technician">AC Technician</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Appliance Repair">Appliance Repair</option>
                        <option value="House Cleaning">House Cleaning</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-500">Service Area</label>
                      <input
                        type="text"
                        value={profileForm.area || ''}
                        onChange={(e) => setProfileForm({...profileForm, area: e.target.value})}
                        className="w-full p-2 border rounded-lg mt-1"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveProfile}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingProfile(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Mobile Number</label>
                      <p className="text-gray-800">{myProfile.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-gray-800">{myProfile.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Experience</label>
                      <p className="text-gray-800">{myProfile.experience}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Service Area</label>
                      <p className="text-gray-800">{myProfile.area}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={handleEditProfile}
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Edit Profile
                    </button>
                    <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2">
                      <Upload size={16} /> Upload Documents
                    </button>
                    <button className="w-full px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 flex items-center justify-center gap-2">
                      <CreditCard size={16} /> Bank Details
                    </button>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 text-green-700">
                        <Shield size={16} />
                        <span className="text-sm font-medium">Account Status: Verified ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {activeTab === 'Availability' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800">Availability & Schedule</h3>
                <p className="text-sm text-gray-500 mt-1">Manage your working hours and availability</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-4">Working Hours</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Start Time</label>
                      <input
                        type="time"
                        value={workingHours.start}
                        onChange={(e) => setWorkingHours({...workingHours, start: e.target.value})}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">End Time</label>
                      <input
                        type="time"
                        value={workingHours.end}
                        onChange={(e) => setWorkingHours({...workingHours, end: e.target.value})}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-4">Weekly Availability</h4>
                  <div className="space-y-3">
                    {Object.entries(availability).map(([day, isAvailable]) => (
                      <div key={day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium capitalize">{day}</span>
                        <button
                          onClick={() => setAvailability({...availability, [day]: !isAvailable})}
                          className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium ${
                            isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {isAvailable ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                          {isAvailable ? 'Available' : 'Not Available'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'Notifications' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800">Notifications</h3>
                <p className="text-sm text-gray-500 mt-1">Stay updated with job requests and payments</p>
              </div>
              <div className="divide-y">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-5 ${
                    !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {notification.type === 'job' && <Briefcase size={16} className="text-blue-600" />}
                          {notification.type === 'payment' && <DollarSign size={16} className="text-green-600" />}
                          {notification.type === 'admin' && <Shield size={16} className="text-purple-600" />}
                          <span className={`text-sm font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-600'
                          }`}>
                            {notification.message}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'Support' && (
            <section className="bg-white rounded-2xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="font-bold text-gray-800">Support & Help</h3>
                <p className="text-sm text-gray-500 mt-1">Get help and raise issues</p>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
                  <MessageCircle className="text-blue-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Chat with Admin</h4>
                    <p className="text-sm text-gray-500">Get instant help from our support team</p>
                  </div>
                </button>
                
                <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
                  <Phone className="text-green-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Call Support</h4>
                    <p className="text-sm text-gray-500">+91 1800-123-4567 (Toll Free)</p>
                  </div>
                </button>
                
                <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
                  <AlertCircle className="text-orange-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Raise an Issue</h4>
                    <p className="text-sm text-gray-500">Report problems or complaints</p>
                  </div>
                </button>
                
                <button className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-3">
                  <HelpCircle className="text-purple-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">FAQ & Help Center</h4>
                    <p className="text-sm text-gray-500">Find answers to common questions</p>
                  </div>
                </button>
              </div>
            </section>
          )}

          {activeTab === 'Settings' && (
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="font-bold text-gray-800 mb-6">Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Availability Status</span>
                  <button 
                    onClick={() => setIsOnline(!isOnline)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      isOnline ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    } flex items-center gap-1`}
                  >
                    {isOnline ? <CheckCircle size={16} /> : <AlertCircle size={16} />} {isOnline ? 'Online' : 'Offline'}
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Notifications</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    Manage
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Language</span>
                  <select className="px-3 py-2 border rounded-lg text-sm">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Account Verification</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Verified ✓
                  </span>
                </div>
                
                <div className="pt-4 space-y-3">
                  <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                    Change Password
                  </button>
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                    Privacy Policy
                  </button>
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                    Terms & Conditions
                  </button>
                  <button className="w-full px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100">
                    Logout
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      
      {showBillForm && (
        <BillForm 
          job={selectedJob}
          onBillGenerate={handleBillGenerate}
          onClose={() => setShowBillForm(false)}
        />
      )}
    </div>
  );
};

export default TechnicianDashboard;
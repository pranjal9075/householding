import React, { useState, useEffect } from 'react';
import { 
  MapPin, CheckCircle, DollarSign, Navigation, Wrench, Phone,
  User, Briefcase, Star, Bell, Clock, Timer, CheckSquare, X,
  Wallet, MessageCircle, HelpCircle, LogOut, Shield, Camera,
  CreditCard, Calendar as CalendarIcon, ToggleLeft, ToggleRight,
  Download, Upload, AlertCircle, FileText
} from 'lucide-react';
import DashboardHome from '../component/techniciandashboard/DashboardHome';
import Sidebar from '../component/techniciandashboard/Sidebar';
import Header from '../component/techniciandashboard/Header';
import JobRequests from '../component/techniciandashboard/JobRequests';
import MyJobs from '../component/techniciandashboard/MyJobs';
import Reviews from '../component/techniciandashboard/Reviews';
import Earnings from '../component/techniciandashboard/Earnings';
import Profile from '../component/techniciandashboard/Profile';
import Availability from '../component/techniciandashboard/Availability';
import Support from '../component/techniciandashboard/Support';
import TechSettings from '../component/techniciandashboard/Settings';


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
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  
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
    totalJobs: 127,
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
          { id: Date.now(), service: "Fan Installation", area: "Sector 15, Noida", distance: "2.5 km", amount: 500, timeSlot: "2:00 PM - 4:00 PM", countdown: 30, customer: "Rahul Sharma", problemDescription: "Ceiling fan not working, making noise when switched on", serviceType: "Electrical" },
          { id: Date.now() + 1, service: "MCB Repair", area: "Sector 22, Noida", distance: "1.8 km", amount: 400, timeSlot: "3:30 PM - 5:30 PM", countdown: 30, customer: "Priya Singh", problemDescription: "MCB tripping frequently, power cuts in kitchen area", serviceType: "Electrical" },
          { id: Date.now() + 2, service: "Switch Board Repair", area: "Indirapuram", distance: "3.2 km", amount: 600, timeSlot: "4:00 PM - 6:00 PM", countdown: 30, customer: "Amit Kumar", problemDescription: "Switch board sparking, need urgent replacement", serviceType: "Electrical" }
        ];
        
        const plumberRequests = [
          { id: Date.now(), service: "Tap Repair", area: "Sector 15, Noida", distance: "2.5 km", amount: 300, timeSlot: "2:00 PM - 4:00 PM", countdown: 30, customer: "Rahul Sharma", problemDescription: "Kitchen tap leaking continuously, water wastage", serviceType: "Plumbing" },
          { id: Date.now() + 1, service: "Pipeline Issue", area: "Sector 22, Noida", distance: "1.8 km", amount: 500, timeSlot: "3:30 PM - 5:30 PM", countdown: 30, customer: "Priya Singh", problemDescription: "Bathroom pipeline blocked, water not draining", serviceType: "Plumbing" },
          { id: Date.now() + 2, service: "Toilet Repair", area: "Indirapuram", distance: "3.2 km", amount: 400, timeSlot: "4:00 PM - 6:00 PM", countdown: 30, customer: "Amit Kumar", problemDescription: "Toilet flush not working properly, handle broken", serviceType: "Plumbing" }
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
    // Mark job as assigned for all technicians
    setNewRequests(prev => 
      prev.map(request => 
        request.id === id 
          ? { ...request, isAssigned: true }
          : request
      )
    );
    
    const request = newRequests.find(r => r.id === id);
    // Add to jobs
    setAllJobs([...allJobs, { 
      ...request, 
      id: allJobs.length + 1,
      status: 'Upcoming', 
      bookingStatus: 'ASSIGNED',
      bookingId: `HHS${String(allJobs.length + 1).padStart(3, '0')}`
    }]);
    
    alert('✅ Job accepted successfully!');
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
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        notifications={notifications}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-0 overflow-hidden">
        {/* Header */}
        <Header 
          setSidebarOpen={setSidebarOpen}
          myProfile={myProfile}
          isOnline={isOnline}
          setIsOnline={setIsOnline}
          setActiveTab={setActiveTab}
          notifications={notifications}
        />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-4 lg:p-6 space-y-6 lg:space-y-8">
          {/* Job Requests */}
          {((activeTab === 'Job Requests') || (isOnline && newRequests.length > 0 && !getCurrentJob())) && (
            <JobRequests 
              newRequests={newRequests}
              myProfile={myProfile}
              isOnline={isOnline}
              requestCountdown={requestCountdown}
              handleAcceptRequest={handleAcceptRequest}
              handleRejectRequest={handleRejectRequest}
            />
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
              <DashboardHome todayStats={todayStats} />

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
            <MyJobs 
              jobTab={jobTab}
              setJobTab={setJobTab}
              allJobs={allJobs}
              updateBookingStatus={updateBookingStatus}
              handleGenerateBill={handleGenerateBill}
            />
          )}

          {activeTab === 'Earnings' && (
            <Earnings 
              todayStats={todayStats}
              earnings={earnings}
            />
          )}

          {activeTab === 'Reviews' && (
            <Reviews 
              reviews={reviews}
              myProfile={myProfile}
            />
          )}

          {activeTab === 'Profile' && (
            <Profile 
              myProfile={myProfile}
              editingProfile={editingProfile}
              profileForm={profileForm}
              setProfileForm={setProfileForm}
              handleImageUpload={handleImageUpload}
              handleEditProfile={handleEditProfile}
              handleSaveProfile={handleSaveProfile}
              setEditingProfile={setEditingProfile}
            />
          )}

          {activeTab === 'Availability' && (
            <Availability 
              workingHours={workingHours}
              setWorkingHours={setWorkingHours}
              availability={availability}
              setAvailability={setAvailability}
            />
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
            <Support />
          )}

          {activeTab === 'Settings' && (
            <TechSettings 
              notificationsEnabled={notificationsEnabled}
              setNotificationsEnabled={setNotificationsEnabled}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
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
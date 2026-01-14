import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, Lock, Edit3, Camera, ArrowLeft, Save, Check, X, Globe, Bell } from 'lucide-react';

// Note: Agar useAuth nahi chal raha toh ise comment out kar sakte hain debug ke liye
// import { useAuth } from '../context/AuthContext'; 

const MyProfile = () => {
  const navigate = useNavigate();
  
  // Dummy User fallback agar AuthContext available na ho
  const user = { name: "Ramssh K.", email: "ramesh@example.com" }; 

  const [isEditing, setIsEditing] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [passwordData, setPasswordData] = useState({ current: '', new: '', confirm: '' });
  
  // Image State
  const [profileImage, setProfileImage] = useState(null);
  
  const [showImageOptions, setShowImageOptions] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '+91 98765 43210',
    email: user?.email || '',
    language: 'English',
    notifications: true
  });

  // --- Image Upload Handler (FIXED) ---
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        setProfileImage(imageData);
        // Save to localStorage so it shows in header
        localStorage.setItem('userProfileImage', imageData);
        setShowImageOptions(false);
        alert('Image uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  // Load saved image on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const deleteImage = () => {
    setProfileImage(null);
    localStorage.removeItem('userProfileImage');
    setShowImageOptions(false);
    alert('Image deleted successfully!');
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const sendOtp = () => {
    if (!newPhone) {
      alert('Please enter new mobile number');
      return;
    }
    alert('OTP sent to ' + newPhone);
    setShowOtpModal(true);
  };

  const verifyOtp = () => {
    if (otp === '1234') {
      setFormData({...formData, phone: newPhone});
      setShowOtpModal(false);
      setOtp('');
      setNewPhone('');
      alert('Mobile number updated successfully!');
    } else {
      alert('Invalid OTP. Use 1234 for demo.');
    }
  };

  const changePassword = () => {
    if (!passwordData.current || !passwordData.new || !passwordData.confirm) {
      alert('Please fill all password fields');
      return;
    }
    if (passwordData.new !== passwordData.confirm) {
      alert('New passwords do not match');
      return;
    }
    alert('Password changed successfully!');
    setShowPasswordModal(false);
    setPasswordData({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition">
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">My Profile</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Top Banner/Cover Color */}
          <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600"></div>

          {/* Profile Photo Section */}
          <div className="px-8 pb-8">
            <div className="relative -mt-12 mb-6 flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 bg-white p-1 rounded-full shadow-lg">
                  <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={50} className="text-blue-400" />
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setShowImageOptions(!showImageOptions)}
                  className="absolute bottom-1 right-1 bg-orange-500 text-white p-2.5 rounded-full hover:bg-orange-600 cursor-pointer shadow-md transition-transform hover:scale-110"
                >
                  <Camera size={18} />
                </button>
                
                {/* Image Options Dropdown */}
                {showImageOptions && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border z-10 min-w-[120px]">
                    <label className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                      Upload Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    {profileImage && (
                      <button 
                        onClick={deleteImage}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      >
                        Delete Photo
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Profile Form */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                    <User size={12} /> Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={!isEditing}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-50 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                    <Mail size={12} /> Email ID
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={!isEditing}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-50 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  <Phone size={12} /> Mobile Number
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={formData.phone}
                    disabled
                    className="flex-1 p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-600"
                  />
                  <button 
                    onClick={() => setNewPhone(formData.phone)}
                    className="px-5 py-3 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 transition"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                    <Globe size={12} /> Language
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({...formData, language: e.target.value})}
                    disabled={!isEditing}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-50 transition"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                    <Bell size={12} /> Notifications
                  </label>
                  <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl h-[50px]">
                    <span className="text-sm text-slate-600 font-medium">Push Notifications</span>
                    <input
                      type="checkbox"
                      checked={formData.notifications}
                      onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                      disabled={!isEditing}
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              {!isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 shadow-md transition"
                  >
                    <Edit3 size={18} /> Edit Profile
                  </button>
                  <button 
                    onClick={() => setShowPasswordModal(true)}
                    className="flex-1 bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition"
                  >
                    <Lock size={18} /> Change Password
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 shadow-md transition"
                  >
                    <Save size={18} /> Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-slate-100 text-slate-600 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- Modals (Phone & Password) --- */}
      {/* Same logic as before, but with better Tailwind styling */}
      {/* (Phone Modal Code...) */}
      {newPhone && !showOtpModal && (
         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
           <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl">
             <h3 className="text-xl font-bold mb-2">Update Phone</h3>
             <p className="text-slate-500 text-sm mb-6">Enter your new mobile number to receive OTP.</p>
             <input
               type="text"
               value={newPhone}
               onChange={(e) => setNewPhone(e.target.value)}
               className="w-full p-4 border border-slate-200 rounded-xl mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
               placeholder="Enter mobile number"
             />
             <div className="flex gap-3">
               <button onClick={sendOtp} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold">Send OTP</button>
               <button onClick={() => setNewPhone('')} className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold">Close</button>
             </div>
           </div>
         </div>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Verify OTP</h3>
            <p className="text-slate-500 text-sm mb-6">OTP sent to {newPhone}</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-4 border border-slate-200 rounded-xl mb-6 text-center text-2xl tracking-widest focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="0000"
              maxLength="4"
            />
            <button onClick={verifyOtp} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
              <Check size={20} /> Verify Now
            </button>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold">Change Password</h3>
               <button onClick={() => setShowPasswordModal(false)} className="p-1 hover:bg-slate-100 rounded-full"><X size={20}/></button>
            </div>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setPasswordData({...passwordData, current: e.target.value})}
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setPasswordData({...passwordData, new: e.target.value})}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setPasswordData({...passwordData, confirm: e.target.value})}
              />
            </div>
            <button onClick={changePassword} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mt-8 shadow-lg">
              Update Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
import React from 'react';
import { Camera, Upload, CreditCard, Shield } from 'lucide-react';

const Profile = ({ 
  myProfile, 
  editingProfile, 
  profileForm, 
  setProfileForm, 
  handleImageUpload, 
  handleEditProfile, 
  handleSaveProfile, 
  setEditingProfile 
}) => {
  return (
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
        <div className="space-y-6">
          <div className="flex items-center gap-4">
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
                className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 text-sm flex items-center gap-2"
              >
                <Camera size={16} /> Upload Photo
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={profileForm.name || ''}
                onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={profileForm.phone || ''}
                onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Category</label>
              <select
                value={profileForm.role || myProfile.role}
                onChange={(e) => setProfileForm({...profileForm, role: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Electrician">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="AC Technician">AC Technician</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Appliance Repair">Appliance Repair</option>
                <option value="House Cleaning">House Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Location</label>
              <input
                type="text"
                value={profileForm.area || ''}
                onChange={(e) => setProfileForm({...profileForm, area: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Noida, Ghaziabad"
              />
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">Documents</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600">
                <Upload size={20} /> Upload Aadhar Card
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600">
                <Upload size={20} /> Upload PAN Card
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">Bank Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Account Number"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="IFSC Code"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Bank Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Account Holder Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSaveProfile}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditingProfile(false)}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500">Name</label>
              <p className="text-gray-800 font-medium">{myProfile.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Phone</label>
              <p className="text-gray-800">{myProfile.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Service Category</label>
              <p className="text-gray-800">{myProfile.role}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Service Location</label>
              <p className="text-gray-800">{myProfile.area}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleEditProfile}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Edit Profile
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium flex items-center gap-2">
              <Upload size={16} /> Upload Documents
            </button>
            <button className="px-6 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium flex items-center gap-2">
              <CreditCard size={16} /> Bank Details
            </button>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <Shield size={20} />
              <span className="font-medium">Account Status: Verified ✓</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
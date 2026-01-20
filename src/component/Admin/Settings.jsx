import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    platformName: 'Repair Bazar',
    logo: '',
    razorpayKey: 'rzp_test_xxxxxxxxxx',
    razorpaySecret: 'xxxxxxxxxxxxxxxxxx',
    paytmKey: 'xxxxxxxxxxxxxxxxxx',
    commission: 15,
    otpProvider: 'twilio',
    otpKey: 'xxxxxxxxxxxxxxxxxx',
    termsConditions: 'By using our platform, you agree to our terms and conditions...'
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-slate-800">Platform Settings</h1>
        <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Platform Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Platform Name</label>
              <input 
                type="text" 
                value={settings.platformName}
                onChange={(e) => handleChange('platformName', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Platform Logo</label>
              <input 
                type="file" 
                accept="image/*"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              />
              <p className="text-xs text-slate-500 mt-1">Upload PNG, JPG (Max 2MB)</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Commission Percentage</label>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  value={settings.commission}
                  onChange={(e) => handleChange('commission', e.target.value)}
                  className="w-20 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  min="0" 
                  max="100"
                />
                <span className="text-slate-600">%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Payment Gateway</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Razorpay Key ID</label>
              <input 
                type="text" 
                value={settings.razorpayKey}
                onChange={(e) => handleChange('razorpayKey', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="rzp_test_xxxxxxxxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Razorpay Secret</label>
              <input 
                type="password" 
                value={settings.razorpaySecret}
                onChange={(e) => handleChange('razorpaySecret', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="xxxxxxxxxxxxxxxxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">PayTM Merchant Key</label>
              <input 
                type="password" 
                value={settings.paytmKey}
                onChange={(e) => handleChange('paytmKey', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="xxxxxxxxxxxxxxxxxx"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">OTP Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">OTP Provider</label>
              <select 
                value={settings.otpProvider}
                onChange={(e) => handleChange('otpProvider', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="twilio">Twilio</option>
                <option value="msg91">MSG91</option>
                <option value="textlocal">TextLocal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">API Key</label>
              <input 
                type="password" 
                value={settings.otpKey}
                onChange={(e) => handleChange('otpKey', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP service API key"
              />
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">💡 OTP will be sent for user registration and booking confirmations</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Terms & Conditions</h2>
          <div className="space-y-4">
            <textarea 
              value={settings.termsConditions}
              onChange={(e) => handleChange('termsConditions', e.target.value)}
              rows="8"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter terms and conditions..."
            />
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                Preview
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 text-center">
            <div className="text-2xl mb-2">🔄</div>
            <p className="text-sm font-medium">Reset Settings</p>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 text-center">
            <div className="text-2xl mb-2">📤</div>
            <p className="text-sm font-medium">Export Config</p>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 text-center">
            <div className="text-2xl mb-2">📥</div>
            <p className="text-sm font-medium">Import Config</p>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 text-center">
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm font-medium">Security Audit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
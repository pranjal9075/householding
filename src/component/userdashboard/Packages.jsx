import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Star, Clock, CheckCircle, Crown, Zap, Shield } from 'lucide-react';

const Packages = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const activePackages = [
    {
      id: 'PKG001',
      name: 'Premium Home Care',
      type: 'Monthly',
      startDate: 'Dec 1, 2024',
      endDate: 'Dec 31, 2024',
      remainingServices: 8,
      totalServices: 12,
      benefits: ['Free AC Cleaning', '20% off on repairs', 'Priority booking'],
      status: 'Active',
      renewalPrice: '₹2,999'
    }
  ];

  const availablePackages = [
    {
      id: 'PKG_BASIC',
      name: 'Basic Care',
      price: '₹1,499',
      duration: '1 Month',
      services: 6,
      benefits: ['Basic cleaning services', '10% discount on repairs', 'Standard support'],
      popular: false,
      icon: <Package className="text-blue-500" size={32} />
    },
    {
      id: 'PKG_PREMIUM',
      name: 'Premium Care',
      price: '₹2,999',
      duration: '1 Month',
      services: 12,
      benefits: ['All cleaning services', '20% discount on repairs', 'Priority support', 'Free AC maintenance'],
      popular: true,
      icon: <Crown className="text-purple-500" size={32} />
    },
    {
      id: 'PKG_ELITE',
      name: 'Elite Care',
      price: '₹4,999',
      duration: '1 Month',
      services: 20,
      benefits: ['Unlimited cleaning', '30% discount on repairs', '24/7 support', 'Free quarterly maintenance', 'Emergency services'],
      popular: false,
      icon: <Zap className="text-yellow-500" size={32} />
    }
  ];

  const PackageCard = ({ pkg, isActive = false }) => (
    <div className={`bg-white p-6 rounded-xl shadow-sm border ${pkg.popular ? 'ring-2 ring-purple-500' : ''} ${isActive ? 'border-green-500' : ''}`}>
      {pkg.popular && (
        <div className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        {pkg.icon}
        <div>
          <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
          {isActive && <p className="text-sm text-green-600">Active Package</p>}
        </div>
      </div>

      {isActive ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Valid Until</p>
              <p className="font-semibold">{pkg.endDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Services Left</p>
              <p className="font-semibold">{pkg.remainingServices}/{pkg.totalServices}</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${(pkg.remainingServices / pkg.totalServices) * 100}%` }}
            ></div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Benefits</p>
            <ul className="space-y-1">
              {pkg.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition">
            Renew Package - {pkg.renewalPrice}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-800">{pkg.price}</span>
            <span className="text-gray-500">/{pkg.duration}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            <span>{pkg.services} services included</span>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">What's included:</p>
            <ul className="space-y-1">
              {pkg.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/user-dashboard')} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">Packages & Subscriptions</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6 max-w-md">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
              activeTab === 'active'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Active Packages
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
              activeTab === 'available'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Available Packages
          </button>
        </div>

        {activeTab === 'active' ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Active Packages</h2>
            {activePackages.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activePackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} isActive={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Package size={64} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No Active Packages</h3>
                <p className="text-gray-500 mb-6">Subscribe to a package to get better deals and priority service.</p>
                <button 
                  onClick={() => setActiveTab('available')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Browse Packages
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Package</h2>
            <p className="text-gray-600 mb-6">Select a package that best fits your home service needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availablePackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>

            {/* Package Benefits */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why Choose Our Packages?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Guaranteed Quality</h4>
                  <p className="text-sm text-gray-600">All services come with quality guarantee and insurance coverage</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Priority Booking</h4>
                  <p className="text-sm text-gray-600">Get priority slots and faster service response times</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={32} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Discounts</h4>
                  <p className="text-sm text-gray-600">Save more with package discounts and special offers</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;
import React from 'react';
import { User, MapPin, DollarSign, Clock, Phone, Navigation, Wrench, CheckCircle, FileText } from 'lucide-react';

const MyJobs = ({ 
  jobTab, 
  setJobTab, 
  allJobs, 
  updateBookingStatus, 
  handleGenerateBill 
}) => {
  const filteredJobs = allJobs.filter(job => {
    if (jobTab === 'Ongoing') return job.status === 'Ongoing';
    if (jobTab === 'Completed') return job.status === 'Completed';
    if (jobTab === 'Cancelled') return job.status === 'Cancelled';
    return false;
  });

  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="font-bold text-gray-800 mb-4">My Jobs</h3>
        <div className="flex gap-2 flex-wrap">
          {['Ongoing', 'Completed', 'Cancelled'].map(tab => (
            <button 
              key={tab}
              onClick={() => setJobTab(tab)}
              className={`px-4 py-2 text-sm rounded-lg ${
                jobTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab} ({allJobs.filter(job => {
                if (tab === 'Ongoing') return job.status === 'Ongoing';
                if (tab === 'Completed') return job.status === 'Completed';
                if (tab === 'Cancelled') return job.status === 'Cancelled';
                return false;
              }).length})
            </button>
          ))}
        </div>
      </div>
      <div className="divide-y">
        {filteredJobs.map((job) => (
          <div key={job.id} className="p-6">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{job.customer}</h4>
                  <p className="text-sm text-gray-600">{job.service}</p>
                </div>
                <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  #{job.bookingId}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 flex items-center gap-2">
                <MapPin className="text-red-500" size={16} />
                <span className="font-medium">Address:</span> {job.location} ({job.distance})
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <DollarSign className="text-green-600" size={16} />
                <span className="font-bold text-green-600">₹{job.amount}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-blue-600" size={16} />
                <span className="text-gray-700">{job.time}</span>
              </div>
            </div>

            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                job.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-700' :
                job.status === 'Completed' ? 'bg-green-100 text-green-700' :
                'bg-red-100 text-red-700'
              }`}>
                {job.bookingStatus.replace('_', ' ')}
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-2">
                <Phone size={16} /> Call {job.customer.split(' ')[0]}
              </button>

              <button 
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(job.location)}`, '_blank')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2"
              >
                <Navigation size={16} /> Navigate
              </button>

              {job.bookingStatus === 'ASSIGNED' && (
                <button 
                  onClick={() => updateBookingStatus(job.id, 'ON_THE_WAY')}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 flex items-center gap-2"
                >
                  <Navigation size={16} /> On the Way
                </button>
              )}
              {job.bookingStatus === 'ON_THE_WAY' && (
                <button 
                  onClick={() => updateBookingStatus(job.id, 'STARTED')}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 flex items-center gap-2"
                >
                  <Wrench size={16} /> Start Job
                </button>
              )}
              {job.bookingStatus === 'STARTED' && (
                <button 
                  onClick={() => updateBookingStatus(job.id, 'COMPLETED')}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-2"
                >
                  <CheckCircle size={16} /> Complete Job
                </button>
              )}
              {job.bookingStatus === 'COMPLETED' && (
                <button 
                  onClick={() => handleGenerateBill(job)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 flex items-center gap-2"
                >
                  <FileText size={16} /> Generate Bill
                </button>
              )}
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No {jobTab.toLowerCase()} jobs.
          </div>
        )}
      </div>
    </section>
  );
};

export default MyJobs;
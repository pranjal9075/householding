import React, { useState } from 'react';

const TechniciansManagement = () => {
  const [technicians] = useState([
    { id: 1, name: 'Raj Kumar', skill: 'Plumbing', status: 'Online', rating: 4.8, totalJobs: 145, verified: true, blocked: false, phone: '+91 98765 11111', city: 'Noida' },
    { id: 2, name: 'Amit Singh', skill: 'Electrical', status: 'Offline', rating: 4.6, totalJobs: 98, verified: true, blocked: false, phone: '+91 98765 22222', city: 'Ghaziabad' },
    { id: 3, name: 'Suresh Yadav', skill: 'AC Repair', status: 'Online', rating: 4.9, totalJobs: 67, verified: true, blocked: false, phone: '+91 98765 33333', city: 'Noida' },
    { id: 4, name: 'Vikash Kumar', skill: 'Carpentry', status: 'Online', rating: 4.7, totalJobs: 89, verified: false, blocked: false, phone: '+91 98765 44444', city: 'Delhi' },
    { id: 5, name: 'Mohan Lal', skill: 'Plumbing', status: 'Offline', rating: 3.2, totalJobs: 23, verified: true, blocked: true, phone: '+91 98765 55555', city: 'Noida' }
  ]);

  const [pendingTechnicians] = useState([
    { id: 6, name: 'Rajesh Kumar', skill: 'Electrician', phone: '+91 98765 66666', documents: 'Complete', city: 'Delhi' },
    { id: 7, name: 'Deepak Singh', skill: 'AC Repair', phone: '+91 98765 77777', documents: 'Incomplete', city: 'Ghaziabad' }
  ]);

  const getStatusColor = (status) => {
    return status === 'Online' ? 'bg-green-600' : 'bg-gray-600';
  };

  const handleApprove = (techId) => {
    alert(`Technician approved! They can now login and receive jobs.`);
  };

  const handleReject = (techId) => {
    alert('Technician rejected. Documents need revision.');
  };

  const handleBlock = (techId) => {
    alert('Technician blocked successfully.');
  };

  const handleUnblock = (techId) => {
    alert('Technician unblocked successfully.');
  };

  return (
    <div className="space-y-6">
      {/* Pending Approvals */}
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-medium mb-4">⏳ Pending Approvals ({pendingTechnicians.length})</h2>
        <div className="space-y-3">
          {pendingTechnicians.map((tech) => (
            <div key={tech.id} className="p-4 bg-yellow-900/20 border border-yellow-600 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">📄 {tech.name}</p>
                  <p className="text-sm text-slate-400">{tech.skill} • {tech.city} • Documents: {tech.documents}</p>
                  <p className="text-sm text-slate-400">{tech.phone}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleApprove(tech.id)}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleReject(tech.id)}
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

      {/* All Technicians */}
      <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-medium mb-4">👨🔧 All Technicians ({technicians.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Skill</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Rating</th>
                <th className="pb-3 font-medium">Total Jobs</th>
                <th className="pb-3 font-medium">Verification</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {technicians.map((tech) => (
                <tr key={tech.id} className="hover:bg-slate-800/50 transition">
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-xs text-slate-400">{tech.phone}</p>
                      <p className="text-xs text-slate-400">{tech.city}</p>
                    </div>
                  </td>
                  <td className="py-4 font-medium">{tech.skill}</td>
                  <td className="py-4">
                    <span className={`${getStatusColor(tech.status)} px-2 py-1 rounded text-xs font-medium flex items-center gap-1 w-fit`}>
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {tech.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-medium">{tech.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 font-bold">{tech.totalJobs}</td>
                  <td className="py-4">
                    <span className={`${tech.verified ? 'bg-green-600' : 'bg-red-600'} px-2 py-1 rounded text-xs font-medium`}>
                      {tech.verified ? '✅ Verified' : '❌ Unverified'}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs">View Details</button>
                      {tech.blocked ? (
                        <button 
                          onClick={() => handleUnblock(tech.id)}
                          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs"
                        >
                          Unblock
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleBlock(tech.id)}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs"
                        >
                          Block
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
    </div>
  );
};

export default TechniciansManagement;
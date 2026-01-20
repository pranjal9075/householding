import React from 'react';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const Availability = ({ 
  workingHours, 
  setWorkingHours, 
  availability, 
  setAvailability 
}) => {
  return (
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
  );
};

export default Availability;
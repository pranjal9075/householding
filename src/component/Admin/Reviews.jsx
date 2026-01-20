import React, { useState } from 'react';

const Reviews = () => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    { id: 1, user: 'John Doe', technician: 'Rajesh Kumar', service: 'Plumbing', rating: 5, comment: 'Excellent work! Very professional and quick.', date: '2024-01-15', status: 'verified', flagged: false },
    { id: 2, user: 'Alice Smith', technician: 'Amit Singh', service: 'Electrical', rating: 2, comment: 'Poor service, came late and work was not satisfactory.', date: '2024-01-14', status: 'verified', flagged: true },
    { id: 3, user: 'Michael Brown', technician: 'Suresh Yadav', service: 'AC Repair', rating: 5, comment: 'Amazing service! Fixed my AC perfectly.', date: '2024-01-13', status: 'suspicious', flagged: false },
    { id: 4, user: 'Sarah Lee', technician: 'Vikash Kumar', service: 'Carpentry', rating: 1, comment: 'Terrible experience. Damaged my furniture.', date: '2024-01-12', status: 'verified', flagged: true },
    { id: 5, user: 'David Wilson', technician: 'Rajesh Kumar', service: 'Plumbing', rating: 5, comment: 'Great work as always!', date: '2024-01-11', status: 'fake', flagged: false }
  ];

  const filteredReviews = reviews.filter(review => {
    if (filter === 'flagged') return review.flagged;
    if (filter === 'fake') return review.status === 'fake';
    if (filter === 'suspicious') return review.status === 'suspicious';
    return true;
  });

  const flagTechnician = (reviewId) => {
    alert('Technician flagged for review');
  };

  const removeReview = (reviewId) => {
    alert('Review removed successfully');
  };

  const getRatingStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getStatusBadge = (status) => {
    const colors = {
      verified: 'bg-green-600',
      suspicious: 'bg-yellow-600',
      fake: 'bg-red-600'
    };
    return <span className={`px-2 py-1 rounded text-xs text-white ${colors[status]}`}>{status}</span>;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-white">Reviews & Ratings</h1>
        <div className="flex gap-3">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-slate-300 text-black  rounded-lg"
          >
            <option value="all">All Reviews</option>
            <option value="flagged">Flagged</option>
            <option value="fake">Fake Reviews</option>
            <option value="suspicious">Suspicious</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <h3 className="text-sm text-slate-600">Total Reviews</h3>
          <p className="text-2xl font-bold text-slate-800">{reviews.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <h3 className="text-sm text-slate-600">Flagged Reviews</h3>
          <p className="text-2xl font-bold text-red-600">{reviews.filter(r => r.flagged).length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <h3 className="text-sm text-slate-600">Fake Reviews</h3>
          <p className="text-2xl font-bold text-orange-600">{reviews.filter(r => r.status === 'fake').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <h3 className="text-sm text-slate-600">Average Rating</h3>
          <p className="text-2xl font-bold text-green-600">4.2</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-slate-800">User Reviews ({filteredReviews.length})</h2>
        </div>
        <div className="divide-y">
          {filteredReviews.map((review) => (
            <div key={review.id} className={`p-4 ${review.flagged ? 'bg-red-50' : review.status === 'fake' ? 'bg-orange-50' : ''}`}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-sm font-medium">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{review.user}</p>
                    <p className="text-sm text-slate-600">{review.service} • {review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(review.status)}
                  {review.flagged && <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Flagged</span>}
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{getRatingStars(review.rating)}</span>
                  <span className="text-sm text-slate-600">for {review.technician}</span>
                </div>
                <p className="text-slate-700">{review.comment}</p>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => flagTechnician(review.id)}
                  className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                >
                  Flag Technician
                </button>
                <button 
                  onClick={() => removeReview(review.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                >
                  Remove Review
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
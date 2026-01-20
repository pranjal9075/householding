import React from 'react';
import { Star, User } from 'lucide-react';

const Reviews = ({ reviews, myProfile }) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-800">Customer Reviews</h3>
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-600 flex items-center gap-2">
              <Star size={32} className="text-yellow-500 fill-current" /> {myProfile.rating}
            </div>
            <div className="text-sm text-gray-500">{myProfile.totalReviews} total reviews</div>
          </div>
        </div>
      </div>
      
      <div className="divide-y">
        {reviews.map((review) => (
          <div key={review.id} className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{review.customer}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {Array.from({length: 5}, (_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="font-bold text-yellow-600">{review.rating}/5</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
        
        {reviews.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No reviews yet. Complete jobs to receive customer feedback.
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
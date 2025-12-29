import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiSend, FiCheckCircle, FiPlus, FiArrowRight, FiUser, FiMessageSquare } from 'react-icons/fi';

const FeedbackForm = () => {
  // १. रिव्ह्यूज डेटा (Initial Data)
  const [reviews, setReviews] = useState([
    { id: 1, name: "Alex Johnson", rating: 5, comment: "The attention to detail was incredible. Highly recommend their AC repair!", initial: "AJ", color: "bg-blue-600" },
    { id: 2, name: "Sarah Miller", rating: 4, comment: "Very punctual and professional cleaning crew. My house looks brand new.", initial: "SM", color: "bg-purple-600" },
    { id: 3, name: "David Chen", rating: 5, comment: "Affordable and fast. Best service in the city!", initial: "DC", color: "bg-orange-600" }
  ]);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', comment: '' });

  // २. फॉर्म सबमिट लॉजिक
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating!");
      return;
    };
    
    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: rating,
      comment: formData.comment,
      initial: formData.name.charAt(0).toUpperCase(),
      color: "bg-emerald-600"
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
  };

  const handleReset = () => {
    setRating(0);
    setFormData({ name: '', comment: '' });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 relative overflow-hidden font-sans">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-600 font-black tracking-[0.2em] uppercase text-[10px] bg-orange-50 px-4 py-2 rounded-full border border-orange-100"
          >
            User Testimonials
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 font-serif italic">thousands.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* डावी बाजू: REVIEWS WALL (Bento Grid) */}
          <div className="lg:col-span-7">
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              <AnimatePresence>
                {reviews.map((rev, index) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="break-inside-avoid bg-white/80 backdrop-blur-md border border-white p-6 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all group border-b-4 border-b-slate-100"
                  >
                    <div className="flex gap-1 mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} size={14} fill={i < rev.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed mb-6 italic text-sm">"{rev.comment}"</p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${rev.color} rounded-2xl flex items-center justify-center text-white font-bold shadow-lg text-sm`}>
                        {rev.initial}
                      </div>
                      <span className="font-black text-slate-800 tracking-tight text-sm">{rev.name}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* उजवी बाजू: FEEDBACK FORM (Fixed/Sticky Card) */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <motion.div 
              className="bg-slate-900 rounded-[3rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" exit={{ opacity: 0, x: 20 }}>
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Post a Review</h2>
                    <p className="text-slate-400 font-medium mb-8 text-sm">Your feedback drives our excellence.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Rating Selector */}
                      <div className="bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/10 mb-6">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Your Rating</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s} type="button"
                              onClick={() => setRating(s)}
                              onMouseEnter={() => setHover(s)}
                              onMouseLeave={() => setHover(0)}
                              className="focus:outline-none transition-transform active:scale-90"
                            >
                              <FiStar size={24} className={`transition-all ${s <= (hover || rating) ? "text-yellow-400 fill-yellow-400 drop-shadow-glow" : "text-white/20"}`} />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="relative">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                          <input 
                            type="text" required placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-orange-500 transition-all font-bold text-sm"
                          />
                        </div>
                        <div className="relative">
                          <FiMessageSquare className="absolute left-4 top-6 text-white/20" />
                          <textarea 
                            rows="4" required placeholder="Share your experience..."
                            value={formData.comment}
                            onChange={(e) => setFormData({...formData, comment: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-orange-500 transition-all font-bold resize-none text-sm"
                          ></textarea>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "#EA580C" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all mt-6 shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)]"
                      >
                        Publish Review <FiArrowRight />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 shadow-inner">
                      <FiCheckCircle size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Review Posted!</h3>
                    <p className="text-slate-400 font-medium text-sm">Thank you for supporting our local experts.</p>
                    <button 
                      onClick={handleReset}
                      className="mt-10 text-orange-500 font-black hover:text-white transition-colors flex items-center gap-2 mx-auto text-sm"
                    >
                      <FiPlus /> Write Another Review
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
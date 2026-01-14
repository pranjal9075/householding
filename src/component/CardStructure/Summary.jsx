import React from 'react';

const AcSummary = (props) => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base text-justify space-y-6">
        <p>
         {props.title}
        </p>
      </div>
    </section>
  );
};

export default AcSummary;
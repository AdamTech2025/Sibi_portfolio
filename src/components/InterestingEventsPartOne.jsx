import React from 'react';
import sridharImage from '../assets/sridher_vanbu.jpeg';
import homelaneCEOImage from '../assets/homelane_CEO.jpeg';

const InterestingEventsPartOne = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ZOHO CEO Event */}
      <section id="zoho-event" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 text-gray-900">
              Interesting events
            </h2>
            
            <h3 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 text-gray-600">
              A tech billionaire invited me to his house.
            </h3>
            
            {/* Event Image */}
            <div className="text-center mb-8">
              <img 
                src={sridharImage} 
                alt="Meeting with ZOHO CEO" 
                className="w-full max-w-lg mx-auto object-cover rounded-lg shadow-lg mb-3"
              />
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Add your content here...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Homelane CEO Event */}
      <section id="homelane-event" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 text-gray-600">
              I met the Founder and CEO of Indians largest home interior company when I was building my own
            </h3>
            
            {/* Event Image */}
            <div className="text-center mb-8">
              <img 
                src={homelaneCEOImage} 
                alt="Meeting with Homelane CEO" 
                className="w-full max-w-lg mx-auto object-cover rounded-lg shadow-lg mb-3"
              />
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Add your content here...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterestingEventsPartOne; 
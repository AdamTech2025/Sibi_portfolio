import React from 'react';
import sridharImage from '../assets/sridher_vanbu.jpeg';
import homelaneCEOImage from '../assets/homelane_CEO.jpeg';
import parliamentImage1 from '../assets/image_1.jpeg';
import parliamentImage2 from '../assets/Image_2.jpeg';
import gtsLogo from '../assets/GTS_logo.jpeg';
import gts1 from '../assets/GTS_1.jpg';
import gts2 from '../assets/GTS_2.jpg';
import gts3 from '../assets/GTS_3.jpg';
import gts4 from '../assets/GTS_4.jpg';
import gts5 from '../assets/GTS_5.jpg';
import gts6 from '../assets/GTS_6.jpg';
import gts7 from '../assets/GTS_7.jpg';
import gts8 from '../assets/GTS_8.jpg';
import gts9 from '../assets/GTS_9.jpg';
import gts10 from '../assets/GTS_10.jpg';
import diasorinLogo from '../assets/diasorin-logo.svg';
import diasorinMD from '../assets/Dicsorim_Rajesh_Mani.jpeg';

const InterestingEvents = () => {
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

      {/* Parliament Member Event */}
      <section id="parliament-event" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 text-gray-600">
              Became friends with a member of parliament and told him AI will outperform him in writing literature
            </h3>
            
            {/* Event Images - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="text-center">
                <img 
                  src={parliamentImage1} 
                  alt="Meeting with Parliament Member - Image 1" 
                  className="w-full object-cover rounded-lg shadow-lg mb-3"
                />
              </div>
              
              <div className="text-center">
                <img 
                  src={parliamentImage2} 
                  alt="Meeting with Parliament Member - Image 2" 
                  className="w-full object-cover rounded-lg shadow-lg mb-3"
                />
              </div>
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

      {/* GTS AI Company Event */}
      <section id="gts-event" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16">
        
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cold called a founder of an AI company and secured a project collaboration
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              
              {/* Company Logo Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-8 sm:px-12 sm:py-10 text-center border-b border-gray-100">
                <img 
                  src={gtsLogo} 
                  alt="GTS - Globose Technology Solutions" 
                  className="h-16 sm:h-20 lg:h-24 mx-auto object-contain drop-shadow-sm"
                />
                <h4 className="text-lg sm:text-xl font-medium text-gray-700 mt-4">
                  Globose Technology Solutions
                </h4>
              </div>

              {/* Project Gallery */}
              <div className="p-8 sm:p-12">
                {/* <h5 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 text-center">
                  Project Documentation
                </h5> */}
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
                  {[gts1, gts2, gts3, gts4, gts5, gts6, gts7, gts8, gts9, gts10].map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src={image} 
                        alt={`GTS Project Documentation ${index + 1}`} 
                        className="w-full h-32 sm:h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="text-center">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    I cold called the founder of GTS and successfully secured a project task. 
                    This direct approach opened doors to working with an innovative AI technology company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diasorin MD Event */}
      <section id="diasorin-event" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl text-center mb-8 sm:mb-12 text-gray-600">
              MD of Diasorin India bought stuff from me after randomly meeting on a flight
            </h3>
            
            {/* Company Logo - Centered at top */}
            <div className="text-center mb-8">
              <img 
                src={diasorinLogo} 
                alt="Diasorin Company Logo" 
                className="h-16 sm:h-20 mx-auto object-contain"
              />
            </div>
            
            {/* MD Photo - Centered */}
            <div className="text-center mb-8">
              <img 
                src={diasorinMD} 
                alt="Meeting with Diasorin MD Rajesh Mani" 
                className="w-full max-w-sm mx-auto object-cover rounded-lg shadow-lg mb-3"
              />
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Met the MD of Diasor Rajesh Mani in during a flight and had an interesting conversation. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterestingEvents; 
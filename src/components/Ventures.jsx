import React from 'react';
import sureshTimbersImage from '../assets/suresh_timbers.jpeg';
import interioLogo from '../assets/interio_logo.png';
import adamxLogo from '../assets/adamx_technologies_logo.png';

const Ventures = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Ventures
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Building businesses and creating value through innovation and strategic thinking
            </p>
          </div>

          {/* Ventures Grid */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Venture 1 - Suresh Timbers */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-tree text-green-600 text-2xl mr-3"></i>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Suresh Timbers
                    </h3>
                  </div>
                  {/* <p className="text-base sm:text-lg text-gray-600 mb-4">
                    Started my entrepreneurial journey in the timber business at just 16 years old. 
                    Building sustainable timber solutions and learning the fundamentals of business operations.
                  </p> */}
                                      <div className="space-y-2">
                      <div className="flex items-center">
                        <i className="fas fa-calendar text-gray-500 mr-2"></i>
                        <span className="text-gray-600">Internal project: 2021 (at age 16)</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-industry text-gray-500 mr-2"></i>
                        <span className="text-gray-600">Industry: Timber Business - digital marketing and sales</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-chart-line text-gray-500 mr-2"></i>
                        <span className="text-gray-600">Status: Active</span>
                      </div>
                    </div>
                    
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img 
                      src={sureshTimbersImage} 
                      alt="Suresh Timbers Business" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* About Section - Full width within the venture card */}
              <div className="mt-8 col-span-full">
                <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center justify-center">
                  <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                  About
                </h4>
                <div className="text-sm text-gray-600">
                  <p>Started my entrepreneurial journey in the timber business at just 16 years old. Focused on digital marketing and sales strategies to grow the business. Learning the fundamentals of business operations and customer relationships. Building sustainable timber solutions while developing my business acumen.</p>
                </div>
              </div>
            </div>

            {/* Venture 2 - Interio Square */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img 
                      src={interioLogo} 
                      alt="Interio Square Logo" 
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-home text-orange-600 text-2xl mr-3"></i>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Interio Square
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-calendar text-gray-500 mr-2"></i>
                      <span className="text-gray-600">Founded: 2023 (at age 18)</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-palette text-gray-500 mr-2"></i>
                      <span className="text-gray-600">Industry: Interior Design Business</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-chart-line text-gray-500 mr-2"></i>
                      <span className="text-gray-600">Status: Growing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About Section - Full width within the venture card */}
              <div className="mt-8 col-span-full">
                <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center justify-center">
                  <i className="fas fa-info-circle text-orange-600 mr-2"></i>
                  About
                </h4>
                <div className="text-sm text-gray-600">
                  <p>Founded Interio Square at 18 to revolutionize interior design solutions. Combining creativity with business acumen to deliver exceptional design experiences. Building a brand that transforms spaces while establishing strong client relationships. Focused on innovative design approaches and sustainable business growth in the interior design industry.</p>
                </div>
              </div>
            </div>

            {/* Venture 3 - Adam Labs */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-robot text-purple-600 text-2xl mr-3"></i>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Adam Labs
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-calendar text-gray-500 mr-2"></i>
                      <span className="text-gray-600">Founded: 2024</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-brain text-gray-500 mr-2"></i>
                      <span className="text-gray-600">Industry: AI Company</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-chart-line text-gray-500 mr-2"></i>
                      <span className="text-gray-600">Status: Scaling</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img 
                      src={adamxLogo} 
                      alt="Adam Labs Logo" 
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* About Section - Full width within the venture card */}
              <div className="mt-8 col-span-full">
                <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center justify-center">
                  <i className="fas fa-info-circle text-purple-600 mr-2"></i>
                  About
                </h4>
                <div className="text-sm text-gray-600">
                  <p>Founded Adam Labs in 2024 to push the boundaries of artificial intelligence technology. Developing cutting-edge AI solutions that solve real-world problems and create meaningful impact. Building innovative products that harness the power of machine learning and automation. Focused on creating scalable AI technologies that transform industries and improve lives.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
 

        </div>
      </section>
    </div>
  );
};

export default Ventures; 
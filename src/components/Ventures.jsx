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
                <div className="text-sm text-gray-600 text-justify">
                  <p>When I was 16, I took over digital marketing for my father's company, Suresh Timbers. At the time, sales were around $10,000/month. I made a bold bet, scaled the ad budget and launched multiple high-production video shoots. But for the first three months, nothing worked. Zero sales. Everyone turned against me, my own team, my father, even the company wanted to pull the plug. The pressure was intense. I was still a teenager, carrying the weight of the business on my shoulders. But I didn't quit. I doubled down, waited, and finally got results the following month. That early failure, rejection, and eventual comeback built something deeper in me, resilience under pressure.</p>
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
                <div className="text-sm text-gray-600 text-justify">
                  <p>Interio Square was my second and hardest venture. I started it with confidence, but quickly realized it was far tougher than I imagined. I had to handle both sales and production without proper systems, no software, no showroom, and not even machinery, we outsourced almost everything. It was mistake after mistake. I was trying to bootstrap it from scratch and got punched in the gut over and over again. Originally, it was just supposed to be a summer trial before I left to study in France. But I couldn't walk away, I didn't have the heart to shut it down. So I dropped out. After months of relentless grind, the business finally turned a corner. We became profitable, and today, Interio Square is doing $2M ARR. It now funds my next company, an AI venture tackling U.S. healthcare billing.</p>
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
                      <span className="text-gray-600">Founded: 2024 (at age 19)</span>
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
                <div className="text-sm text-gray-600 text-justify">
                  <p>Adam Tech is my most recent and most ambitious venture. Unlike my past companies, I haven't been punched in the face by this one yet, but I know it's coming. This time, I'm going after something 100x bigger automating medical billing in the U.S. healthcare market. Before starting Adam Tech, I booked an Airbnb in Bangalore, locked myself in, and taught myself AI and coding. After a month, I wasn't a genius, but I had enough confidence to start building. Since then, we've already pivoted once under the same company name. But I believe this will be the biggest company I've ever built. Let's see where it takes me.</p>
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
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import profile from '../assets/Sibi_pic.jpeg';
import loyolaImage from '../assets/loyola_college.jpeg';
import iesegImage from '../assets/IESEG IMAGE.jpg';

const PersonalLanding = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-4 sm:pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          {/* Profile Picture */}
          <div className="mb-6 sm:mb-8">
            <img 
              src={profile} 
              alt="Sibi Narendran" 
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full object-cover shadow-lg border-2 border-blue-100"
            />
          </div>

          {/* Text Content */}
          <div>
            {/* Main Introduction */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
              Sibi Narendran
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
              Ordinary guy with extra ordinary abilities.
            </p>
          </div>
        </div>
      </section>

      {/* College Section */}
      <section id="college" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              College drop out
            </h2>
            
            {/* College Images - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="text-center">
                <img 
                  src={loyolaImage} 
                  alt="Loyola College Chennai" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">Loyola College, Chennai</h3>
              </div>
              
              <div className="text-center">
                <img 
                  src={iesegImage} 
                  alt="IESEG School of Management" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">IESEG School of Management, France</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              I did my BBA at Loyola and IESEG in France. Out of 43 students, 18 went to France, while the others either repeated a year or dropped out. I was one of the 18 who went, but I was the only one who dropped out during the first semester to return to India and scale my business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}


      {/* Contact Section */}


      {/* Footer */}

    </div>
  );
};

export default PersonalLanding; 
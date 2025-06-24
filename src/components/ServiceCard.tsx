import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  bgColor, 
  textColor = 'text-gray-900', 
  illustration,
  href = '#'
}) => {
  return (
    <a 
      href={href}
      className={`${bgColor} rounded-3xl overflow-hidden h-64 flex transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}
    >
      {/* Left Column - Text Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className={`text-xl font-bold ${textColor} mb-4 leading-tight`}>
            {title}
          </h3>
        </div>
        
        <div className="flex items-center">
          <div className={`flex items-center ${textColor} group-hover:translate-x-1 transition-transform duration-300`}>
            <ArrowRight className="w-5 h-5 mr-2" />
            <span className="font-medium">Learn more</span>
          </div>
        </div>
      </div>
      
      {/* Right Column - Image */}
      <div className="flex-1 flex items-center justify-center p-6">
        <img 
          src={illustration} 
          alt={title}
          className="w-full h-auto object-contain max-h-40"
        />
      </div>
    </a>
  );
};

export default ServiceCard;
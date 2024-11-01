import React from 'react';

const DirectoryCard = ({ name, title, position, href, image = "/images/default-profile.webp" }) => {
  return (
    <div role="listitem" className="w-full p-4">
      <a
        href={href}
        className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10"></div>
          <img
            src={image}
            loading="lazy"
            alt={`Photo of ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-primary"
            >
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <div className="text-sm text-gray-600 mb-4">
            {title && <span className="font-medium">{title}</span>}
            {title && position && <span className="mx-2">•</span>}
            {position && <span>{position}</span>}
          </div>
          <div className="flex items-center text-primary">
            <span className="text-sm font-medium">View Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DirectoryCard;

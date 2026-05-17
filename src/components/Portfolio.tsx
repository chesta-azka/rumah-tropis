'use client';

import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Project 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Project 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

"use client";

import React from 'react';

const Facilities = () => {
  return (
    <div className="bg-[#4D3C2F] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Facilities</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4"></div>
            <p className="text-white">Facility 1</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4"></div>
            <p className="text-white">Facility 2</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4"></div>
            <p className="text-white">Facility 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

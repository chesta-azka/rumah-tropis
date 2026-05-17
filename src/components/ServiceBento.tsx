"use client";

import React from 'react';

const ServiceBento = () => {
  return (
    <div className="bg-[#4D3C2F] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#3A2D23] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Service 1</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#3A2D23] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Service 2</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-[#3A2D23] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Service 3</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBento;

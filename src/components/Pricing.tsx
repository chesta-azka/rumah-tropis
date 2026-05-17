'use client';

import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-[#4D3C2F] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#3A2D23] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
            <p className="text-4xl font-bold text-white mb-4">$100</p>
            <ul className="text-white space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold mt-8">Choose Plan</button>
          </div>
          <div className="bg-white p-8 rounded-lg text-center text-gray-800">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-4">$200</p>
            <ul className="space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold mt-8">Choose Plan</button>
          </div>
          <div className="bg-[#3A2D23] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <p className="text-4xl font-bold text-white mb-4">$300</p>
            <ul className="text-white space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold mt-8">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

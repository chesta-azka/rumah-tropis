"use client";

import React from 'react';

const FilterSection = () => {
  return (
    <div className="bg-[#4D3C2F] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Filter Section</h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold">Filter 1</button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold">Filter 2</button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold">Filter 3</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

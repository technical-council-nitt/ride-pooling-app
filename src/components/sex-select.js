import React, { useState } from 'react';
import { FaMale, FaFemale, FaTransgenderAlt } from 'react-icons/fa';

const SexSelector = () => {
  const [selectedSex, setSelectedSex] = useState(0);

  const handleSelect = (index) => {
    setSelectedSex(index);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handleSelect(0)}
        className={`flex items-center space-x-2 p-2 border rounded-md ${selectedSex === 0 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
      >
        <FaMale />
        <span>Male</span>
      </button>

      <button
        onClick={() => handleSelect(1)}
        className={`flex items-center space-x-2 p-2 border rounded-md ${selectedSex === 1 ? 'bg-pink-500 text-white' : 'bg-white text-black'}`}
      >
        <FaFemale />
        <span>Female</span>
      </button>

      <button
        onClick={() => handleSelect(2)}
        className={`flex items-center space-x-2 p-2 border rounded-md ${selectedSex === 2 ? 'bg-gray-500 text-white' : 'bg-white text-black'}`}
      >
        <FaTransgenderAlt />
        <span>Other</span>
      </button>
    </div>
  );
}
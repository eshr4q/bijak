"use client";
import React from "react";

const DropDown = ({ label, options, value, onChange }) => {
  const handleChange = (e) => {
    console.log("Selected city:", e.target.value);  
    onChange(e);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Array.isArray(options) ? (
            options.map((option, index) => (
              <option key={index} value={option} className="text-gray-800">
                {option}
              </option>
            ))
          ) : (
            <option value="" className="text-gray-400">
              No options available
            </option>
          )}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

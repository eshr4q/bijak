"use client";
import React from "react";

const DropDown = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

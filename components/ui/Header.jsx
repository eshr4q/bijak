"use client";
import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mb-6 text-center bg-red-500 p-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </div>
  );
};

export default Header;

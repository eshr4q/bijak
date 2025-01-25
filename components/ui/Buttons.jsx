"use client";
import React from "react";

const Buttons = ({ text, onClick, variant }) => {
  const baseStyle = "px-4 py-2 rounded-full text-white ";
  const styles = {
    primary: `${baseStyle} bg-red-600 hover:bg-red-700`,
    secondary: `${baseStyle} bg-gray-500 hover:bg-gray-600`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {text}
    </button>
  );
};

export default Buttons;

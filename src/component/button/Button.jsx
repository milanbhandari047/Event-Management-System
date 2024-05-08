import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;

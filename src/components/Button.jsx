import React from 'react';

const Button = ({ type = 'button', onClick, children, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
    >
      {children}
    </button>
  );
};

export default Button;

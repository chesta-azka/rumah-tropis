import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

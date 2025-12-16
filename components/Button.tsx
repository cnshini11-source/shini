import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "gradient-gold text-black hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]",
    outline: "border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black",
    ghost: "text-gray-300 hover:text-[#C5A059]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
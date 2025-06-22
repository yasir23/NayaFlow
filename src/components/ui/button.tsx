"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}) => {
  // Base styles
  let variantClasses = "";
  let sizeClasses = "";

  // Variant styles
  switch (variant) {
    case "outline":
      variantClasses = "border border-gray-300 bg-transparent hover:bg-gray-50";
      break;
    case "ghost":
      variantClasses = "bg-transparent hover:bg-gray-50";
      break;
    default:
      variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  }

  // Size styles
  switch (size) {
    case "sm":
      sizeClasses = "h-8 px-3 text-xs";
      break;
    case "lg":
      sizeClasses = "h-10 px-8";
      break;
    default:
      sizeClasses = "h-9 px-4 py-2";
  }

  const buttonClasses = `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${sizeClasses} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
      
    </button>
  );
};

export default Button; 
import React from "react";
import { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({ text, href, children, onClick }) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-primary rounded-full w-full sm:w-auto min-w-[200px] max-w-[300px] hover:bg-[#0077cc] transition-colors duration-200 mx-auto"
    >
      {children || <span>{text}</span>}
    </Component>
  );
};

export default Button;

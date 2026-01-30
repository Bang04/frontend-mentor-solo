import { useState } from "react";


const HamburgerButton = ({ isOpen , onToggle }) => {

  return (
    <button
      onClick={onToggle}
      className="flex md:hidden relative w-8 h-6 flex flex-col justify-between"
    >
      <span
        className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300
          ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-300
          ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300
          ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
      />
    </button>
  );
}


export default HamburgerButton;
import { useState } from "react";

import logo from "../assets/logo.png";


const Navbar = ({ onSlideChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 text-white px-6 py-4 backdrop-blur">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo simple */}
        <img 
          src={logo} 
          alt="Logo" 
          className="h-15 w-auto cursor-pointer" 
        />
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <button
              onClick={() => onSlideChange(0)}
              className="hover:text-blue-400 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => onSlideChange(1)}
              className="hover:text-blue-400 transition"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => onSlideChange(2)}
              className="hover:text-blue-400 transition"
            >
              Work Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => onSlideChange(3)}
              className="hover:text-blue-400 transition"
            >
              Certifications
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {/* Menú hamburguesa */}
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X
                  : "M4 6h16M4 12h16M4 18h16" // 3 líneas
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/95 text-white mt-4 rounded-lg px-6 py-4 space-y-4">
          <li>
            <button
              onClick={() => { onSlideChange(0); setOpen(false); }}
              className="w-full text-left hover:text-blue-400 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => { onSlideChange(1); setOpen(false); }}
              className="w-full text-left hover:text-blue-400 transition"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => { onSlideChange(2); setOpen(false); }}
              className="w-full text-left hover:text-blue-400 transition"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => { onSlideChange(3); setOpen(false); }}
              className="w-full text-left hover:text-blue-400 transition"
            >
              Certs
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

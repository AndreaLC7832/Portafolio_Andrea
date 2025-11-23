import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ onSlideChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
        />

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <button
              onClick={() => onSlideChange(0)}
              className="text-white font-medium hover:text-blue-300 transition"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => onSlideChange(1)}
              className="text-white font-medium hover:text-blue-300 transition"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() => onSlideChange(2)}
              className="text-white font-medium hover:text-blue-300 transition"
            >
              Work Experience
            </button>
          </li>

          <li>
            <button
              onClick={() => onSlideChange(3)}
              className="text-white font-medium hover:text-blue-300 transition"
            >
              Certifications
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/90 text-white mt-4 rounded-lg px-6 py-4 space-y-4 shadow-md">
          <li>
            <button
              onClick={() => { onSlideChange(0); setOpen(false); }}
              className="w-full text-left text-white font-medium hover:text-blue-300"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => { onSlideChange(1); setOpen(false); }}
              className="w-full text-left text-white font-medium hover:text-blue-300"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() => { onSlideChange(2); setOpen(false); }}
              className="w-full text-left text-white font-medium hover:text-blue-300"
            >
              Experience
            </button>
          </li>

          <li>
            <button
              onClick={() => { onSlideChange(3); setOpen(false); }}
              className="w-full text-left text-white font-medium hover:text-blue-300"
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

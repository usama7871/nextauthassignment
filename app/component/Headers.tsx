"use client";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-300 transition duration-200"
        >
          NextAuth Pro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-sm font-medium hover:text-gray-300 transition duration-200"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-sm font-medium hover:text-gray-300 transition duration-200"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-gray-300 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-gray-300 transition duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="bg-gray-800 md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <a
                href="#home"
                className="text-sm font-medium hover:text-gray-300 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-sm font-medium hover:text-gray-300 transition duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium hover:text-gray-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-gray-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;


import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Movie Database</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-black">Home</Link></li>
        <li><Link to="/blog" className="text-black">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
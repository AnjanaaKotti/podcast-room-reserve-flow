
import React from 'react';
import { Mic, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-podcast-primary text-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Mic size={24} />
          <h1 className="text-xl font-bold">PodcastRoom</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center gap-1 hover:text-podcast-muted transition-colors">
            <Calendar size={18} />
            <span>Reservations</span>
          </Link>
          <Link to="/services" className="flex items-center gap-1 hover:text-podcast-muted transition-colors">
            <span>Services</span>
          </Link>
          <Link to="/about" className="flex items-center gap-1 hover:text-podcast-muted transition-colors">
            <span>About</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 bg-white text-podcast-primary px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            <User size={18} />
            <span>Sign In</span>
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

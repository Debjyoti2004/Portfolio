import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/Components/ui/button';
import Navbar from './Navbar';
import Mobilenav from './Mobilenav';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'py-6 bg-gray-900/40 backdrop-blur-sm'
      }`}
    >
      <div className='container mx-auto flex items-center justify-between px-4'>
        {/* Logo */}
        <Link to='/' className="group">
          <h1 className='text-xl md:text-2xl font-bold text-white flex items-center'>
            Debjyoti
            <span className='text-accent text-3xl md:text-4xl ml-1'>.</span>
          </h1>
        </Link>

        {/* Desktop Navbar */}
        <div className='hidden xl:flex items-center gap-6'>
          <Navbar />
          <Link to='/contact'>
            <Button className='bg-accent hover:bg-accent/80 active:scale-95 cursor-pointer text-gray-900 font-medium px-5 py-1 rounded-md transition-all duration-200 text-sm'>
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className='xl:hidden'>
          <Mobilenav />
        </div>
      </div>
    </header>
  );
};

export default Header;

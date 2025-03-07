import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className='flex items-center gap-8'>
      {links.map((link, index) => (
        <Link 
          to={link.path} 
          key={index} 
          className={`
            relative font-medium capitalize transition-all duration-200
            ${location.pathname === link.path ? 'text-accent' : 'text-white'}
            hover:text-accent active:scale-95
          `}
        >
          {link.name}
          <span className={`
            absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-200
            ${location.pathname === link.path ? 'w-full' : 'w-0'}
            hover:w-full
          `}></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
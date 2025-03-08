import React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { motion } from 'framer-motion';

const navigationLinks = [
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

const MobileNavigation = () => {
  const location = useLocation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.4 } }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300">
        <HiMenuAlt3 className="text-2xl text-accent" />
      </SheetTrigger>
      
      <SheetContent className="bg-[#1F1F1F]/95 backdrop-blur-md border-l-accent shadow-xl p-0 text-white">
        <div className="flex flex-col items-center justify-center h-full py-10">
          <motion.div 
            className="flex flex-col gap-6 items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navigationLinks.map((link, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <SheetClose asChild>
                  <Link
                    to={link.path}
                    className={`
                      flex items-center justify-center gap-3 py-3 px-6 w-full rounded-lg transition-all duration-300
                      ${location.pathname === link.path 
                        ? 'bg-accent/20 text-accent font-semibold scale-105' 
                        : 'text-white hover:text-accent hover:bg-accent/10'}
                    `}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-xl">{link.name}</span>
                  </Link>
                </SheetClose>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 w-full flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
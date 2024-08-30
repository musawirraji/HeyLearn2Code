'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

function MobileNavigation({ isOpen, onClose }) {
  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Courses' },
    { href: '/', label: 'About' },
    { href: '/', label: 'Sign up' },
    { href: '/', label: 'Login' },
    { href: '/', label: 'Contact us' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 bg-[#66573e] bg-opacity-80 backdrop-blur-sm'
          initial='closed'
          animate='open'
          exit='closed'
          variants={menuVariants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className='flex flex-col h-full p-8'>
            <button
              onClick={onClose}
              className='self-end mb-8'
              aria-label='Close menu'
            >
              <X size={24} color='white' />
            </button>
            <nav>
              <ul className='flex flex-col items-center gap-8 text-2xl text-white'>
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className='transition-colors hover:text-accent-400'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNavigation;

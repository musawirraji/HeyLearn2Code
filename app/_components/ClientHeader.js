'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='px-8 py-5 border-b border-gray-300'>
      <div className='flex items-center justify-between mx-auto max-w-7xl'>
        <Logo />
        <div className='z-50 hidden md:block'>
          <Navigation />
        </div>
        <button
          className='z-50 md:hidden'
          onClick={() => setIsMenuOpen(true)}
          aria-label='Open menu'
        >
          <Menu size={24} color='#8297f3' />
        </button>
      </div>
      <MobileNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}

export default ClientHeader;

import React from 'react';
import dynamic from 'next/dynamic';

const ClientHeader = dynamic(() => import('./ClientHeader'), { ssr: false });

function Header() {
  return <ClientHeader />;
}

export default Header;

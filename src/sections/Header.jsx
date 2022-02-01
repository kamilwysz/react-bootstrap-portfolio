import React from 'react';
import Navigation from '../components/Navigation';
import Myname from '../components/Myname';

function Header() {
  return (
    <header className="bg-primary text-secondary text-center svg-border-rounded vh-100">
      <Navigation />
      <Myname />
    </header>
  );
}

export default Header;

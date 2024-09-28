import React from 'react';
import Seletor from './Seletor';

const Header = () => {
  return (
    <nav className="navbar bg-sim">
      <div className="container d-flex align-items-center" style={{ padding: '0' }}>
        <div style={{ flex: '0 0 auto' }}>
          <Seletor />
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-white">
            Trabalho Sistemas Operacionais
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
  
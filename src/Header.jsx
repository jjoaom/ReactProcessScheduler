import React from 'react';
import Seletor from './Seletor';

const Header = () => {
  return (
    <nav className="navbar  bg-sim">
      <div className="container d-flex align-items-center" style={{ padding: '0' }}>
        <div style={{ flex: '0 0 auto', marginRight: 'auto' }}>
          <Seletor />
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <h1 className="text-white">
            Trabalho Sistemas Operacionais
          </h1>
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <button className="btn color-p">
            Ajuda
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Botão à esquerda */}
        <span className='navbar-text text-white'>
          Professora Cíntia Pinto Avelar
        </span>

        {/* Título no centro */}
        <h1 className="mx-auto text-white">
          Trabalho Sistemas Operacionais
        </h1>

        {/* Botão à direita */}
        <button className="btn btn-primary">
          Ajuda
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

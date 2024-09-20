import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Texto à esquerda com largura limitada */}
        <div className="d-flex align-items-center" style={{ flexBasis: '20%' }}>
          <span className="navbar-text text-white">
            Professora Cíntia Pinto Avelar
          </span>
        </div>

        {/* Título centralizado */}
        <div className="mx-auto" style={{ flexBasis: '60%' }}>
          <h1 className="text-white text-center">
            Trabalho Sistemas Operacionais
          </h1>
        </div>

        {/* Botão à direita com largura limitada */}
        <div className="d-flex align-items-center justify-content-end" style={{ flexBasis: '20%' }}>
          <button className="btn btn-primary">
            Ajuda
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

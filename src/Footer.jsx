import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-sim text-white py-1">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          
          {/* Cauan */}
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            <span className="me-2">Cauan Augusto</span>
            <a href="https://github.com/cauan-au/" target="_blank" rel="noopener noreferrer" className="text-white me-2">
              <FaGithub className="neon-icon"/>
            </a>
            <a href="https://www.linkedin.com/cauanaugusto" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin className="neon-icon" />
            </a>
          </div>

          {/* João */}
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            <span className="me-2">João Marcos Aquino</span>
            <a href="https://github.com/jjoaom" target="_blank" rel="noopener noreferrer" className="text-white me-2">
              <FaGithub className="neon-icon" />
            </a>
            <a href="https://www.linkedin.com/in/jjoaom" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin className="neon-icon"/>
            </a>
          </div>

          {/* Texto central */}
          <div className="col-md-2 text-center ">
            <small className="ms-2" >Professora Cíntia Pinto Avelar  </small>
            <small className="mt-2">@PUC-Minas 2024</small>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

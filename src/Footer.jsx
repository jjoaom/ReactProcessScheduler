import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          
          {/* Cauan */}
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            <span className="me-2">Cauan Augusto</span>
            <a href="https://github.com/cauan-au/" target="_blank" rel="noopener noreferrer" className="text-white me-2">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin />
            </a>
          </div>

          {/* João */}
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            <span className="me-2">João Marcos Aquino</span>
            <a href="https://github.com/jjoaom" target="_blank" rel="noopener noreferrer" className="text-white me-2">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jjoaom" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin />
            </a>
          </div>

          {/* Texto central */}
          <div className="col-md-4 text-center">
            <span>@PUC-MINAS 2024</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

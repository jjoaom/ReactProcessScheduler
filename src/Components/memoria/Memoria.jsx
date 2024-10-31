import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Tabela from "./Tabela";
import TipoProcesso from "./TipoAlgorithm";

function Memoria() {
  const [showToast, setShowToast] = useState(false);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const colunasVirtual = ['Página Virtual', 'Quadro', 'Bit'];
  const dadosVirtual = [];
  
  for (let i = 0; i < 7; i++) {
      dadosVirtual.push({
          'Página Virtual': i,
          'Quadro': (i % 3 === 0) ? '-' : Math.floor(Math.random() * 16), 
          'Bit': (i % 2 === 0) ? 'Válido' : 'Inválido'
      });
  }
  
  const colunasFisica = ['Quadro', 'Estado', 'Página Virtual'];
  const dadosFisica = [];
  
  for (let i = 0; i < 16; i++) {
      dadosFisica.push({
          'Quadro': i,
          'Estado': i % 2 === 0 ? 'Ocupado' : 'Livre', 
          'Página Virtual': i % 2 === 0 ? i * 2 : '-' 
      });
  }
  

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col
          md={4}
          lg={2}
          className="d-flex overflow-auto flex-column justify-content-start p-2"
        >
          <div className="d-flex flex-wrap w-100 mb-5">
            <div className="w-100 w-md-auto mb-2 me-md-2">
            <h1 className="text-center">Quadros</h1>
            <TipoProcesso/> 
            </div>
            <div className="w-100 d-flex justify-content-evenly">
              
            </div>
            
          </div>
          
          <div
            className="overflow-auto"
            style={{ maxHeight: "50vh", width: "100%" }}
          ></div>
        </Col>
        <Col
          md={8}
          lg={10}
          className="bg-sim d-flex justify-content-evenly h-100"
        >
          <Row className="h-100 w-100">
            <Col className="w-100">
              <h1 className="text-white text-center">Memória Virtual</h1>
              <Tabela colunas={colunasVirtual} dados={dadosVirtual} />
              
            </Col>
            <Col className="w-100">
              <h1 className="text-white text-center">Memória Física</h1>
              <Tabela colunas={colunasFisica} dados={dadosFisica} />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Toast Container */}
      <ToastContainer position="top-center" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Body className="fw-bold">
            Por favor, adicione processos e selecione um algoritmo!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Memoria;

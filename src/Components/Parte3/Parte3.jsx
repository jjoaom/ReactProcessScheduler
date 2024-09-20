import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Parte3() {
  const navigate = useNavigate();

  return (
    <Container className="text-center d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col>
          <h1>🚧 Em Produção 🚧</h1>
          <p>Estamos trabalhando para entregar essa funcionalidade em breve. Volte mais tarde!</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Voltar para o início
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Parte3;

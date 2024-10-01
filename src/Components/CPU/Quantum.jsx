import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container, Toast, ToastContainer } from 'react-bootstrap';

function Quantum() {
  const [formData, setFormData] = useState({
    quantum: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Armazenar o valor do quantum no localStorage
    localStorage.setItem('quantum', formData.quantum);
    setShowToast(true); 
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="d-flex">
        <ButtonGroup className="me-2">
          <Form.Control
            type="number"
            name="quantum"
            value={formData.quantum}
            onChange={handleChange}
            placeholder="Q"
            className="form-control-sm text-center" 
            style={{ width: '70px' }} 
          />
          <Button type="submit" size="sm" className='color-r'>Definir Quantum</Button> 
        </ButtonGroup>
      </Form>

      {/* Container para o Toast */}
      <ToastContainer position="top-start" className="p-3">
        <Toast
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide
          style={{ width: '250px', fontSize: '0.8rem' }} // Ajuste a largura e o tamanho da fonte
        >
          <Toast.Header>
            <strong className="me-auto text-center" style={{ fontSize: '1rem',color: '#D00000' }}>Quantum Definido</strong> {/* Ajusta o tamanho do título */}
          </Toast.Header>
          <Toast.Body className='text-center' style={{ fontSize: '1.0rem', color: '#D00000', fontWeight: 'bolder' }}>{formData.quantum}</Toast.Body> {/* Ajusta o tamanho do corpo */}
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Quantum;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormProcesso({ onAddCard }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    chegada: '', 
    duracao: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(formData);
    setFormData({ name: '', chegada: '', duracao: '' });
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            autoFocus 
            className="custom-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Insira o nome do processo"
          />
        </Form.Group>

        <Form.Group className="mb-3"  controlId="chegada">
          <Form.Control
            className="custom-input"
            type="number"
            name="chegada"
            value={formData.chegada}
            onChange={handleChange} 
            placeholder="Tempo de chegada"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Control
            className="custom-input"
            type="number"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange} 
            placeholder="Tempo de duração"
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="btn text-white color-p" type="submit">
            Criar
          </Button>
        </div>
      </Form>
  );
}

export default FormProcesso;
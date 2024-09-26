import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function FormProcesso({ onAddCard }) {
  const [formData, setFormData] = useState({
    chegada: '',
    duracao: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(''); // Limpa o erro quando o usuário começa a digitar
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifica se os campos estão vazios
    if (!formData.chegada || !formData.duracao) {
      setError('Por favor, preencha todos os campos.');
      
      // Remove o erro após 1 segundo
      setTimeout(() => {
        setError('');
      }, 777);
      
      return;
    }

    const newCard = {
      name: `P${Date.now()}`,
      chegada: parseFloat(formData.chegada),
      duracao: parseFloat(formData.duracao)
    };
    
    onAddCard(newCard);
    setFormData({ chegada: '', duracao: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form.Group className="mb-3" controlId="chegada">
        <Form.Control
          className="custom-input"
          type="number"
          name="chegada"
          value={formData.chegada}
          onChange={handleChange}
          placeholder="Chegada"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="duracao">
        <Form.Control
          className="custom-input"
          type="number"
          name="duracao"
          value={formData.duracao}
          onChange={handleChange}
          placeholder="Duração"
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

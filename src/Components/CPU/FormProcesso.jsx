import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function FormProcesso({ onAddCard, selectedAlgorithm }) {
    const [formData, setFormData] = useState({ chegada: '', duracao: '', prioridade: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (error) setError(''); // Limpa o erro ao digitar
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.chegada || !formData.duracao) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const newCard = {
            name: `P${Date.now()}`,
            chegada: parseFloat(formData.chegada),
            duracao: parseFloat(formData.duracao),

        };

        onAddCard(newCard);
        setFormData({ chegada: '', duracao: '', prioridade: ''});
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Form.Group className="mb-3" controlId="chegada">
                <Form.Control
                    type="number"
                    name="chegada"
                    value={formData.chegada}
                    onChange={handleChange}
                    placeholder="Chegada"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="duracao">
                <Form.Control
                    type="number"
                    name="duracao"
                    value={formData.duracao}
                    onChange={handleChange}
                    placeholder="Duração"
                />
            </Form.Group>
            {/*} campo para prioridade
            {selectedAlgorithm === '' && (
                <Form.Group className="mb-3" controlId="prioridade">
                    <Form.Control
                        type="number"
                        name="prioridade"
                        value={formData.prioridade}
                        onChange={handleChange}
                        placeholder="Prioridade (opcional)"
                    />
                </Form.Group>
            )}
            {*/}

            <div className="d-flex justify-content-center">
                <Button type="submit" className="btn color-p">
                    Criar
                </Button>
            </div>
        </Form>
    );
}

export default FormProcesso;

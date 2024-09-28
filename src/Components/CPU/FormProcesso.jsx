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
        
        if (!formData.chegada || !formData.duracao || (selectedAlgorithm === 'rr' && !formData.tempoQuantum)) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const newCard = {
            name: `P${Date.now()}`,
            chegada: parseFloat(formData.chegada),
            duracao: parseFloat(formData.duracao),
            prioridade: formData.prioridade ? parseFloat(formData.prioridade) : undefined,
            tempoQuantum: formData.tempoQuantum ? parseFloat(formData.tempoQuantum) : undefined,
        };

        onAddCard(newCard);
        setFormData({ chegada: '', duracao: '', prioridade: '', tempoQuantum: '' });
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

            {selectedAlgorithm === 'sjf' && (
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

            {selectedAlgorithm === 'rr' && (
                <Form.Group className="mb-3" controlId="tempoQuantum">
                    <Form.Control
                        type="number"
                        name="tempoQuantum"
                        value={formData.tempoQuantum}
                        onChange={handleChange}
                        placeholder="Tempo Quantum"
                    />
                </Form.Group>
            )}

            <div className="d-flex justify-content-center">
                <Button type="submit">
                    Criar
                </Button>
            </div>
        </Form>
    );
}

export default FormProcesso;

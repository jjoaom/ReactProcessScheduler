import React from 'react';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

function ProcessList({ cards, onDeleteCard }) {
  if (!cards || cards.length === 0) {
    return <div className="alert alert-warning text-center">Nenhum processo disponível.</div>;
  }

  return (
    <div className="w-100">
      {cards.map((card, index) => (
        <Card key={card.id || index} className="text-center mb-3 w-100 position-relative">
          <Card.Body>
            <Card.Title>{`P${index + 1}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Chegada: {card.chegada}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Duração: {card.duracao}
            </Card.Subtitle>
            <CloseButton
              size="sm"
              className="position-absolute top-0 end-0 m-2"
              onClick={() => onDeleteCard(index)}
              aria-label={`Remover processo P${index + 1}`}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProcessList;

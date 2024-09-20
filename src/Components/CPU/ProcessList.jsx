import React from 'react';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

function ProcessList({ cards, onDeleteCard }) {
  return (
    <div className="w-100">
      {cards.map((card, index) => (
        <Card key={index} className="text-center mb-3 w-100 position-relative">
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Tempo de Chegada: {card.chegada}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Duração: {card.duracao}
            </Card.Subtitle>
            <CloseButton size="sm"
              className="position-absolute top-0 end-0 m-2"
              onClick={() => onDeleteCard(index)}/>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProcessList;

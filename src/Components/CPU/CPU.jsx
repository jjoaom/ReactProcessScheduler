import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NovoProcesso from './NovoProcesso';
import ProcessList from './ProcessList';
import StartProcess from './StartProcess';
import Simulation from './Simulation';
import TipoProcesso from './TipoProcesso';

function CPU() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Carrega processos do localStorage
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(savedCards);
  }, []);

  useEffect(() => {
    // Salva processos no localStorage sempre que mudar
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (index) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((_, i) => i !== index);
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={4} lg={2} className="d-flex flex-column align-items-start justify-content-start p-2">
          <div className="d-flex flex-wrap w-100 mb-3">
            <div className="w-100 w-md-auto mb-2 me-md-2">
              <TipoProcesso/>
            </div>
            <div className="w-100 d-flex justify-content-evenly">
              <NovoProcesso onAddCard={addCard} />
              <StartProcess />
            </div>
          </div>
          <ProcessList cards={cards} onDeleteCard={deleteCard} />
        </Col>
        <Col md={8} lg={10} className="bg-sim d-flex align-items-center justify-content-center h-100">
          <Simulation />
        </Col>
      </Row>
    </Container>
  );
}

export default CPU;

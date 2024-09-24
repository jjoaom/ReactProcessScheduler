import React, { useState, useEffect } from 'react';
import useLoadProcesses from './algorithms/LoadProcesses'; // Hook para carregar processos
import Sjf from './algorithms/Sjf'; // Algoritmo SJF
import { Container, Row, Col } from 'react-bootstrap';
import NovoProcesso from './NovoProcesso';
import ProcessList from './ProcessList';
import StartProcess from './StartProcess';
import Simulation from './Simulation';
import TipoProcesso from './TipoProcesso';

function CPU() {
  const [cards, setCards] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
  const [simulationResult, setSimulationResult] = useState(null);

  // Carregar processos salvos no localStorage ou via hook
  const loadedProcesses = useLoadProcesses();

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || loadedProcesses || [];
    setCards(savedCards);
  }, [loadedProcesses]);

  useEffect(() => {
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

  // Função para iniciar a simulação com o algoritmo selecionado
 const startProcess = () => {
    if (selectedAlgorithm === '') {
        alert('Por favor, selecione um algoritmo!');
        return;
    }

    let result = null;
    if (selectedAlgorithm === 'sjf') {
        result = Sjf(cards); // Certifique-se que `cards` está sendo passado corretamente
        console.log('Sjf function result:', result);
    }

    setSimulationResult(result);
    console.log(`Iniciando o processo com o algoritmo: ${selectedAlgorithm}`, result);
};

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={4} lg={2} className="d-flex flex-column align-items-start justify-content-start p-2">
          <div className="d-flex flex-wrap w-100 mb-3">
            <div className="w-100 w-md-auto mb-2 me-md-2">
              <TipoProcesso 
                selectedAlgorithm={selectedAlgorithm} 
                setSelectedAlgorithm={setSelectedAlgorithm} 
              />
            </div>
            <div className="w-100 d-flex justify-content-evenly">
              <NovoProcesso onAddCard={addCard} />
              <StartProcess onStartProcess={startProcess} />
            </div>
          </div>
          <ProcessList cards={cards} onDeleteCard={deleteCard} />
        </Col>
        <Col md={8} lg={10} className="bg-sim d-flex align-items-center justify-content-center h-100">
          <Simulation result={simulationResult} /> {/* Passando o resultado da simulação */}
        </Col>
      </Row>
    </Container>
  );
}

export default CPU;

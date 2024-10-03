import React, { useState, useEffect } from "react";
import useLoadProcesses from "./algorithms/Processes";
import Sjf from "./algorithms/Sjf";
import Fcfs from "./algorithms/Fcfs";
import RoundRobin from "./algorithms/Rr";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import NovoProcesso from "./NovoProcesso";
import ProcessList from "./ProcessList";
import StartProcess from "./StartProcess";
import Simulation from "./Simulation";
import TipoProcesso from "./TipoProcesso";
import Quantum from "./Quantum";

function CPU() {
  const { processos: loadedProcesses } = useLoadProcesses(); // Carrega processos do localStorage
  const [cards, setCards] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [simulationResult, setSimulationResult] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Carregar apenas se loadedProcesses não estiver vazio e cards estiver vazio
    if (cards.length === 0) {
      setCards(loadedProcesses); // Carregar os processos do localStorage se cards estiver vazio
    }
  }, [loadedProcesses, cards.length]);

  const addCard = (newCard) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  const startProcess = () => {
    if (!selectedAlgorithm || cards.length === 0) {
      setShowToast(true);
      return;
    }

    let result = null;
    const storedQuantum = localStorage.getItem('quantum') ? JSON.parse(localStorage.getItem('quantum')) : null;

    if (selectedAlgorithm === "sjf") {
      result = Sjf(cards);
    } else if (selectedAlgorithm === "fcfs") {
      result = Fcfs(cards);
    } else if (selectedAlgorithm === "rr" && storedQuantum) {
      result = RoundRobin(cards, storedQuantum);  // Passa o quantum para o algoritmo
    }

    setSimulationResult(result);
};

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col
          md={4}
          lg={2}
          className="d-flex overflow-auto flex-column justify-content-start p-2"
        >
          <div className="d-flex flex-wrap w-100 mb-5">
            <div className="w-100 w-md-auto mb-2 me-md-2">
              <TipoProcesso
                selectedAlgorithm={selectedAlgorithm}
                setSelectedAlgorithm={setSelectedAlgorithm}
              />
              {/* Renderiza o Quantum apenas se o algoritmo selecionado for "rr" */}
              {selectedAlgorithm === "rr" && (
                <div className="my-3">
                  <Quantum />
                </div>
              )}
            </div>

            <div className="w-100 d-flex justify-content-evenly">
              <NovoProcesso
                onAddCard={addCard}
                selectedAlgorithm={selectedAlgorithm}
              />
              <StartProcess onStartProcess={startProcess} />
            </div>
          </div>

          <div
            className="overflow-auto"
            style={{ maxHeight: "50vh", width: "100%" }}
          >
            <ProcessList cards={cards} onDeleteCard={deleteCard} />
          </div>
        </Col>
        <Col
          md={8}
          lg={10}
          className="bg-sim d-flex align-items-center justify-content-center h-100"
        >
          <Simulation result={simulationResult} />
        </Col>
      </Row>

      {/* Toast Container */}
      <ToastContainer position="top-center" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Body className="fw-bold">
            Por favor, adicione processos e selecione um algoritmo!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default CPU;

import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import TipoProcesso from "./TipoProcesso";
import Algoritmos from "./Algoritmos"; // Importa o componente Algoritmos

function Tabela() {
  const [campos, setCampos] = useState(Array(16).fill(""));
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [quadros, setQuadros] = useState("");
  const inputRefs = useRef([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const adicionarCampo = () => {
    setCampos([...campos, ""]);
  };

  const handleInputChange = (index, valor) => {
    const novosCampos = [...campos];
    novosCampos[index] = valor;
    setCampos(novosCampos);

    if (valor.length === 2 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      campos[index] === "" &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const iniciarSimulacao = () => {
    setMostrarResultados(true);
  };

  return (
    <>
      <Row className="d-flex justify-content-center m-0">
        <Row className="justify-content-center m-3 p-3">
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <TipoProcesso
              selectedAlgorithm={selectedAlgorithm}
              setSelectedAlgorithm={setSelectedAlgorithm}
            />
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <Form.Group>
              <Form.Control
                type="text"
                maxLength="3"
                placeholder="Quadros"
                className="form-control"
                value={quadros}
                onChange={(e) =>
                  setQuadros(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))
                }
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <Form.Group>
              <Button className="btn color-g" onClick={iniciarSimulacao}>
                Iniciar Simulação
              </Button>
            </Form.Group>
          </Col>
        </Row>
        <Col xs={12} className="d-flex flex-wrap justify-content-center align-items-start m-0">
          <Button className="btn color-g m-1" onClick={adicionarCampo}>
            +
          </Button>
        </Col>
        <Col xs={12} className="d-flex flex-wrap justify-content-center align-items-start m-0">
          {campos.map((valor, index) => (
            <Form.Group key={index} className="m-1">
              <Form.Control
                id={index}
                type="text"
                maxLength="2"
                style={{ width: "5ch" }}
                value={valor}
                onChange={(e) =>
                  handleInputChange(
                    index,
                    e.target.value.replace(/[^0-9]/g, "").slice(0, 2)
                  )
                }
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            </Form.Group>
          ))}
        </Col>
        <Row className="justify-content-center align-items-start text-white text-center">
          {/* Exibição dos resultados da simulação */}
          {mostrarResultados && (
            <Container xs={12} className="mt-3">
              <Algoritmos
                algoritmo={selectedAlgorithm}
                quadros={parseInt(quadros, 10)}
                arrayDeNumeros={campos.filter((num) => num !== "").map(Number)}
              />
            </Container>
          )}
        </Row>
      </Row>
    </>
  );
}

export default Tabela;

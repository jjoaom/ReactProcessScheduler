import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import TipoProcesso from "./TipoAlgorithm";

function Tabela() {
  const [campos, setCampos] = useState(Array(16).fill(""));
  const inputRefs = useRef([]);

  const adicionarCampo = () => {
    setCampos([...campos, ""]);
  };

  const handleInputChange = (index, valor) => {
    const novosCampos = [...campos];
    novosCampos[index] = valor;
    setCampos(novosCampos);

    // Mover foco para o próximo campo se dois dígitos forem digitados
    if (valor.length === 2 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Mover foco para o campo anterior se Backspace for pressionado e o campo estiver vazio
    if (
      event.key === "Backspace" &&
      campos[index] === "" &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Row className="d-flex justify-content-center m-0">
      <Row className="justify-content-center m-3 p-3">
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <TipoProcesso />
        </Col>
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <Form.Group>
            <Form.Control
              type="text"
              maxLength="3"
              placeholder="Quadros"
              className="form-control"
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={3} className="d-flex justify-content-center">
          <Button className="btn color-g" type="submit">
            Iniciar Simulação
          </Button>
        </Col>
      </Row>
      
      <Col xs={12} className="d-flex flex-wrap justify-content-center align-items-start m-0">
        <Button className="btn color-g m-1" onClick={adicionarCampo}>
          +
        </Button>
      </Col>

      <Col
        xs={12}
        className="d-flex flex-wrap justify-content-center align-items-start m-0"
      >
        {campos.map((valor, index) => (
          <Form.Group key={index} className="m-1">
            <Form.Control
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
              ref={(el) => (inputRefs.current[index] = el)} // Ref para cada campo de entrada
            />
          </Form.Group>
        ))}
      </Col>
    </Row>
  );
}

export default Tabela;

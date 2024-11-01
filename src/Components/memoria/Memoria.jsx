import React, { useState, useEffect } from "react";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import Tabela from "./Tabela";

function Memoria() {
  const [showToast, setShowToast] = useState(false);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  return (
    <Container fluid className="h-100 bg-sim justify-content-evenly">
      <Tabela />
    </Container>
  );
}

export default Memoria;

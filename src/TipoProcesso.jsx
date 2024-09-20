import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function TipoProcesso() {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Select >
            <option>SJF Preemptivo</option>
            <option>Round Robin</option>
        </Form.Select>
      </Form.Group>
     
    </>
  );
}

export default TipoProcesso;
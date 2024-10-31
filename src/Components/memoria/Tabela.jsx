import React from 'react';
import { Table } from 'react-bootstrap';

const Tabela = ({ colunas, dados }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {colunas.map((coluna, index) => (
            <th key={index}>{coluna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, index) => (
          <tr key={index}>
            {colunas.map((coluna, colIndex) => (
              <td key={colIndex}>{linha[coluna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tabela;

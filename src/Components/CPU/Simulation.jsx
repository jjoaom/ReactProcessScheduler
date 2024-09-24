import React from 'react';

function Simulation({ result }) {
  if (!result) {
    return <div className="alert alert-warning text-center">Nenhum resultado disponível.</div>;
  }

  return (
    <div className="card">
      <div className="card-header text-center">
        Resultados da Simulação
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Processo</th>
              <th>Duração</th>
              <th>Tempo de Espera</th>
            </tr>
          </thead>
          <tbody>
            {result.processosOrdenados.map((processo, index) => (
              <tr key={index}>
                <td>{processo.nome || `Processo ${index + 1}`}</td>
                <td>{processo.duracao} unidades de tempo</td>
                <td>{processo.tempoDeEspera} unidades de tempo</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Tempo Médio de Espera: {result.tempoMedioDeEspera.toFixed(2)} unidades de tempo</p>
      </div>
    </div>
  );
}

export default Simulation;

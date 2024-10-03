const Simulation = ({ result, selectedAlgorithm, quantum }) => {
  // Verifica se result foi passado corretamente
  if (!result || !result.processosOrdenados) {
    return <p className="rounded p-3 mb-2 bg-white text-dark">Nenhum processo disponível para exibir.</p>;
  }

  const { processosOrdenados, tempoMedioDeEspera } = result;

  return (
    <div className="container-responsive">
      {processosOrdenados.length > 0 ? (
        <table className="table table-hover table-striped table-bordered text-center m-1">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Chegada</th>
              <th scope="col">Duração Original</th>
              <th scope="col">Tempo de Espera</th>
              {selectedAlgorithm === "rr" && <th scope="col">Quantum</th>}
            </tr>
          </thead>
          <tbody>
            {processosOrdenados.map((processo, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>P{index + 1}</td>
                <td>{processo.chegada}</td>
                <td>{processo.duracaoOriginal}</td>
                <td>{processo.tempoDeEspera || 0}</td>
                {selectedAlgorithm === "rr" && <td>{quantum}</td>}
              </tr>
            ))}
            <tr>
              <td colSpan={selectedAlgorithm === "rr" ? "5" : "4"} className="text-right">
                <strong>Tempo Médio de Espera:</strong>
              </td>
              <td className="table-active">
                {isNaN(tempoMedioDeEspera) ? "N/A" : tempoMedioDeEspera.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="p-3 mb-2 bg-white text-dark">Nenhum processo disponível para exibir.</p>
      )}
    </div>
  );
};

export default Simulation;

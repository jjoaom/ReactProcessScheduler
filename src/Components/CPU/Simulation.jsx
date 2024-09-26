const Simulation = ({ result }) => {
    // Verifica se result foi passado corretamente
    if (!result || !result.processosOrdenados) {
      return <p>Nenhum processo disponível para exibir.</p>;
    }
  
    const { processosOrdenados, tempoMedioDeEspera } = result;
  
    return (
        <div className="container mt-4">
      <h3 className="text-center mb-4">Simulação de Processos Ordenados (SJF)</h3>
      <div className="table-responsive">
        {processosOrdenados.length > 0 ? (
          <table className="table table-hover table-striped table-bordered table-sm text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Chegada</th>
                <th scope="col">Duração Original</th>
                <th scope="col">Tempo de Espera</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum processo disponível para exibir.</p>
        )}
      </div>
      <div className="mt-3">
        <p className="text-center">
          <strong>Tempo Médio de Espera:</strong>{' '}
          {isNaN(tempoMedioDeEspera) ? 'N/A' : tempoMedioDeEspera.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Simulation;

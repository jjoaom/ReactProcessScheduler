import Form from 'react-bootstrap/Form';

function TipoProcesso({ selectedAlgorithm, setSelectedAlgorithm }) {
  return (
    <Form.Group className="mb-3">
      <Form.Select 
        className='custom-select' 
        value={selectedAlgorithm} 
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
      >
        <option value="">Escolha um algoritmo</option>
        <option value='sjf'>SJF Preemptivo</option>
      </Form.Select>
    </Form.Group>
  );
}

export default TipoProcesso;

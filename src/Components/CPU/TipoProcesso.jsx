import Form from 'react-bootstrap/Form';

function TipoProcesso() {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Select className='custom-select' >
            <option >Escolha um algorítimo</option>
            <option value='sjf'>SJF Preemptivo</option>
            <option value='rr'>Round Robin</option>
        </Form.Select>
      </Form.Group>
    </>
  );
}

export default TipoProcesso;
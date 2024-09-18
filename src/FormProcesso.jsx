import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormProcesso() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          type="text"
          placeholder="Insira o nome do processo"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Control type="number" placeholder="Tempo de chegada" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Control type="number" placeholder="Tempo de duração" />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Criar
        </Button>
      </div>
    </Form>
  );
}

export default FormProcesso;

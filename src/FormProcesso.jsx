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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="number" placeholder="Tempo de chegada" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="number" placeholder="Tempo de duração" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
  );
}

export default FormProcesso;

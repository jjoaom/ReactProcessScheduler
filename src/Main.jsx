import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NovoProcesso from './NovoProcesso';

function Main() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col sm={2} className="h-100 d-flex justify-content-center align-items-start">
          <NovoProcesso/>
        </Col>
        <Col sm={10} className="bg-dark h-100">
          {/* Conteúdo ou espaço vazio */}
        </Col>
      </Row>
    </Container>
  );
}

export default Main;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NovoProcesso from './NovoProcesso';

function Main() {
  return (
    <Container>
      <Row>
        <Col sm={8}><NovoProcesso/></Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

export default Main;
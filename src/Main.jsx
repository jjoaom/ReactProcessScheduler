import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NovoProcesso from './NovoProcesso';
import ProcessList from './ProcessList';
import StartProcess from './StartProcess';
import Simulation from './Simulation';

function Main() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col sm={2} className="d-flex flex-column align-items-start justify-content-start p-2">
          <div className="d-flex justify-content-between w-100 mb-3">
            <NovoProcesso />
            <StartProcess />
          </div>
          <ProcessList />
        </Col>
        <Col sm={10} className="bg-dark d-flex align-items-center justify-content-center h-100">
          <Simulation />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;

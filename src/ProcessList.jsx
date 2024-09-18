import Card from 'react-bootstrap/Card';

function ProcessList() {
  return (
    <Card className="text-center h-100" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Nome do processo</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Tempo de chegada</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Tempo de duração</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default ProcessList;
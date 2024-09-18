import Card from 'react-bootstrap/Card';

function CardProcesso() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>titulo</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardProcesso;
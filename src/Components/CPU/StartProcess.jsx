import Button from 'react-bootstrap/Button';

function StartProcess({ onStartProcess }) {
  return (
    <Button className="btn color-g" onClick={onStartProcess}>
      Iniciar
    </Button>
  );
}

export default StartProcess;
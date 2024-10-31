import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Seletor() {
  const navigate = useNavigate();

  const handleNavigation = (path, disabled) => {
    if (!disabled) {
      navigate(path);
    }
  };

  return (
    <ButtonGroup aria-label="Seletor de Simulador">
      {/* Botão ativo*/}
      <Button
        className="btn color-p"
        onClick={() => handleNavigation('/cpu', false)}
      >
        CPU
      </Button>

      <Button
        className="btn color-p"
        onClick={() => handleNavigation('/memoria', false)}
        
      >
        Memória
      </Button>
      <Button
        className="btn color-p"
        onClick={() => handleNavigation('/parte3', false)}
      >
        Parte 3
      </Button>
    </ButtonGroup>
  );
}

export default Seletor;

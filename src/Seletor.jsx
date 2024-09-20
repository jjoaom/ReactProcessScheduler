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
      {/* Botão ativo que permite a navegação */}
      <Button
        className="btn color-p"
        onClick={() => handleNavigation('/cpu', false)}
      >
        CPU
      </Button>

      {/* Botões desativados que impedem a navegação */}
      <Button
        className="btn color-p"
        onClick={() => handleNavigation('/parte2', true)}
        disabled
      >
        Parte 2
      </Button>
      <Button
        className="btn color-p"
        onClick={() => handleNavigation('/parte3', true)}
        disabled
      >
        Parte 3
      </Button>
    </ButtonGroup>
  );
}

export default Seletor;

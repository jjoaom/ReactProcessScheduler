import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormProcesso from './FormProcesso';

function NovoProcesso({ onAddCard }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Novo processo
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Criar novo processo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProcesso onAddCard={onAddCard} />
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NovoProcesso;

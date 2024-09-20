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
      <Button className="btn color-p"  onClick={handleShow}>
        Novo processo
      </Button>

      <Modal size="sm" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Criar novo processo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProcesso onAddCard={onAddCard} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NovoProcesso;

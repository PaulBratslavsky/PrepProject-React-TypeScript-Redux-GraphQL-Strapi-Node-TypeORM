import { Modal } from "react-bootstrap";

export default function ModalContainer({children, heading, isOpen, handleClose}) {
  return (
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
  );
}


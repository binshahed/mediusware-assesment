import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalC = ({ showModalC, handleCloseC, selectedData }) => {
  console.log(selectedData);
  return (
    <Modal show={showModalC} onHide={handleCloseC}>
      <Modal.Header closeButton>
        <Modal.Title>ModalC</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{selectedData?.country?.name}</h2>
        <p>{selectedData?.phone}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseC}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalC;

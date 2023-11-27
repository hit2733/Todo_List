import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalBox({ modalHandler, modalshowHandler }) {
  return (
    <>
      <Modal show={modalshowHandler} onHide={modalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Confrim?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are sure you want to delete the item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={modalHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;

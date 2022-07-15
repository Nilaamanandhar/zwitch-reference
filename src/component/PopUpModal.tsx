import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { CrossIcon } from "../assets/game_blocks/blocks";
type ModalProps = {
  show: boolean;
  close: Function;
};
const PopUpModal = (props: ModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal show={props.show} onHide={() => props.close()} centered>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            backgroundColor: "black",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
          // id="contained-modal-title-vcenter"
        >
          <div> Stoppen?</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "pink",
        }}
      >
        <Button
          onClick={() => {
            console.log("cancel and close popout");
            props.close();
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            console.log("Logout");
          }}
        >
          OK
        </Button>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={() => props.close()}>Close</Button>
      </Modal.Footer> */}

      {/* <div className="modal-section">
        <div onClick={() => props.close()}>x</div>
        <div className="modal-wrapper">Stopppen ? </div>
        <div className="modal-button-wrapper">
          <div onClick={() => navigate(-1)}>back</div>
          <div>ok</div>
        </div>
      </div> */}
    </Modal>
  );
};
export default PopUpModal;

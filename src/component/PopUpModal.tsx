import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { CrossIcon } from "../assets/game_blocks/blocks";
type ModalProps = {
  show: boolean;
  close: Function;
};
const PopUpModal = (props: ModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal show={props.show} onHide={() => props.close()} centered>
      <div className="modal-section">
        <div onClick={() => props.close()}>x</div>
        <div className="modal-wrapper">Stopppen ? </div>
        <div className="modal-button-wrapper">
          <div onClick={() => navigate(-1)}>back</div>
          <div>ok</div>
        </div>
      </div>
    </Modal>
  );
};
export default PopUpModal;

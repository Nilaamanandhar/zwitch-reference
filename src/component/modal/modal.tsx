import React from "react";
import { Modal } from "react-bootstrap";

type sizeType = "lg" | "sm" | "xl";

type ModalProps = {
  show: boolean;
  close: Function;
  centered: boolean;
  title: String;
  children: React.ReactNode;
  dialogClassName: string;
  size: sizeType;
};

const PopUpModal = (props: ModalProps) => {
  return (
    <Modal
      size={props.size}
      show={props.show}
      onHide={() => props.close()}
      centered={props.centered}
      dialogClassName={props.dialogClassName ? props.dialogClassName : ""}
    >
      <Modal.Header>
        <div className="cross-button" onClick={() => props.close()}>
          X
        </div>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-style">{props.children}</Modal.Body>
    </Modal>
  );
};
export default PopUpModal;

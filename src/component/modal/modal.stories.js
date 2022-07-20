import React, { useState } from "react";
import Modal from "./modal";
import "bootstrap/dist/css/bootstrap.css";
import "./modal.css";
export default {
  title: "Form/Control/Modal",
  component: Modal,
};
const Template = (args) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        {...args}
        show={show}
        close={() => {
          setShow(false);
        }}
      >
        <div>this body content</div>
      </Modal>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        show centered modal
      </button>
    </>
  );
};

export const LargeModals = (args) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        {...args}
        show={show}
        dialogClassName="modal-90w"
        close={() => {
          setShow(false);
        }}
      >
        <p className="modal-body">{args.bodyContain}</p>
      </Modal>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        show centered modal
      </button>
    </>
  );
};

export const _Modal = Template.bind({});
_Modal.args = {
  title: "Modal title",
  centered: true,
  size: "sm",
};

export const _LargeModals = LargeModals.bind({});
_LargeModals.args = {
  title: "Modal title",
  centered: true,
  bodyContain: `Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!


   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!

   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!

  v
 Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!


   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!

   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!

  v
 Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!
   Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
  ipsam atque a dolores quisquam quisquam adipisci possimus
  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
  deleniti rem!`,
};

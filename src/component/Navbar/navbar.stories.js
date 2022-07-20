import React, { useState } from "react";
import Navbar from "./navbar";
// import "bootstrap/dist/css/bootstrap.css";
import "./modal.css";
export default {
  title: "Form/Control/Navbar",
  component: Navbar,
  argTypes: {},
};
const Template = (args) => {
  //   const [show, setShow] = useState(false);
  return (
    <>
      <Navbar {...args}>{args.leftContent}</Navbar>
    </>
  );
};

export const _Navbar = Template.bind({});
_Navbar.args = {
  leftContent: "left",
};

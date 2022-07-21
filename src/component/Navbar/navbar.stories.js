import React, { useState } from "react";
import { Navbar } from "./navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.modules.scss";
export default {
  title: "Form/Control/Navbar",
  component: Navbar,
  argTypes: {},
};
export const Template = (args) => {
  //   const [show, setShow] = useState(false);
  return (
    <>
      <Navbar {...args} />
    </>
  );
};

export const _Navbar = Template.bind({});
_Navbar.args = {
  leftContent: "left",
};

import React, { useState } from "react";
import TopNavbar from "./navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.modules.scss";
export default {
  title: "Form/Control/Navbar",
  component: TopNavbar,
  argTypes: {},
  showPopOut: Function,
};
export const Template = (args) => {
  //   const [show, setShow] = useState(false);
  return (
    <>
      <TopNavbar
        {...args}
        showPopOut={() => {
          alert("show blur");
        }}
      />
    </>
  );
};

export const _Navbar = Template.bind({});
_Navbar.args = {
  leftContent: "left",
  user: "chris Grafi",

  // user: user1,
};

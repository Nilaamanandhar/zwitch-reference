import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.modules.scss";

import TopNavbar from "./navbar";

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

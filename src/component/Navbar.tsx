import React, { useState } from "react";
import { FaArrowsAlt, FaAngleDoubleRight } from "react-icons/fa";
type showModal = {
  showPopupModal: Function;
};
export default function Navbar(props: showModal) {
  return (
    <nav className="navbar-section navbar">
      <div className="navbar-wrapper">
        <div className="logo">Jaargroep 3</div>

        <div className="game-name">Semsom</div>
        <div className="name-setting">
          <div className="userName-class">Chris Grafi</div>
          <FaArrowsAlt />
          <FaAngleDoubleRight
            onClick={() => {
              props.showPopupModal();
            }}
          />
        </div>
      </div>
    </nav>
  );
}
// if we want to pass onclick(event)=>{} as props then handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
// props.handleClick(event,1)

// void donot return anything

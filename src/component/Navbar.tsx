import React, { useState } from "react";
import { FaArrowsAlt, FaAngleDoubleRight } from "react-icons/fa";
import PopUpModal from "./PopUpModal";
type IOpenState = boolean;
export default function Navbar() {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);

  return (
    <nav className="navbar-section navbar">
      {openPopup && (
        <PopUpModal show={openPopup} close={() => setOpenPopup(false)} />
      )}

      <div className="container-fluid title-style">
        <div className="logo">Jaargroep 3</div>

        <div className="game-name">Semsom</div>
        <div className="name-setting">
          <div className="user-name-class">Chris Grafi</div>
          <FaArrowsAlt />
          <FaAngleDoubleRight
            onClick={() => {
              setOpenPopup(true);
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

import React from "react";
import { Arrow } from "../../assets/svg/Logo/Icons";
type ArrowButtonType = {
  onClick: Function;
};
export default function ArrowButton(props: ArrowButtonType) {
  return (
    <div className="start-game-icon">
      <div
        onClick={() => {
          props.onClick();
        }}
        className="arrow-icon"
      >
        <Arrow />
      </div>
    </div>
  );
}

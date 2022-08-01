import React from "react";
import ButtonBox from "../Button/Button";
import { CrossIcon, OkIcon } from "../../assets/svg/Logo/Icons";

type SubLevelOneType = {
  addItem: Function;
  clearHandle: Function;
  handleChange: Function;
};
export default function BottomContainer(props: SubLevelOneType) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="bottom-container">
        <div className="pagination-button">
          {array.map((item, index) => {
            return (
              <ButtonBox
                onClick={() => {
                  props.addItem(item);
                }}
                customClass="default-boxStyle"
                key={index}
              >
                {item}
              </ButtonBox>
            );
          })}
          <ButtonBox
            customClass="default-boxStyle"
            onClick={() => {
              props.clearHandle();
            }}
            key={0}
          >
            <CrossIcon />
          </ButtonBox>
        </div>
        <div>
          <ButtonBox
            customClass="ok-ButtonStyle"
            onClick={() => {
              props.handleChange();
            }}
            key={0}
          >
            <OkIcon />
          </ButtonBox>
        </div>
      </div>
    </div>
  );
}

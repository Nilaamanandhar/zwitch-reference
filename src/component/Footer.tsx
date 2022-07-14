// import { Button } from "@mui/material";
import React from "react";
import NumberBox from "./NumberBox";

type footerType = {
  numberSelection: Function;
};
export default function Footer(props: footerType) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="footer-wrapper">
      <div className="numberbox-wrapper">
        {array.map((item, index) => {
          return (
            <div
              key={index}
              className="boxcontainer"
              onClick={() => {
                // console.log("click", item);
                props.numberSelection(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* <Button variant="contained" color="secondary" size="small" >
        contained
      </Button> */}
    </div>
  );
}

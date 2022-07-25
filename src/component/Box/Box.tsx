// import { Button } from "@mui/material";
import React from "react";
// import NumberBox from "../component/Box/Box";

type boxType = {
  items: number;
  sizestyle: string;
  onClick: Function;
};
export default function Box(props: boxType) {
  return <div className="numberbox-wrapper">{props.items}</div>;
}

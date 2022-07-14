import React from "react";
type NumberBoxProps = {
  items: number;
};
export default function NumberBox(props: NumberBoxProps) {
  return <div className="boxcontainer">{props.items}</div>;
}

import React from "react";
import "./Box.css";
type NumberBoxProps = {
  items: number;
  onClick: Function;
  variant: String;
};
export default function NumberBox(props: NumberBoxProps) {
  const { variant = "primary", onClick, items, ...rest } = props;
  return (
    <div
      className={`boxcontainer ${variant} `}
      onClick={() => {
        props.onClick(items);
      }}
    >
      {/* prime */}
      {props.items}
    </div>
  );
}

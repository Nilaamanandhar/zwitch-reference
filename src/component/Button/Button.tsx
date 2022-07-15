import React from "react";
import "./Button.css";
type buttonProps = {
  variant: string;
  children: React.ReactNode;
  onClick: Function;
};
export default function Button(props: buttonProps) {
  const { variant = "primary", children, onClick, ...rest } = props;
  console.log("console", props);
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      className={`button ${variant} `}
      {...rest}
    >
      {children}
    </button>
  );
}

import React, { useState } from "react";
type textProps = {
  value: string;
  onChange: Function;
};
export default function TextInput(props: textProps) {
  return (
    <div className="textinput-wrapper">
      <input
        // autofocus
        // ref={inputReference}

        value={props.value}
        onChange={(e) => props.onChange(e)}
        // value={clickNumber}
        // onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

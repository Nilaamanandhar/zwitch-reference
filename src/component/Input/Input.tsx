import React, { useState, useRef } from "react";
type textProps = {
  value: string;
  onChange: Function;
};
export default function TextInput(props: textProps) {
  return (
    <div>
      <input
        className="textInputStyle"
        type="number"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

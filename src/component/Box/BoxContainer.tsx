import React from "react";
import TextInput from "../../component/TextInput/TextInput";
type SubLevelOneType = {
  NumberOne: Number;
  NumberTwo: Number;
  value: any;
  onKeyPress?: any;
  onChange: Function;
  className?: string;
};
export default function BoxContainer(props: SubLevelOneType) {
  return (
    <div className={`box-container ${props.className && `${props.className}`}`}>
      <div className="fs-3">{`${props.NumberOne} + ${props.NumberTwo} = `}</div>
      <TextInput
        {...props}
        // value={props.value}
        // onChange={(e: any) => {
        //   console.log("hello");
        // }}
        customClass="default-textbox"
      />
    </div>
  );
}

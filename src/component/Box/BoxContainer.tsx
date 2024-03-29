import React from "react";
import TextInput from "../../component/TextInput/TextInput";
import { AudioVoiceIcon } from "../../assets/svg/Logo/Icons";
type SubLevelOneType = {
  NumberOne?: Number;
  NumberTwo?: Number;
  value: any;
  onKeyPress?: any;
  onChange: Function;
  className?: string;
  error?: boolean;
};
export default function BoxContainer(props: SubLevelOneType) {
  console.log("error", props.error);
  return (
    <div className={`box-container ${props.className && `${props.className}`}`}>
      {props.NumberOne && props.NumberTwo ? (
        <div className="fs-3">
          {`${props.NumberOne} + ${props.NumberTwo} = `}{" "}
        </div>
      ) : (
        <div className="audio-box">
          <AudioVoiceIcon />
        </div>
      )}

      <TextInput
        {...props}
        // value={props.value}
        // onChange={(e: any) => {
        //   console.log("hello");
        // }}
        customClass={`${props.error ? "error-InputClass" : "default-textbox"}`}
      />
    </div>
  );
}

import React, { useState } from "react";
import TextInput from "./TextInput";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.modules.scss";
export default {
  title: "Form/Control/TextInput",
  component: TextInput,
  argTypes: {},
  onChange: Function,
};
export const Template = (args) => {
  return (
    <>
      <TextInput
        onChange={() => {
          alert("number has been entered");
        }}
        {...args}
      />
    </>
  );
};
export const ErrorInput = (args) => {
  return (
    <TextInput
      onChange={() => {
        alert(" error number has been entered");
      }}
      {...args}
    />
  );
};

export const _defaultTextInput = Template.bind({});
_defaultTextInput.args = {
  customClass: "default-textbox",
};
export const _errorTextInput = ErrorInput.bind({});
_errorTextInput.args = {
  customClass: "error-InputClass",
};

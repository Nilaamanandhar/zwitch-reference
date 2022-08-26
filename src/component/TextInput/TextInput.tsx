import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React from "react";
type textProps = {
  customClass: string;
  value: string;
  onChange: Function;
  onKeyPress?: any;
};
export default function TextInput(props: textProps) {
  return (
    <Form>
      <Form.Control
        type="number"
        className={props.customClass}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        onKeyPress={(e) => props.onKeyPress(e)}
      />
    </Form>
  );
}

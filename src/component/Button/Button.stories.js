import React from "react";
import Button from "./Button";
export default {
  title: "Form/Control/Button",
  component: Button,
};
export const Primary = () => {
  return <Button variant="primary">Primary</Button>;
};
export const Secondary = () => {
  return <Button variant="secondary">Secondary</Button>;
};
export const Success = () => {
  return <Button variant="success">Success</Button>;
};
export const Danger = () => {
  return <Button variant="danger">Danger</Button>;
};

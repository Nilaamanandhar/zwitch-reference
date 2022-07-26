import Button from "react-bootstrap/Button";

type boxType = {
  children: React.ReactNode;
  // sizestyle: string;
  onClick: Function;
  defaultStyle: string;
};
export default function ButtonBox(props: boxType) {
  return (
    <Button
      className={props.defaultStyle}
      type="button"
      onClick={() => props.onClick()}
    >
      {props.children}
    </Button>
  );
}

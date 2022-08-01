import Button from "react-bootstrap/Button";

type boxType = {
  children: React.ReactNode;
  // sizestyle: string;
  onClick: Function;
  customClass: string;
  key: number;
};
export default function ButtonBox(props: boxType) {
  return (
    <Button
      className={props.customClass}
      type="button"
      onClick={() => props.onClick()}
      key={props.key}
    >
      {props.children}
    </Button>
  );
}

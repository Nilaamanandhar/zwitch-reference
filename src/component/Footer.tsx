// import { Button } from "@mui/material";
// import React from "react";
// import NumberBox from "../component/Box/Box";

// type footerType = {
//   numberSelection: Function;
//   clearAnswer: Function;
// };
// export default function Footer(props: footerType) {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return (
//     <div className="footer-wrapper">
//       <div className="numberbox-wrapper">
//         {array.map((item, index) => {
//           return (
//             <NumberBox
//               onClick={() => {
//                 props.numberSelection(item);
//               }}
//               items={item}
//             />
//             // <div
//             //   key={index}
//             //   className="boxcontainer"
//             //   onClick={() => {

//             //     props.numberSelection(item);
//             //   }}
//             // >
//             //   {item}
//             // </div>
//           );
//         })}
//         <div
//           className="boxcontainer"
//           onClick={() => {
//             props.clearAnswer();
//           }}
//         >
//           X
//         </div>

//         <div className="boxcontainer">Ok</div>
//       </div>
//       {/* <Button variant="contained" color="secondary" size="small" >
//         contained
//       </Button> */}
//     </div>
//   );
// }

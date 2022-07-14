import React, { useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TextInput from "../component/TextInput";

// import "./App.css";

export default function GameOne() {
  const handle = useFullScreenHandle();
  const [textValue, setTextValue] = useState<string>("");
  return (
    <FullScreen handle={handle}>
      <Navbar />

      <div onClick={handle.active ? handle.exit : handle.enter}>
        <FaArrowsAltH />
      </div>

      <TextInput
        value={textValue}
        onChange={(e: any) => {
          setTextValue(e.target.value);
        }}
      />

      <Footer
        numberSelection={(item: number) => setTextValue(`${textValue}${item}`)}
      />
    </FullScreen>
  );
}

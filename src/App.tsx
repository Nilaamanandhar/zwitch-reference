import React from "react";
import "./style.modules.scss";
import MainDash from "./pages/MainDash";
import { Routes, Route, Link } from "react-router-dom";
import GameOne from "./pages/GameOne";
import { MainPage } from "./pages/LandingPage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  let handle = useFullScreenHandle();

  const handleFullScreen = () => {
    console.log("full screen clicked");
    handle.enter();
    // handle.active ? handle.exit : handle.enter;
  };
  return (
    <div className="App">
      <FullScreen handle={handle}>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route path="/dashboard" element={<MainDash />} />
          <Route
            path="/game1"
            element={
              <GameOne
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
        </Routes>
      </FullScreen>
    </div>
  );
}

export default App;

import React from "react";
import "./style.modules.scss";
import MainDash from "./pages/MainDash";
import { Routes, Route, Link } from "react-router-dom";
import SubLevelOne from "./pages/LevelOne/SubLevelOne";
import { MainPage } from "./pages/LandingPage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FailGame from "./pages/FailGame";

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
              <SubLevelOne
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route path="/failgame" element={<FailGame />} />
        </Routes>
      </FullScreen>
    </div>
  );
}

export default App;

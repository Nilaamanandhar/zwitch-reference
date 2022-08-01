import React from "react";
import "./style.modules.scss";
import MainDash from "./pages/MainDash";
import { Routes, Route, Link } from "react-router-dom";
import {
  SubLevelOne,
  SubLevelTwo,
  SubLevelThree,
  SubLevelFour,
  SubLevelFive,
  SubLevelSix,
  SubLevelSeven,
  SubLevelEight,
  SubLevelNine,
  SubLevelTen,
  SubLevelEleven,
  SubLevelTwelve,
} from "./pages/LevelOne/index";
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
            path="/game1/level1"
            element={
              <SubLevelOne
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/game1/level2"
            element={
              <SubLevelTwo
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/game1/level3"
            element={
              <SubLevelThree
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route path="/game1/level4" element={<SubLevelFour />} />
          <Route path="/game1/level5" element={<SubLevelFive />} />
          <Route path="/game1/level6" element={<SubLevelSix />} />
          <Route path="/game1/level7" element={<SubLevelSeven />} />
          <Route path="/game1/level8" element={<SubLevelEight />} />
          <Route path="/game1/level9" element={<SubLevelNine />} />
          <Route path="/game1/level10" element={<SubLevelTen />} />
          <Route path="/game1/level11" element={<SubLevelEleven />} />
          <Route path="/game1/level2" element={<SubLevelTwelve />} />
          <Route path="/failgame" element={<FailGame />} />
        </Routes>
      </FullScreen>
    </div>
  );
}

export default App;

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
import WinGamePage from "./pages/WinGamePage";

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
          <Route
            path="/game1/level4"
            element={
              <SubLevelFour
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/game1/level5"
            element={
              <SubLevelFive
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/game1/level6"
            element={
              <SubLevelSix
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/game1/level7"
            element={
              <SubLevelSeven
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/game1/level8"
            element={
              <SubLevelEight
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route path="/game1/level9" element={<SubLevelNine />} />
          <Route
            path="/game1/level10"
            element={
              <SubLevelTen
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route path="/game1/level11" element={<SubLevelEleven />} />
          <Route path="/game1/level2" element={<SubLevelTwelve />} />
          <Route path="/failgame" element={<FailGame />} />
          <Route path="/wingame" element={<WinGamePage handleFullScreen={() => {
                  handleFullScreen();
                }}/>} />
        </Routes>
      </FullScreen>
    </div>
  );
}

export default App;

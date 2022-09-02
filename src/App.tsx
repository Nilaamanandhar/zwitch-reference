import React, { useEffect } from "react";
import "./style.modules.scss";
import LevelOne from "./pages/LevelOne";
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
  SubLevel1test,
} from "./pages/ThresholdOne/index";
import LevelTwoSubOne from "./pages/ThresholdTwo/SubLevelOne";
import { MainPage } from "./pages/LandingPage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FailGame from "./pages/FailGame";
import WinGamePage from "./pages/WinGamePage";
import LevelDash from "./pages/LevelDashbord";
import LevelTwo from "./pages/LevelTwo";

function App() {
  let handle = useFullScreenHandle();

  useEffect(() => {
    localStorage.setItem("fullscreenviewer", "true");
    localStorage.setItem("voiceSettingModal", "true");
  }, []);

  const handleFullScreen = () => {
    console.log("full screen clicked");
    handle.active ? handle.exit() : handle.enter();
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
          <Route
            path="/level1"
            element={
              <LevelOne
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
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
            path="/level"
            element={
              <LevelDash
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/test"
            element={
              <SubLevel1test
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
          <Route
            path="/game1/level11"
            element={
              <SubLevelEleven
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route path="/game1/level2" element={<SubLevelTwelve />} />
          <Route
            path="/failgame"
            element={
              <FailGame
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/wingame"
            element={
              <WinGamePage
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/level2"
            element={
              <LevelTwo
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/level2/sublevel1"
            element={
              <LevelTwoSubOne
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

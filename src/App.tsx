import React, { useEffect } from "react";
import "./style.modules.scss";
import LevelOne from "./pages/LevelOne";
import { Routes, Route, Link } from "react-router-dom";
import {
  PowerOneExercise,
  PowerTwoExercise,
  PowerThreeExercise,
  PowerFourExercise,
  SpeedOneExerciseOne,
  SpeedOneExerciseTwo,
  SpeedOneExerciseThree,
  SpeedOneExerciseFour,
  SpeedTwoExerciseOne,
  SpeedTwoExerciseTwo,
  SpeedTwoExerciseThree,
  SpeedTwoExerciseFour,
  SubLevel1test,
} from "./pages/ThresholdEight/index";
import LevelTwoSubOne from "./pages/ThresholdSeven/SubLevelOne";
import { MainPage } from "./pages/LandingPage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FailGame from "./pages/FailGame";
import WinGamePage from "./pages/WinGamePage";
import LevelDash from "./pages/MainMenu";
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
            path="/b8/power/sublevel1"
            element={
              <PowerOneExercise
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/b8/power/sublevel2"
            element={
              <PowerTwoExercise
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/b8/power/sublevel3"
            element={
              <PowerThreeExercise
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/b8/power/sublevel4"
            element={
              <PowerFourExercise
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
            path="/b8/speed1/sublevel1"
            element={
              <SpeedOneExerciseOne
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/b8/speed1/sublevel2"
            element={
              <SpeedOneExerciseTwo
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/b8/speed1/sublevel3"
            element={
              <SpeedOneExerciseThree
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />

          <Route
            path="/b8/speed1/sublevel4"
            element={
              <SpeedOneExerciseFour
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />
          <Route
            path="/b8/speed2/sublevel1"
            element={
              <SpeedTwoExerciseOne
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />

          <Route
            path="/b8/speed2/sublevel2"
            element={
              <SpeedTwoExerciseTwo
                handleFullScreen={() => {
                  handleFullScreen();
                }}
              />
            }
          />

          <Route
            path="/b8/speed2/sublevel3"
            element={<SpeedTwoExerciseThree />}
          />

          <Route
            path="/b8/speed2/sublevel4"
            element={<SpeedTwoExerciseFour />}
          />
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

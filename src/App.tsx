import React from "react";
import "./style.modules.scss";
import MainDash from "./pages/MainDash";
import { Routes, Route, Link } from "react-router-dom";
import GameOne from "./pages/GameOne";
import { MainPage } from "./pages/LandingPage";
import Test from "./pages/Test"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<MainDash />} />
        <Route path="/game1" element={<GameOne />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;

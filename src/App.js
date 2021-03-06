import "./App.css";
import "./stylesheets/Home.css";
import "./stylesheets/Leaderboard.css";
import "./stylesheets/MusigProFooter.css";
import React from "react";
import Home from "./components/Home";
import Sing from "./components/Sing";
import Countdown from "./components/Countdown";
import Musigprofooter from "./components/Musigprofooter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>

      <Home />

      <Countdown />

      <Sing />

      <Musigprofooter />

    </Router>
  );
}
export default App;

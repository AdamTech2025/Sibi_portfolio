import React from "react";
import PersonalLanding from "./components/PersonalLanding";
import InterestingEvents from "./components/InterestingEvents";
import FunStuffs from "./components/FunStuffs";
import Navbar from "./components/Navbar";
import Ventures from "./components/Ventures";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <PersonalLanding />
      <InterestingEvents />
      <FunStuffs />
      <Ventures />
    </div>
  );
};

export default App;

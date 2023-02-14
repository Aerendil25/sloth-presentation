import './App.css';
import { useState } from "react";
import UserInterface from "./UserInterface";
import Pagerduty from "./Pagerduty";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserInterface />} />
        <Route path="/pagerduty" element={<Pagerduty />} />
      </Routes>
    </div>
  );
}

export default App;

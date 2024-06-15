import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import LandingPage  from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<LandingPage />}></Route> */}
        <Route exact path="/" element={<Auth />}></Route>
        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

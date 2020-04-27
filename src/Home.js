import React from "react";
import { Link } from "react-router-dom";
import logo from "./kenya.png";
import "./App.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hooksのお勉強をしようよ！</p>
        <Link to="/question1" className="App-link">
          Question1
        </Link>
        <Link to="/question2" className="App-link">
          Question2
        </Link>
        <Link to="/question3" className="App-link">
          Question3
        </Link>
      </header>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import logo from "./kenya.png";
import "./App.css";

const messages = [
  "頑張ってるね！",
  "あとすこし！",
  "良い調子だね！",
  "ラクスパ！",
  "得意料理は豚キムチ！",
];

const Header = () => {
  return (
    <Link to="/" className="Header-link">
      <div className="Header-wrapper">
        <img src={logo} alt="logo" className="Header-logo" />
        <p className="Header-text">
          {messages[Math.floor(Math.random() * messages.length)]}
        </p>
      </div>
    </Link>
  );
};

export default Header;

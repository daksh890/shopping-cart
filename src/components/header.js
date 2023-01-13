import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <div>
      <span className="header">React Shopping Cart using Context API.</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">HomePage</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

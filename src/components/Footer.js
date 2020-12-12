import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <nav className="navigation">
    <ul style={{ display: "flex", width: "100%" }}>
      <li style={{ width: "50%", textAlign: "center" }}>
        <Link to="/">
          <span style={{ color: "black" }}>홈</span>
        </Link>
      </li>
      <li style={{ width: "50%", textAlign: "center" }}>
        <Link to="/nextWeeks">
          <span style={{ color: "black" }}>주간 동향</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Footer;

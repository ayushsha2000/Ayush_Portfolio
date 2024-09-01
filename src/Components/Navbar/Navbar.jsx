import "./Navbar.css";

import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState("Home");

  function handleSetMenuOnClick(menu) {
    setNavMenu(menu);
  }
  return (
    <div className="navbar">
      <p className="navbar-left">Ayush</p>
      <ul className="navbar-menu">
        <li onClick={() => handleSetMenuOnClick("Home")}>Home</li>
        <li onClick={() => handleSetMenuOnClick("About")}>About</li>
        <li onClick={() => handleSetMenuOnClick("Service")}>Service</li>
        <li onClick={() => handleSetMenuOnClick("Works")}>Works</li>
        <li onClick={() => handleSetMenuOnClick("Contact")}>Contact</li>
      </ul>
      <Button
        buttonText="Hire me"
        buttonIcon={
          <FontAwesomeIcon
            icon={faHandshake}
            style={{ color: "white", marginLeft: "0px" }}
          />
        }
      />
    </div>
  );
};

export default Navbar;

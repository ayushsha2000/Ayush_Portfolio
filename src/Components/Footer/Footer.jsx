import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Are You Ready to kickstart your project with a touch of magic?</h2>
      <p>
        Reach out and let's make it happen ✨. I'm also available for full-time
        or Part-time opportunities to push the boundaries of design and deliver
        exceptional work.
      </p>
      <div className="button-container">
        <Button
          buttonText="Download CV"
          buttonIcon={
            <FontAwesomeIcon icon={faHandshake} style={{ color: "white" }} />
          }
        />
      </div>
    </div>
  );
};

export default Footer;

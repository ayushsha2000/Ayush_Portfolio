import React from "react";
import "./Heading.css";
import { assets } from "../../assets/assets";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";
import ImageMarquee from "../ImageMarquee/ImageMarquee";

const Heading = () => {
  const imageUrls = [
    assets.fretbox,
    assets.zolnoi,
    assets.refill,
    assets.codemonk,
    assets.jds,
  ];
  return (
    <div className="heading">
      <div className="heading-profile">
        <img src={assets.ayush} alt="" />
        <div className="heading-profile-info">
          <h2 className="heading-profile-name">Ayush Sha</h2>
          <p className="heading-profile-desc">
            I am a Mobile Application and Web Developer based in Bengaluru
          </p>
        </div>
        <div className="heading-profile-social">
          <IconButton
            buttonIcon={
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ color: "white", marginLeft: "0px" }}
              />
            }
          />
          <IconButton
            buttonIcon={
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ color: "white", marginLeft: "0px" }}
              />
            }
          />
        </div>
      </div>
      <div className="heading-profile-description">
        <div className="heading-profile-personal-info">
          <p>Hello There!</p>
          <h2>
            I'm Ayush Sha, a product designer crafting user-centric design with
            pixel-perfect precision.
          </h2>
          <p>
            <span
              style={{
                color: "#03ff00",
                paddingLeft: 0,
                fontSize: 32,
                verticalAlign: "middle",
              }}
            >
              •
            </span>
            <span style={{ fontSize: "inherit", marginLeft: "8px" }}>
              Available for Freelancing
            </span>
          </p>

          <Button
            buttonText="Download CV"
            buttonIcon={
              <FontAwesomeIcon icon={faHandshake} style={{ color: "white" }} />
            }
          />
        </div>
        <div className="heading-past-companies">
          <h2>Company I Worked With</h2>
          <ImageMarquee images={imageUrls} />
        </div>
      </div>
    </div>
  );
};

export default Heading;

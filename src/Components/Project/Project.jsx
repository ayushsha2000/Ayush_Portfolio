import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="project-heading">
        <h2>Works & Projects</h2>
        <p>
          Check out some of my design projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>
      </div>
      <div className="project-description">
        <div className="project-description-child">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDcJ8H8xn9aE2tPg1GnWyHbwj1fGVSvrr4g&s"
            alt=""
          />
          <div className="project-description-child-contents">
            <p className="project-description-title">Design</p>
            <p className="project-description-subtitle">Mobile Application Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://github.com/etekumoses">
                <i className="fa fa-github"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Etekumoses</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Mobile Developer 💻",
                    1000,
                    "Full stack Developer ✅",
                    1000,
                    "Graphics Designer 💓",
                    1000,
                    "Cross platform v",
                    1000,
                    "Flutter Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                An entrepreneur and a software developer with a soft spot for
                design, experience and frontend. ✨
              </span>
            </span>
          </div>
          <div className="profiel-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="ETEKUMOSES.pdf" download="etekumoses.pdf">
              <button className="btn highlighted-btn">Check Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

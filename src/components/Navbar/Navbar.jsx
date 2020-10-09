import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Skyler Wu</h1>
        <div className="info-bar">
          <p className="info-item">skylerwu@college.harvard.edu</p>
        </div>
        <div className={"info-bar"}>
          <Link 
            className="info-link"
            to={{pathname: 'https://www.instagram.com/ler.in.the.sky/'}}
            _target="_blank"
            >
              Instagram
            </Link>

          <Link 
            className="info-link"
            to={{pathname: 'https://open.spotify.com/user/q25hxj4s11xal51wsjw292amj'}}
            _target="_blank"
            >
              Spotify
            </Link>

          <Link 
            className="info-link"
            to={{pathname: 'https://linkedin.com/in/skyler-wu-47754a188'}}
            _target="_blank"
            >
              LinkedIn
            </Link>

        </div>
      </div>
      <div className="nav-background">
        <Link className = "nav-link" to={{pathname: "/about"}}>
          About
          </Link>
        <Link className = "nav-link" to={{pathname: "/experience"}}>
          Experiences
          </Link>
        <Link className = "nav-link" to={{pathname: "/projects"}}>
          Projects
          </Link>

      </div>
    </>
  );
}

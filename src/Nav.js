import React from "react";
import CfLogoWhite from "./assets/cf_logo_white.svg";
import "./css/Nav.css";

export default function Nav() {
  return (
    <nav className="Nav navbar navbar-expand-lg">
      <a className="navbar-brand" href="https://careerfoundry.com/" rel="noreferrer" id="logo-link">
        <img src={CfLogoWhite} alt="CareerFoundry Logo" id="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/" rel="noreferrer">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" rel="noreferrer">Learn with us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" rel="noreferrer">Our graduates</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" rel="noreferrer">Online Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" rel="noreferrer">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" rel="noreferrer">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

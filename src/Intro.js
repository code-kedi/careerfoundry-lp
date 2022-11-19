import React from "react";
import "./css/Intro.css";
import HappyCoder from "./assets/happy-coder.jpg";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="info-container d-flex align-items-center">
        <div className="info-container-details">
          <label htmlFor="/">POPULAR COURSES</label>
          <h2 className="mt-2 mb-3">Explore our courses</h2>
          <p>Take a look at our specialization course <span>Voice User Interface Design</span> or our popular <span>Full-Stack Immersion</span> course.</p>
        </div>
        <img
          src={HappyCoder}
          alt="coding-student"
          className="rounded" />
      </div>
    </div>
  );
}

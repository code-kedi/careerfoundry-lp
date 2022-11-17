import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="info-container">
        <div className="info-container-details">
          <h2>Explore our courses</h2>
          <p>Take a look at our latest addition "Voice User Interface Design"
          or our popular "Full-Stack Immersion" course.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="coding-student" />
      </div>
      <div className="course-container mt-5">
        <h3 className="text-center">Which course are you interested in?</h3>
        <form>
          <div className="row">
            <div className="col">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="course" id="vui-design" value="option1" checked />
                <label class="form-check-label" for="vui-design">
                  Voice User Interface Design
                </label>
              </div>
            </div>
            <div className="col">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="course" id="full-stack" value="option2" />
                <label class="form-check-label" for="full-stack">
                  Full-Stack Immersion
                </label>
              </div>
            </div>
            <div className="col">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="course" id="all" value="option3" />
                <label class="form-check-label" for="all">
                  Both
                </label>
              </div>
            </div>
          </div>
          <div>
            <input className="w-100" type="submit" value="Select" />
          </div>
        </form>
      </div>
      <div className="results-container">
        Results
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';
import Course from './Course';
import LandingPage from './LandingPage';
import CourseSelection from './CourseSelection';
import axios from "axios";

export default function App() {
  const [data, setData] = useState("Loading...");
  const [loaded, setLoaded] = useState(false);
  const apiUrl = "https://private-e05942-courses22.apiary-mock.com/courses";

  useEffect(() => {
    axios.get(apiUrl).then(handleResponse);
  }, []);

  function handleResponse(response) {
    setData(response.data);
    setLoaded(true);
  }

  if(loaded) {
    return (
      <div className="App">
        <div className="container">
          <header>
            <p>LP</p>
          </header>
          <LandingPage />
          <Course data={data} />
          <CourseSelection />
          <footer className="App-footer"><small>Coded by Sonja</small></footer>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

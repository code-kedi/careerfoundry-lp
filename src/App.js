import React, { useState, useEffect } from 'react';
import './css/App.css';
import Course from './Course';
import Intro from './Intro';
import CourseSelection from './CourseSelection';
import Nav from './Nav';
import Footer from './Footer';
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
        <Nav navbar-nav={true} />
        <div>
          <Intro />
          <Course data={data} />
          <CourseSelection />
        </div>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}

import React, { useEffect, useState, useRef } from 'react';
import Typed from "typed.js";
import './App.css';
import getBlogPosts from './client';
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

const App = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getBlogPosts().then(data => setPosts(data))
  }, []);

  const typeEffect = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeEffect.current, {
      strings: ["Software Engineer.", "Problem Solver.", "Philosophy Enthusiast.", "Activist.", "Yogini."], // Strings to display
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <div className="split-left">
        <div className="centered">
          <div className="headshot">
            <img
              src="../nyheadshot.jfif"
              alt="Black woman in tech"
              height="270px"
            ></img>
          </div>
        </div>
      </div>
      <div className="split-right">
        <div className="centered">
          <div className="Intro">Hello</div>
          <div className="about">
            <h4>I'm Lauryn</h4>
            <span ref={typeEffect}></span>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

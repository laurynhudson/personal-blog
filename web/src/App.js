import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Typed from "typed.js";
import './App.css';
import getBlogPosts from './client';
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

function App() {
  const Home = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      getBlogPosts().then(data => setPosts(data))
    }, []);

    const typeEffect = useRef(null);

    useEffect(() => {
      const typed = new Typed(typeEffect.current, {
        strings: ["Software Engineer.", "Problem Solver.", "Philosophy Enthusiast.", "Activist.", "Yogini."],
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
            <div className="Intro">Hello 👋🏽</div>
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

  const Resume = () => {
    return <h2>Resume goes here</h2>;
  };

  const About = () => {  
    return (
    <div className="About">
      <img className="ggbridge" src="../ggbridge.jpg" alt="golden gate bridge">
      </img>
      <h3 className="header">About Me 👀</h3>
      <div className="about-p">
        <p>I'm a software engineer based in San Francisco, working in ESG Fintech. 
          When I'm not coding you can find me eating at restaurants around the city, plant shopping, or at the beach with my dog Venus. 
          I'm passionate about health - mental, physical, and spiritual and I'm a certified yoga teacher. 
          Currently training for a martathon 🏃🏽‍♀️  </p>
      </div>
    </div>
    );
  };

  const Blog = () => {
    return <h2>Blog goes here</h2>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
    </Router>
  );

}

export default App;

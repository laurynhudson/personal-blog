import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getBlogPosts from './client';
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

const App = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getBlogPosts().then(data => setPosts(data))
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
            <p>
              I’m a software engineer in the ESG fintech space.
              I...
            </p>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
      {/* <h3>Blog coming soon...</h3>
      <div>
        {posts.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div> */}
    </div>
  );
}

export default App;

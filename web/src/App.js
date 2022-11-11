import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getBlogPosts from './client';

const App = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getBlogPosts().then(data => setPosts(data))
  }, []);

  return (
    <div className="App">
      <h3>Blog coming soon...</h3>
      <div>
        {posts.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

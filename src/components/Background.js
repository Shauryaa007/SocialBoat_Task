// src/App.js
import React from 'react';
import bg1 from '../assets/bg1.jpg';

const Background=()=> {
  const backgroundStyle = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set height to 100vh to cover the entire viewport vertically
    width: '100%', // Set width to 100% to cover the entire viewport horizontally
  };

  return <div style={backgroundStyle}></div>;
}

export default Background;

// src/components/Header.js


import icon1 from '../assets/icon1.png';
import picon from '../assets/picon.png';
//import Background from './Background';
//import SearchBar from './SearchBar';


const  Header=() =>{
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'black', // Use rgba to set the background color with opacity
    backdropFilter: 'blur(10px)', // Add a blur effect to the background
    color: 'white',
    //position: 'fixed', // Fixed position to keep it on top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure it's above other content
    position:'stick'
  };

  
  

  return (
    <div>
    <header style={headerStyles}>
      {/* Logo (No action required) */}
      <div id="logo"><img src={icon1} alt="icon" style={{height:'44px', width:'44px'}}></img></div>

      {/* Search bar */}
     {/* <SearchBar/> */}

      {/* Profile Image on the right */}
      <div id="profile-image" > <img src={picon} alt="picon" style={{height:'44px', width:'44px', borderRadius:44/2 }}></img></div>
     
    </header>
    {/* <Background/> */}
    </div>
  );
}

export default Header;

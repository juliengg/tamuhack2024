import React from 'react';

const headerStyle = {
  backgroundColor: 'grey', // Set your desired background color
  color: 'black',          // Set your desired text color
  padding: '10px',
  textAlign: 'left',
  position: 'fixed',       // Fixed position to keep it at the top
  width: '100%',           // Take up the full width of the screen
  top: 0,                   // Position at the top of the screen
  marginLeft: '227px',   // Additional left margin for the title
  height: '75px',   // Set the height of the header
};
const titleStyle = {
    fontSize: '75px',  // Set the font size of the title text
    marginTop:'-7px'
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Bloom</h1>
      {/* Add other header elements or navigation links here */}
    </header>
  );
};

export default Header;
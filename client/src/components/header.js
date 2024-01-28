import React from 'react';

const headerStyle = {
  padding: '10px',
  textAlign: 'left',
  width: '100%',           // Take up the full width of the screen
  marginLeft: '0',   // Additional left margin for the title
  height: '75px',   // Set the height of the header
  letterSpacing: "5px",
  
};
const titleStyle = {
    fontSize: '75px',  // Set the font size of the title text
    marginTop: '10px',
    marginLeft:"30px",
    fontWeight: "100"
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
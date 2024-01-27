import React from 'react';

const Body = () => {
  return (
    <main style={mainStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        {/* Add your hero section content here */}
        <h1>Welcome to Bloom!</h1>
        <p>The Journey for your Financial Success</p>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        {/* Add content for features section */}
        <h2>Key Features</h2>
        <ul>
          <li>Interactive Budgeting Tools</li>
          <li>Financial Education Resources</li>
          <li>AI</li>
          {/* Add more features */}
        </ul>
      </section>

      {/* Call to Action Section */}
      <section style={callToActionStyle}>
        {/* Call to action section */}
        <h2>Learn More Today!</h2>
        <button>Get Started</button>
      </section>
    </main>
  );
};

// Styles (You can use a CSS-in-JS library or import an external stylesheet)
const mainStyle = {
    marginTop: '75px',  // Adjusted margin top to account for the fixed header
    marginLeft: '242px',  // Adjusted margin left to account for the sidebar
    minHeight: '100vh', // Ensures the main content takes at least the full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };
  
  const heroSectionStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f0f0f0',
    marginBottom: '20px',
  };
  
  const featuresSectionStyle = {
    padding: '40px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
    listStyleType: 'none',
  };
  
  const callToActionStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f0f0f0',
  };
  
export default Body;
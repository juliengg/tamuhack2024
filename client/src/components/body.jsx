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
  minHeight: '100vh', // Ensures the main content takes at least the full height of the viewport
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left', // Center content vertically
  alignItems: 'left', // Center content horizontally
  padding: '20px',
};

const heroSectionStyle = {
  textAlign: 'center', // Center text horizontally
  padding: '40px', // Padding around the content
  backgroundColor: '#f0f0f0', // Background color
  marginBottom: '20px', // Added margin bottom for separation
};

const featuresSectionStyle = {
  padding: '40px', // Padding around the content
  backgroundColor: '#ffffff', // Background color
  marginBottom: '20px', // Added margin bottom for separation
};

const callToActionStyle = {
  textAlign: 'center', // Center text horizontally
  padding: '40px', // Padding around the content
  backgroundColor: '#f0f0f0', // Background color
};

export default Body;
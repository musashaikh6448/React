// import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container" style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        Welcome to our platform! We are a team of passionate developers and designers dedicated to creating innovative solutions for our users. Our mission is to provide high-quality services that make your life easier and more enjoyable.
      </p>
      <p style={styles.text}>
        Founded in 2020, we have grown into a trusted name in the tech industry. Our focus is on delivering exceptional user experiences and building products that matter.
      </p>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default AboutUs;
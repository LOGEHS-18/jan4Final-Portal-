import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1em' }}>
        <h1>About Us</h1>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.SnqENcXdG5ZYiCrUGwQHowHaHa&pid=Api&P=0&h=180"  // Replace with your image URL
          alt="Company Logo"
          style={{ maxWidth: '100%', maxHeight: '200px', marginRight: '20px', borderRadius: '8px' }}
        />

        <div style={{ maxWidth: '600px' }}>
          <p>This is the content of your About page. You can add information about your company, team, or whatever is relevant.</p>
          <p>Feel free to customize this page to fit your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

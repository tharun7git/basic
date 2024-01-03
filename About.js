import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Welcome to the About Page!</h1>
      {/* Other content */}
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default About;

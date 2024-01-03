import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {/* Other content */}
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Home;

// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Geuniver</h1>
      <p>
        In Geuniver, you can try out all the software products created by JG. 
        We will be making all features ranging from AI, games and so on.
      </p>
      <Link to="/register">
        <button>
            Register Here
        </button>
      </Link>
    </div>
  );
};

export default HomePage;

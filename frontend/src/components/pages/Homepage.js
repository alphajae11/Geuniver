// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Homepage.css';

const loggedIn = false;

const HomePage = () => {
  return (
    <>
      {loggedIn ? (
        <>
          <div className='Top_header flex items-center justify-center'>
            <img src='../../styles/logos/Geuniver.png' alt="Geuniver_logo" className='w-16 h-16 mb-4' />
            <div className='profile_options ml-4'>
              <Link to="/profile" className='ProfileButton ml-4'>
                <button className='bg-blue-500 text-white px-4 py-2'>
                  Check your profile
                </button>
              </Link>
            </div>
          </div>
          <div className='intro text-center ml-4'>
            <h1 className='text-4xl'>Welcome to Geuniver</h1>
            <p className='text-lg whitespace-pre-line'>
              Let's Try out the software products!
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='Top_header flex items-center justify-center'>
            <img src='../../styles/logos/Geuniver.png' alt="Geuniver_logo" className='w-10 h-10 mb-4' />
            <div className='login_register_options ml-10'>
              <Link to="/register" className='RegisterButton mb-2'>
                <button className='bg-green-500 text-white px-4 py-2 block w-full'>
                  Register Here
                </button>
              </Link>
              <Link to='/login' className='LoginButton'>
                <button className='bg-blue-500 text-white px-4 py-2 block w-full mt-2'>
                  Login Here
                </button>
              </Link>
            </div>
          </div>
          <div className='intro text-center'>
            <h1 className='text-4xl'>Welcome to Geuniver, User!</h1>
            <p className='text-lg'>
              In Geuniver, you can try out all the software products created by JG.
              <br />
              We will be making all features ranging from AI, games and so on.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;


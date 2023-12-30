// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Homepage.css';

var loggedIn = false;

const HomePage = () => {
  return (
    <>
        {loggedIn ? (
                <>
                    <div className='Top_header'>
                    <img src='../../styles/logos/Geuniver.png' alt="Geuniver_logo" width={100} height={100} />
                    <div className='profile_options'>
                        
                        <Link to="/profile" className='ProfileButton'>
                            <button>
                                Check your profile
                            </button>
                        </Link>
                    </div>
                    </div>
                    <div className='intro'>
                        <h1>Welcome to Geuniver</h1>
                        <p>
                            Let's Try out the software products!
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className='Top_header'>
                    <img src='frontend/src/style/logos/Geuniver.png' alt="Geuniver_logo" width={50} height={50} />
                    <div className='login_register_options'>
                        <Link to="/register" className='RegisterButton'>
                            <button>
                                Register Here
                            </button>
                        </Link>
                        <Link to='/login' className='LoginButton'>
                            <button>
                                Login Here
                            </button>
                        </Link>
                    </div>
                    </div>
                    <div className='intro'>
                        <h1>Welcome to Geuniver, User!</h1>
                        <p>
                            In Geuniver, you can try out all the software products created by JG. {'\n'}
                            We will be making all features ranging from AI, games and so on.
                        </p>
                    </div>
                </>
            )
        }
        
    </>
  );
};

export default HomePage;

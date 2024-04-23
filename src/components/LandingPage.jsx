import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';



const LandingPage = () => {
  return (
    <div className='container'>

      <h2>Welcome to PopX</h2>
      <h6>We're thrilled to see you here on our registered page. Thank you for being a part of our community. Your presence means a lot to us</h6>
      <Link to='/create-account' className='create_account'>Create Account</Link>
      <br />
      <Link to='/sign-in' className='registered'>Already Registered? Login</Link>
  
    </div>
  );
};

export default LandingPage

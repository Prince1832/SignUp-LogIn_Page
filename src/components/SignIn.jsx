
import React, { useState } from 'react';
import './SignIn.css';
import ProfilePage from './ProfilePage';
import Navbar from './Navbar';

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  function validatesigninForm(e) {
    e.preventDefault();

    const email_address = document.getElementById('Email_Address').value;
    const password = document.getElementById('password').value;

    const newErrors = [];

    // Check if any field is empty
    if (email_address.trim() === '' || password.trim() === '') {
      newErrors.push('Please fill your email address and password.')
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email_address)) {
        newErrors.push('Please enter a valid email address.');
      }

      if (email_address !== 'user@example.com' || password !== '12345678') {
        newErrors.push('Incorrect email or password. Please try again.');
      }
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      console.log('Form submitted successfully!');
      // Add logic to handle successful form submission (e.g., send data to server)
      setUser({
        email: email_address // Assuming you retrieve user information from the server after successful login
      });
    }
  }

  return (

    <div>
      
      <Navbar />
      {user ? (
        <ProfilePage user={user} />
      ) : (
        <div className='container'>
          <h2>Sign in to your PopX account</h2>
          <h6>Welcome back! We're delighted to have you here again.</h6>
          <label htmlFor="Email_Address">Email Address</label>
          <input type="email" id='Email_Address' placeholder='Enter email address' />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Enter password' />
          <button type='submit' onClick={validatesigninForm} className='Signin_button'>Login</button>

          {errors.length > 0 && (
            <ul className='error_message'>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SignIn;

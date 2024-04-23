
import React, { useState } from 'react';
import './CreateAccount.css'; 
import ProfilePage from './ProfilePage';
import Navbar from './Navbar';

function CreateAccount() {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);

    function validateForm(e) {
        e.preventDefault(); 

        const username = document.getElementById('username').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const companyname = document.getElementById('companyname').value;

        const newErrors = []; 

        if (
            username.trim() === '' ||
            phonenumber.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            companyname.trim() === ''
        ) {
            newErrors.push('Please fill all your credentials.');
        } else {
            
            if (username.trim() === '') {
                newErrors.push('Please enter your full name.');
            }
        
            if (phonenumber.trim() === '') {
                newErrors.push('Please enter your phone number.');
            } else if
                (phonenumber.trim().length !== 10 || isNaN(phonenumber.trim())) {
                newErrors.push("Please enter a valid 10-digit mobile number.")
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.trim() || !emailPattern.test(email)) {
                newErrors.push('Please enter a valid email address.');
            }
            if (password.trim() === '') {
                newErrors.push('Please enter a password.');
            } else if (password.length < 8) {
                newErrors.push('Password must be at least 8 characters long.');
            }
            if (companyname.trim() === '') {
                newErrors.push('Please enter your company name.');
            }
        }

        setErrors(newErrors); 

        if (newErrors.length === 0) {
            console.log('Form submitted successfully!');

            setUser({
                username: document.getElementById('username').value,
                email: document.getElementById('email').value
            });
        }
    }
    return (
        <div>
          
           <Navbar />
            {user ? (
                <ProfilePage user={user} />) : (

                <form className="signup-form" onSubmit={validateForm}>
                    <h3>Create your PopX account</h3>

                    <label htmlFor='username'>Full Name</label>
                    <input type="text" id='username' placeholder=' ' required />

                    <label htmlFor='phonenumber'>Phone number</label>
                    <input type="number" id='phonenumber' placeholder=' ' required />

                    <label htmlFor='email'>Email address</label>
                    <input type="email" id='email' placeholder=' ' required />

                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' placeholder=' ' required />

                    <label htmlFor='companyname'>Company name</label>
                    <input type="text" id='companyname' placeholder=' ' required />

                    <div className='div'>Are you an Agency?</div>
                    <input type="radio" name="agency" value="yes" className="radio_yes" /> Yes
                    <input type="radio" name="agency" value="no" className="radio_no" /> No

                    <button type="submit" onClick={validateForm}>Create Account</button>

                    {errors.length > 0 && (
                        <ul className="error-messages">
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    )}
                </form>
            )}
        </div>
    );
}

export default CreateAccount;

import React, { useState } from 'react';
import './NewsLetter.css';
import Swal from 'sweetalert2';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Reset any previous error messages.
    if (error) {
      setError('');
    }
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      // Check if the email input is empty
      setError('Please fill in your email.');
    } else if (validateEmail(email)) {
      // Validate the email format
      Swal.fire({
        icon: 'success',
        title: 'Subscription Successful!',
        text: 'You are subscribed successfully!',
      });
      setEmail(''); // Optionally clear the email after successful subscription
      setError(''); // Clear any error messages
    } else {
      setError('Please enter a valid email address.');
    }
  };

  // Function to validate email using a regex pattern
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={handleChange}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default NewsLetter;

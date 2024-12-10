import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isChecked, setIsChecked] = useState(false);
  const navigator=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the input fields are empty
    if (!formData.name || !formData.email || !formData.password) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all fields.',
      });
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Password must contain at least one alphabetic character, one digit, one special character, and be at least 8 characters long.',
      });
      return;
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/register', formData);
      console.log('API response:', response.data);
      // Handle success, redirect, show a message, etc.
      if(response.data)
        {
          Swal.fire({
            icon: 'success',
            title: 'Register Done',
            text: 'Register Success Fully.',
          });

          navigator("/")
        }

        else
        {
          Swal.fire({
            icon: 'warning',
            title: 'Register failed',
            text: 'Something wrong...',
          });
        }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Register</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /> 
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" checked={isChecked} onChange={handleCheckboxChange} />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <button type="submit" disabled={!isChecked}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

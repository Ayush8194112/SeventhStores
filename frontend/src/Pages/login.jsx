import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {toggle_true_and_false_on_login} from "../app/CounterSlice/CounterSlice.js"
import { useDispatch } from 'react-redux';
const Login = () => {
  const count = useSelector((state) => state.counter.value)
   console.log(count,"hii")
   const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
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
    console.log("hii",count)

    // Check if the checkbox is checked
    if (!isChecked) {
      Swal.fire({
        icon: 'error',
        title: 'Agreement Error',
        text: 'Please agree to the terms of use & privacy policy.'
      });
      return; // Stop further execution
    }

    // Check for empty input fields
    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Fields',
        text: 'Please fill in all fields.'
      });
      return; // Stop further execution
    }

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password Error',
        text: 'Password must be at least 8 characters long and contain at least one alphabet, one numeric character, and one special character.'
      });
      return; // Stop further execution
    }

    let em = formData.email.slice(-10);
    if (formData.email.length < 12 || em !== '@gmail.com') {
      // Use SweetAlert for email validation alert
      Swal.fire({
        icon: 'error',
        title: 'Email Error',
        text: 'Email must be a valid Gmail address.'
      });
      return; // Stop further execution
    }

    try {
      const response = await axios.post('http://localhost:8000/login', formData);
      console.log('API response:', response.data);


      if(response.data)
        {
          Swal.fire({
            icon: 'success',
            title: 'login Done',
            text: 'Login Success Fully.',
          });
          dispatch(toggle_true_and_false_on_login(true))
          navigator("/")
        }

        else
        {
          Swal.fire({
            icon: 'warning',
            title: 'login failed',
            text: 'Something wrong...',
          });
        }
      // Handle success, redirect, show a message, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
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
          <div className="loginsignup-agree">
            <input 
              type="checkbox" 
              name="agree" 
              id="agree" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
            <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
          </div>
          <button type="submit" disabled={!isChecked}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Address.css';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  
  const navigate = useNavigate();

  const isNumeric = (value) => {
    return /^\d+$/.test(value); // Regular expression to check if string contains only digits
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the pincode
    if (pincode.length !== 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a 6-digit pincode.'
      });
      return;
    }

    // Add other validations as necessary
    if (phoneNumber.length !== 10 || !isNumeric(phoneNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid 10-digit phone number.'
      });
      return;
    }

    // Navigate to payment after validation
    navigate("/payment");
    console.log('Form submitted!');
  };

  return (
    <div className="delivery-address-form-container">
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipient's Name</label>
        <input
          type="text"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          required
        />
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label>Address Line 1</label>
        <input
          type="text"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        />
        <label>Address Line 2</label>
        <input
          type="text"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <label>Pincode/ZIP Code</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          required
        />
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Address;

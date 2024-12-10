import React, { useState } from 'react';
import "./Payment.css"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const Navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');

    const payment = (e) => {
        e.preventDefault();

        // Simple validation checks
        if (cardNumber.length !== 16) {
            Swal.fire({
                icon: "error",
                title: "Invalid Card Number",
                text: "Please enter a valid 16-digit card number.",
            });
            return;
        }

        if (cvv.length !== 3) {
            Swal.fire({
                icon: "error",
                title: "Invalid CVV",
                text: "Please enter a valid 3-digit CVV.",
            });
            return;
        }
        const dateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        if (!dateRegex.test(expiryDate)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Date Format",
                text: "Please enter a valid expiry date in MM/YYYY format.",
            });
            return;
        }
 

        // Assuming other validations pass, simulate success
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Payment Successful. Your order will be delivered soon.",
            showConfirmButton: false,
            timer: 2000
        });

        setTimeout(() => {
            Navigate("/");
        }, 2100);
    }

    return (
        <main className="container">
            <header>
                <h2>Payment Details</h2>
            </header>
            <section>
                {/* this is collect data from user  user*/}
                <form onSubmit={payment} id="payment-form">
                    <label htmlFor="card_number">Card Number:</label>
                    <input type="text" id="card_number" name="card_number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

                    <label htmlFor="expiry_date">Expiry Date:</label>
                    <input type="text" id="expiry_date" name="expiry_date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YYYY" required />

                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" value={cvv} onChange={(e) => setCVV(e.target.value)} required />

                    <label htmlFor="card_holder_name">Cardholder Name:</label>
                    <input type="text" id="card_holder_name" name="card_holder_name" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} required />

                    <button type="submit">Submit Payment</button>
                </form>
            </section>
        </main>
    );
}

export default Payment;

import React from 'react';
import ChatBot from 'react-simple-chatbot';
import "./Home.css"; // Updated import for the CSS file

function SeventhStores() {
  
  return (
    <ChatBot
    steps={[
      {
        id: '1',
        message: 'Welcome to SeventhStores! What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you! How can I assist you today?',
        trigger: '4',
      },
      {
        id: '4',
        options: [
          { value: 'browse', label: 'Browse products', trigger: '5' },
          { value: 'offers', label: 'View offers', trigger: '6' },
          { value: 'support', label: 'Customer support', trigger: '7' },
          { value: 'categories', label: 'Explore product categories', trigger: '8' },
          { value: 'policy', label: 'Store policies', trigger: '9' },
          { value: 'locations', label: 'Find store locations', trigger: '10' },
        ],
      },
      {
        id: '5',
        message: 'We have clothing collections for men, women, and kids. Visit our website to explore the latest arrivals!',
        trigger: '11',
      },
      {
        id: '6',
        message: 'We currently have a 20% discount on all summer collections! Don’t miss out.',
        trigger: '11',
      },
      {
        id: '7',
        message: 'Our customer support team is here to help. What do you need assistance with?',
        trigger: '12',
      },
      {
        id: '8',
        message: 'Our product categories include:\n1. Men’s Wear\n2. Women’s Wear\n3. Kids’ Wear\n4. Accessories\n5. Footwear\nWhich category are you interested in?',
        trigger: '11',
      },
      {
        id: '9',
        message: 'Our store policies cover returns, exchanges, and shipping. Visit our website’s policy section for detailed information.',
        trigger: '11',
      },
      {
        id: '10',
        message: 'We have stores in major cities nationwide. Check our website’s "Store Locator" to find the nearest store to you.',
        trigger: '11',
      },
      {
        id: '11',
        message: 'Is there anything else I can help you with?',
        trigger: '4',
      },
      {
        id: '12',
        options: [
          { value: 'order', label: 'Track my order', trigger: '13' },
          { value: 'return', label: 'Return or exchange', trigger: '14' },
          { value: 'other', label: 'Other inquiry', trigger: '15' },
        ],
      },
      {
        id: '13',
        message: 'Please provide your order number, and we’ll track it for you.',
        end: true,
      },
      {
        id: '14',
        message: 'You can initiate a return or exchange within 30 days of purchase. Visit our returns page for more information.',
        end: true,
      },
      {
        id: '15',
        message: 'Please contact our support team at support@seventhstores.com for further assistance.',
        end: true,
      },
    ]}
      floating={true}
      className="chat-division"
    />
  );
}

export default SeventhStores;

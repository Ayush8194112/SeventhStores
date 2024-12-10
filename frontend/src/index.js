import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
// import LoginSignup from './Pages/LoginSignup';
import reportWebVitals from './reportWebVitals';
import Payment from './Components/CartItems/Payment';
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ShopContextProvider>
   <Provider store={store}>
   <App />
 </Provider>,

 
   </ShopContextProvider>
      
    
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


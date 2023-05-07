import React from 'react';
import "./Thankyou.css";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';


function Thankyou(props) {


    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/');
        }, 5000);
        return () => clearTimeout(timer);
      }, []);
    return (
    <div className="container">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been submitted successfully.</p>
    </div>
    );
}

export default Thankyou;
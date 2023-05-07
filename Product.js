import React from 'react';
import "./Product.css"
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map'
import { useNavigate } from 'react-router';
import CurrencyFormat from 'react-currency-format';

function Product({id, title, image, price, rating }) {

  const navigate = useNavigate();
    return (


        <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            
            <strong><CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={2}
            suffix=".00"
          /></strong>
          </p>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
          
          
        </div>
  
        <img src={image} alt="" />
        <button className='product__btn' onClick={() => navigate("/order/" + id)}>More Details</button>
       
      </div>

        /*<div className='product'>
            <div className='product_image'>
               <img src={props.obj.imageURL} height="300px"/>
            </div>
            <div className='product_name'>{props.obj.name}</div>
            <div className='product_rating'>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                {props.obj.rating}
            </div>
            
            <div className='product_price'>
            {getSymbolFromCurrency('INR')}
                {props.obj.price}
                </div>
    </div> */
    );
}

export default Product;
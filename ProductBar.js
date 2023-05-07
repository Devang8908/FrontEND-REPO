import React from 'react'
import "./ProductBar.css"
import getSymbolFromCurrency from 'currency-symbol-map'
import { Rating } from '@mui/material'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from "react-router-dom";
export default function ProductBar(props) {
  const navigate = useNavigate();
  return (
    //        <div className='productbar'>
            
    //            <img src={props.obj.imageURL}/>
            
    //         <div className='product_name'>{props.obj.name}</div>
    //         <div className='product_rating'>
    //             <Rating name="half-rating-read" defaultValue={props.obj.rating} precision={0.5} readOnly />
    //             {props.obj.rating}
    //         </div>
    //         <div className='product_price'>
    //         <CurrencyFormat
		// 			value={props.obj.price}
		// 			displayType={'text'}
		// 			thousandSeparator={true}
		// 			prefix={'₹'}
		// 			decimalScale={2}
    //       suffix=".00"
		// 		/>
    //             </div>
    // </div> 
    <div
    className="product-card"
    onClick={() => navigate("/order/" + props.obj.productID)}
>
    <div className="thumbnail">
        <img
            src={props.obj.imageURL}
        />
    </div>
    <div className="prod-details">
        <span className="name">{props.obj.name}
        </span>
      
        <Rating name="half-rating-read" defaultValue={props.obj.rating} precision={0.1} readOnly />
        <span className="price">
        <CurrencyFormat
            value={props.obj.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={2}
            suffix=".00"
          />

        </span>
    </div>
</div>
  )
}

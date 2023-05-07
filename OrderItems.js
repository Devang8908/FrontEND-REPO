import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./OrderItems.css";

function OrderItems(props) {
    return (
        
    <div className="OrderItems__Item">
      <div className="OrderItems__image">
        <img

          src={props.obj.imageURL}
          alt="Name"

          title='Name'
        />
       
        
      </div>

      <div style={{width:"40%",padding:"50px 0px"}}>
        <h6>{props.obj.name}</h6>
      </div>
      
     

    
        <div className="OrderItems__title">
          <CurrencyFormat
            value={props.obj.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={2}
            suffix=".00"
          />
         
        </div>
	  <div className="OrderItems__title">Qty</div>
	 

    </div>
    );
}

export default OrderItems;
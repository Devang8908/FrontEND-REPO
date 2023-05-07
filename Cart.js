import React, { useContext } from "react";

import "./Cart.css";

import { DataContext } from "../../App";
import getSymbolFromCurrency from "currency-symbol-map";
import CurrencyFormat from "react-currency-format";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from "@mui/material";
import { Context } from "../../api/context";
import axios from "axios";



function Cart({ id, image, title, price, rating, hideButton, qty,userID,color,company,hideDelete }) {
  //let {item,size,increment} = useContext(CartContext)

  // let { productID } = useParams();
  const [quantity, setQuantity] = useState(qty);
  const {setCartItems, handleRemoveFromCart,flag,setFlag,handleCartProductQuantity,user} =
  useContext(Context);

 

//   const handleRemoveFromCart1 = (userID,productId) => {
//     console.log("delete");
//     // let items = [...cartItems];
//     // items = items?.filter((p) => p.id !== productId);
//     // setCartItems(items);

//     let payload = {
//             "userId": userID,
//             "productId":productId
//         }

// const requestOptions ={
//   method: "DELETE",
//   headers: { 'Content-Type': 'application/json' },
//   body : JSON.stringify(payload),
// }

//  fetch("http://localhost:8081/amazon/addToCart/remove",requestOptions)
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response)))
// .catch(err =>{
// console.log(err)
// })


// };







  


  return (
    // <div
    //   style={{
    //     border: "1px solid #E7E7E7",
    //     width: "95%",
    //     display: "flex",
    //     height: "250px",
    //     margin: "25px",
    //   }}
    // >
    //   <div className="CheckOutsItems_image">
    //     <img src={image} height="200px" />
    //   </div>
    //   <div style={{margin:"25px"}}>
    //     <div className="name_text textgap">{title}</div>
    //     <div style={{ fontsize:"20px" ,fontWeight:"bold"}} className="textgap ">{price}</div>
    //     <div className="textgap">In stcok</div>
    //   </div>

    //   <div> {qty} </div>

    // </div>
	
 <>
    <div className="Cart__Item">
      <div className="CartItem__image">
        <img
          src={image}
          alt=""
        />
      </div>

      <div className="CartItem__info">
        <div className="info__title">
          <h2>{title}</h2>
        </div>
        <div className="CartItem__price">
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={2}
            suffix=".00"
          />
           <div className="item__actions-divider" style={{marginBottom:"3px"}}>|</div>
          <div className="info__stock">in-stock</div>
        </div>

        <div className="info__colour">
          <strong>Colour</strong> : {color}
        </div>
        <div className="info__colour">
          <strong>Brand Name</strong> : {company}
        </div>
        <div className="info__colour">
          <strong>Quantity</strong> : {qty}
        </div>
      

        <div className="item__actions">
      
        </div>
      </div>
	  <div className="item__right">
	  <div className="item__price2"><CurrencyFormat
            value={qty*price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={2}
            suffix=".00"
          /></div>
	  <div className="item__btn1">
	 

    {!hideDelete && (  <>
      <FavoriteIcon/>
                    		<div className="item__actions-divider" style={{marginBottom:"3px"}}>|</div>
                        <DeleteIcon onClick={() => handleRemoveFromCart(userID,id)} style={{cursor :"pointer"}}/>	
                        </>
                )} 
	
	  
	  </div>
	  </div>
    </div>
	
</>
  );
}

export default Cart;

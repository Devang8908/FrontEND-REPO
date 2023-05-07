import React, { useContext } from "react";
import { Grid, Paper, Rating } from "@mui/material";
import "./PlaceOrder.css";
import { Link,useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import CheckOuts from "../CheckOuts/CheckOuts";
import { DataContext } from "../../App";
import CurrencyFormat from "react-currency-format";
import RelatedProducts from "./RelatedProducts";
import { Context } from "../../api/context";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import { useStateValue } from "../../Context/stateProvider";

function PlaceOrder(props) {


//   const {user,flag,setFlag} = useContext(DataContext);
//   //const {item,size,increment} = useContext(CartContext)
  const [productDetails,setProductDetails] = useState([]);




  let { productID } = useParams();
  const [quantity, setQuantity] = useState(1);



  const { flag,setFlag,user } = useContext(Context);


  const decrement = () => {
      setQuantity((prevState) => {
          if (prevState === 1) return 1;
          return prevState - 1;
      });
  };
  const increment = () => {
      setQuantity((prevState) => prevState + 1);
  };

  //const [{ basket,user }, dispatch] = useStateValue();

  
  

  useEffect(() => {
    let str = "http://localhost:8082/amazon/products/product/" + productID;
    axios.get(str)
    .then(res=>{
      setProductDetails(res.data)
      //console.log(productDetails);
    })
    .catch(err=>{
      console.log(err)
    })
  },[]);


  const addToCart = (e) => {
    
    e.preventDefault();
    setFlag(!flag);

    // dispatch the item into the data layer
  console.log("kk");

    let payload = {  
      "userId": user,
      "productId":productID,
      "quntity":quantity
  }

  const requestOptions ={
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify(payload),
  }

  fetch("http://localhost:8081/amazon/addToCart/add",requestOptions)
  .then(response => response.json())
  .then(res => {

    
 
      
      //localStorage.setItem("users",JSON.stringify(user?.uid));
      window.location.reload();
  })
  .catch(error =>{

  })

   ///first wala part hai
  };
 

  return (
    // <div>
    //   <Grid container>
    //     <Grid item xs={4.4}>
    //       <img
    //         className="placeOrder_image"
    //         src={productDetails.imageURL}
    //       />
    //     </Grid>
    //     <Grid item xs={4}>
    //       <div className="placeOrder_des">
    //         <div
    //           style={{
    //             fontSize: "20px",
    //             fontWeight: "500",
    //             lineHeight: "32px",
    //           }}
    //         >
    //           {productDetails.name}
    //         </div>
    //         <div className="PlaceOrder_text">
    //           <Rating
    //             name="half-rating-read"
    //             defaultValue={2.5}
    //             precision={0.5}
    //             readOnly
    //           />
    //           14,126 ratings | 806 answered questions
    //         </div>
    //         <hr></hr>
    //         <div>Price: {productDetails.price}</div>
    //         <div>EMI starts at ₹5,910. No Cost EMI available</div>
    //       </div>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Paper variant="outlined" className="placeOrder_order">

          
    //         <button className="placeOrder_btn addtocart " onClick={addToCart}>Add to Cart</button>
            
    //         <button className="placeOrder_btn buynow">buy now</button>
            
    //       </Paper>
        
    //     </Grid>
    //   </Grid>
    // </div>
    <>
    <div className="single-product-main-content">
    <div className="layout">
        <div className="single-product-page">
            <div className="left1">
                <img
                    src={
                        productDetails.imageURL
                    }
                />
            </div>
            <div className="right1">
                <span className="name1">{productDetails.name}</span>
                <span className="price1"><CurrencyFormat
            value={productDetails.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            decimalScale={2}
            suffix=".00"
          /></span>
                <span className="desc1"><ul> 
                      {productDetails.des && productDetails.des.map((item)=>(
                      <li>{item}</li>
                      ))}
                       </ul> </span>

                <div className="cart-buttons">
                    <div className="quantity-buttons">
                        <span onClick={decrement}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increment}>+</span>
                    </div>
                    <button
                        className="add-to-cart-button"
                        onClick={addToCart}
                        
                    >
                        <FaCartPlus size={20} />
                        ADD TO CART
                    </button>
                </div>

                <span className="divider" />
                <div className="info-item">
                    <span className="text-bold">
                        Category:{" "}
                        <span>
                            {
                               productDetails.
categories                            }
                        </span>
                    </span>
                    <span className="text-bold">
                        Share:
                        <span className="social-icons">
                            <FaFacebookF size={16} />
                            <FaTwitter size={16} />
                            <FaInstagram size={16} />
                            <FaLinkedinIn size={16} />
                            <FaPinterest size={16} />
                        </span>
                    </span>
                </div>
            </div>
        </div>  
    </div>
</div>
</>
  );
}

export default PlaceOrder;

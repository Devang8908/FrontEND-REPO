import React, { useContext } from "react";
//import "./CheckOut.css";
import { Grid } from "@mui/material";
import getSymbolFromCurrency from "currency-symbol-map";
import CheckOutsItems from './CheckOutsItems';
//import { CartContext } from '../CartContext';
import { useState, useEffect } from "react";
import axios from "axios";
import { json, useParams } from "react-router";


//import { DataContext } from "../DataContextProvider";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./CheckOutsItems.css";
import CurrencyFormat from "react-currency-format";
import Cart from "./Cart";
import { useStateValue } from "../../Context/stateProvider";
import { getUserCart } from "../../api";
import { actionType } from "../../Context/reducer";
import { Context } from "../../api/context";
import { CgPlayButton } from "react-icons/cg";
import PayButton from "../PalyButton";




function CheckOuts(props) {
   

    
    
    


  
 /* const {item} = useContext(CartContext);

    const cartValue = function(){
        let price=0;
        for(let i=0;i<item.length;i++){
            price+=parseInt(item[i].price);
        }
        return price;
    }*/

  //const [{user}] = useStateValue();

  const cartValue = function(){
    let price=0;
    for(let i=0;i<cartItems.length;i++){
        price+=parseInt(cartItems[i].price) * parseInt(cartItems[i].qty);
    }
    return price;
}

const totalQty = function(){
  let qty=0;
  for(let i=0;i<cartItems.length;i++){
      qty+=parseInt(cartItems[i].qty);
  }
  return qty;
}




  const {userId} = useParams();
 
  const { cartItems,
    setCartItems,flag, } =
    useContext(Context);

    useEffect(()=>{
      console.log(cartItems);
    },[])


  //useEffect( ()=>{
  //axios.get("http://localhost:8081/amazon/addToCart/show/ZRp3MfNpvCVObQuA48tpsgsbQdH2")
  //.then(res=>{
  //setListOfProduct(res.data)
  //setBasketList(ListOfProduct.list)
  //console.log("mybsake-->" , basketList)
  //localStorage.setItem("myCart", JSON.stringify(ListOfProduct));
  //console.log("this is list-->",ListOfProduct.list);
  //localStorage.setItem("myBasket12",JSON.stringify(ListOfProduct));
  //window.location.reload();

  //})
  //.catch(err=>{
  //console.log(err)
  //})
  //},[ListOfProduct])

  //const getData = () =>{
  //setBasketList(ListOfProduct.list);
  //}
  const history = useNavigate();


  return (
    // <div className="checkout__body">
    //   <Grid container>
    //     <Grid item xs={9}>
    //       <div className="checkout__container">
    //         <div
    //           style={{
    //             fontSize: "30px",
    //             fontWeight: "500",
    //             padding: "20px 0px 0px 20px",
    //           }}
    //         >
    //           {/* {data ? data.length : 0} */}
    //         </div>
    //         <div>
    //           {
    //             cartItems && cartItems.length  > 0 && cartItems.map((item)=>(
    //               <CheckOutsItems 
    //           id={item.productID}
    //           title={item.name}
    //           image={item.imageURL}
    //           price={item.price}
    //           rating={item.rating}
    //           qty={item.qty}
    //               />
    //             ))
    //           }
    //         </div>
    //       </div>
    //     </Grid>
    //     <div className="placeOrder_tank">
    //       <Grid item xs={2} style={{ marginTop: "40px" }}>
    //         <div style={{ fontSize: "20px" }}>
    //           Subtotal ({7} items):
    //           <b>
    //             {getSymbolFromCurrency("INR")}
    //             {77}
    //           </b>
    //         </div>
    //         <div style={{ paddingTop: "25px" }}>
    //           <button className="placeOrder_btn" onClick={e=>history('/payment')}>Place Order</button>
    //         </div>
    //       </Grid>
    //     </div>
    //   </Grid>
    // </div>
<>  
    <div className="cart__main" > 

    
    
    <div className="cart">
    <h1 style={{width:"15%",paddingLeft:"45px"}}>Your Cart</h1>
  
    {
      cartItems?.map((item)=>(
        <Cart
    id={item.productID}
    title={item.name}
    image={item.imageURL}
    price={item.price}
    rating={item.rating}
    qty={item.qty}
    userID={userId}
    color = {item.colour}
    company = {item.barnd}
        />
      ))
    }
    </div>

	<div className="cart__right">
	<div className="cart__tank">
          
             <div className="cart__summary">
				<strong>
               Cart Summary
			   </strong>
             </div>
			 <div className="summary__price">
			 <div >Total Price: </div>
	         <CurrencyFormat
              value={cartValue()}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
              decimalScale={2}
              suffix=".00"
            />
			</div>
			<div className="summary__price">
			 <div >Total Item(s): </div>
	         
            <span>{totalQty()}</span>
			</div>
	
	         
             <div style={{ paddingTop: "30px" }}>
             <button className="placeOrder_btn" onClick={e=>history('/address')}>Place Order</button>
             </div>
           
         </div>
	</div>
	</div>


  </> 

  );
}

export default CheckOuts;

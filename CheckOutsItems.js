import React, { useContext } from "react";

import "./CheckOut.css";

import { DataContext } from "../../App";
import getSymbolFromCurrency from "currency-symbol-map";
import CurrencyFormat from 'react-currency-format';
import DeleteIcon from '@mui/icons-material/Delete';




function CheckOutsItems({id, image, title, price, rating, hideButton,qty,color
  ,company}) {
  //let {item,size,increment} = useContext(CartContext)

  //let { productID } = useParams();

  // let{user,flag,setFlag} = useContext(DataContext)
  
  // //const [{user},dispatch] = useStateValue();

  //   const removeFromBasket = () =>{
  //     setFlag(!flag)

  //   //console.log("delete")
  //   let payload = {
  //     "userId": user,
  //     "productId":id
  // }

  // const requestOptions ={
  //     method: "DELETE",
  //     headers: { 'Content-Type': 'application/json' },
  //     body : JSON.stringify(payload),
  // }

  // fetch("http://localhost:8081/amazon/addToCart/remove",requestOptions)
  // .then(response => response.json())
  // .then(data => {
  //     //localStorage.setItem("users",JSON.stringify(user?.uid));
  //     //window.location.reload();
  // })
  // .catch(err =>{
  //   console.log(err)
  // })


  // }

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
    <div className="CartItem">
			<div className="CartItem-image">
				<img src={image} alt="" />
			</div>

			<div className="CartItem-info">
				<div className="info-title">
					<h2>{title}</h2>
				</div>
				{!hideButton && (<div className="info-stock">in-stock</div>)}
        <div className="info__colour"><strong>Colour</strong> : {color}</div>
        <div className="info__colour"><strong>Brand Name</strong> : {company}</div>
        <div className="info__colour"><strong>Quantity</strong> : {qty}</div>

				<div className="item-actions">
				
					

          {!hideButton && (
                    		<div className="item-delete"  >
                        <DeleteIcon/>
                      </div>
                )}
				</div>
			</div>
			<div className="CartItem-price">
        
				<CurrencyFormat
					value={price}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'₹'}
					decimalScale={2}
          suffix=".00"
				/>
			</div>
		</div>
  );
}

export default CheckOutsItems;

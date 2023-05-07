import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import OrderInfo from "./orderInfo";
import "./orderShow.css"
import OrderList from "./OrderList";

import { useEffect } from "react";
import { getAllOrders } from "../../api";
import { Context } from "../../api/context";
import { useParams } from "react-router";

function OrderHistory(props) {
 
  const {userId} = useParams();
 
  const { orderItems,setOrderItems } =
    useContext(Context);

  useEffect(() => {
    getOrders();
    console.log(orderItems);
  }, []);

  const getOrders = () => {
    getAllOrders(userId).then((data) => {
      setOrderItems(data);
    });
  };



  return (

    <div className='orders'>
    <h1>Your Orders</h1>

    <div>
      {/* {
        orderItems.length === 0 ? <div>buy</div> : <OrderInfo o/>
      } */}
       {
       orderItems.map((e)=>(

          <OrderInfo order={e}/>

       ))
       }
    </div>
</div>

    /*<div>
      {order && order.length > 0 && order.map((e) => 
         
         <OrderInfo obj={e}/>


       )}
      </div> */
  );
}

export default OrderHistory;

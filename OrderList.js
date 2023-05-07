import React from 'react';
import OrderItems from './OrderItems';
import CurrencyFormat from 'react-currency-format';
import "./OrderItems.css";
import "./OrderList.css";


function OrderList(props) {
    
    return (
        <div className="cart__main" > 
        <div className='cart__body'>
            <div style={{margin: "10px 30px",width: "91%",
height: "5%",borderBottom: "1px solid lightgray"}}>
        <div className='orders__id'>
            {props.obj.transactionId}
        </div>
        </div>
     
        <div style={{    width: "91%",
   
   margin: "0px 30px",
   height: "5%",
   borderBottom: "1px solid lightgrey"}}>
        <span style={{marginLeft:"6%"}}>Item(s)</span>
        
            <span style={{marginLeft:"43%"}}>Price</span>
            <span style={{marginLeft:"13%"}}>Quantity</span>
            
        </div>
        <div className="cart">

            {
                  props.obj.list &&  props.obj.list.map((e)=>(

                    <OrderItems obj={e}/>

                  ))
            }
       
    
       
        
        </div>
        </div>
    
        <div className="order__right">
        <div className="cart__tank">
              
                 <div className="cart__summary">
                    <strong>
                   Cart Summary
                   </strong>
                 </div>
                 <div className="summary__price">
                 <div >Total Price:  </div>
                 <CurrencyFormat
                  value={props.obj.totalAmout}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                  decimalScale={2}
                  suffix=".00"
                />
                </div>
                <div className="summary__price">
                 <div >Total Item(s): </div>
                 
                <span>{props.obj.list.length}</span>
                </div>
        
                 
                 <div style={{ paddingTop: "30px" }}>
                   <button className="cart__btn">Place Order</button>
                 </div>
               
             </div>
        </div>
        </div>
    
    );
}

export default OrderList;
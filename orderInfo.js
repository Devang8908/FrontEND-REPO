import React from 'react';
//import moment from 'moment';
import "./orderInfo.css"
import CheckOutsItems from '../CheckOuts/CheckOutsItems';
import CurrencyFormat from 'react-currency-format';

function OrderInfo({order}) {
    return (<>
        <div className='order'>
        
        <p><strong>Date & Time : </strong>{order.date}</p>
        <p className="order__id">
            <strong>TransactionID : </strong><small>{order.transactionId}</small>
        </p>
        
        {order.list.map(item => (
            <CheckOutsItems
            id={item.productID}
            title={item.name}
            image={item.imageURL}
            price={item.price}
            rating={item.rating}
            qty={item.qty}
            color = {item.colour}
            company = {item.barnd}

            hideButton
            />
        ))}
        
            
                <h3 className="order__total">Order Total: 	<CurrencyFormat
					value={order.totalAmout}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'₹'}
					decimalScale={2}
          suffix=".00"
				/></h3>
            
       
        
    </div>
    </>
    );
}

export default OrderInfo;
import React from "react";
import CheckOutsItems from "../CheckOuts/CheckOutsItems";
import { Context } from "../../api/context";
import Cart from "../CheckOuts/Cart";

import { useContext } from "react";
import { DataContext } from "../../App";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
//import { Form } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./axios";
import { Navigate, useNavigate, useParams } from "react-router";

import moment from "moment/moment";
import CurrencyFormat from "react-currency-format";
import ControlledAddressInput from "../Address/Address";
import Address from "../Address/Address";

function Payment(props) {
  const history = useNavigate();
  //const [{ basket, user }, dispatch] = useStateValue();
  //const {data} = useContext(CartContext);
  const { address } = useContext(Context);

  const { productID } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const cartValue = function () {
    let price = 0;
    for (let i = 0; i < cartItems.length; i++) {
      price += parseInt(cartItems[i].price) * parseInt(cartItems[i].qty);
    }
    return price;
  };

  const totalQty = function () {
    let qty = 0;
    for (let i = 0; i < cartItems.length; i++) {
      qty += parseInt(cartItems[i].qty);
    }
    return qty;
  };

  const { userId } = useParams();

  const { cartItems, user, setCartItems, flag } = useContext(Context);

  useEffect(() => {
    console.log(cartItems);
  }, []);

  //const [{ basket,user }, dispatch] = useStateValue();

  useEffect(() => {
    let str = "http://localhost:8082/amazon/products/product/" + productID;
    axios
      .get(str)
      .then((res) => {
        setProductDetails(res.data);
        //console.log(productDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  //const [error, setError] = useState(null);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${cartValue() * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cartItems]);



  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        let payload = {
          transactionId: paymentIntent.id,
          userId: user,
          totalAmout: paymentIntent.amount / 100,
          date: moment
            .unix(paymentIntent.created)
            .format("MMMM Do YYYY, h:mma"),
          list: cartItems,
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8084/amazon/order/add", requestOptions)
          .then((response) => response.json())
          .then((res) => {
            //localStorage.setItem("users",JSON.stringify(user?.uid));
            //window.location.reload();
          })
          .catch((error) => {});

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history("/thankyou");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/*<h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1> */}

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
            <p>{address.fullName}</p>
            <p>{address.flat}</p>
            <p>{address.area}</p>
            <p>{address.landmark}</p>
            <p>
              {address.city} {address.state}
            </p>

            <p>Phone: {address.phone}</p>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            {<h3>Review items and delivery</h3>}
          </div>
          <div className="payment__items">
            {!productID ? (
              cartItems.map((item) => (
                <Cart
                  id={item.productID}
                  title={item.name}
                  image={item.imageURL}
                  price={item.price}
                  rating={item.rating}
                  qty={item.qty}
                  userID={userId}
                  color={item.colour}
                  company={item.barnd}
                  hideDelete
                />
              ))
            ) : (
              <Cart
                id={productDetails.productID}
                title={productDetails.name}
                image={productDetails.imageURL}
                price={productDetails.price}
                rating={productDetails.rating}
                color={productDetails.colour}
                company={productDetails.barnd}
              />
            )}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                {!productID ? (
                  <h3>
                    Order Total:{" "}
                    <CurrencyFormat
                      value={cartValue()}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                      decimalScale={2}
                      suffix=".00"
                    />
                  </h3>
                ) : (
                  <h3>
                    Order Total:{" "}
                    <CurrencyFormat
                      value={productDetails.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                      decimalScale={2}
                      suffix=".00"
                    />
                  </h3>
                )}
                <button
                  disabled={processing || disabled || succeeded}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>

            {/*<form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
    v                                 )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                              {/* Errors 
                            {error && <div>{error}</div>}
                        </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

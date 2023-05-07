import axios from "axios";


const PayButton = ({ cartItems }) => {


  const handleCheckout = () => {
    axios
      .post(`http://localhost:5000/api/stripe/create-checkout-session`, {
        cartItems
      })
      .then((response) => {
        console.log("hii")
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));

    // axios
    // .get(`http://localhost:5000`, {
    // })
    // .then((response) => {
      
    //   if (response.data.url) {
    //     window.location.href = response.data.url;
    //   }
    // })
    // .catch((err) => console.log(err.message));
    
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
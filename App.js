import "./App.css";
import Payment3 from "./componets/Payment/payment3";
import NavBar from "./componets/NavBar/navigation";
import MainPage from "./componets/HomePage/MainPage";
import DisplayContent from "./componets/DisplayContent/DisplayContent";
import PlaceOrder from "./componets/PlaceOrder/PlaceOrder";
import CheckOuts from "./componets/CheckOuts/CheckOuts";
import StripePayment from "./componets/Payment/StripePayment";
//import CartContextProvider from "./componets/CartContext";
import { useEffect } from "react";
import { auth } from "./firebase";
import AppContext from "./api/context";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./componets/SignUp/SignUp";
import Register from "./componets/SignUp/Register";
// import { useStateValue } from "./componets/StateProvider";
//import { DataContext } from "./componets/dataprovider";
//import { DataContext } from "./componets/dataprovider";
//import { DataContext } from "./componets/Dataprovider";
//import { DataContext } from "./componets/DataContextProvider";
import { createContext } from "react";
//import { useStateValue } from "./componets/StateProvider";
import { useState } from "react";
//import {  } from "react-router-dom";
//import Payment from "./componets/payment/payment";
//import payment from "./componets/payment/Payment";
//import Payment from "./componets/Payment/Payment";
//import Payment from "./componets/Payment/payment";
//import Payment from "./componets/Payment/Payment";
import Payment from "./componets/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import OrderHistory from "./componets/orderShow/orderHistory";
import Payment2 from "./componets/Payment/Payment2";
import NavigationBar from "./element/NavigationBar/NavigationBar";
import CheckOutsItems from "./componets/CheckOuts/CheckOutsItems";
import Cart from "./componets/CheckOuts/Cart";

import OrderList from "./componets/orderShow/OrderList";
import { getUserCart } from "./api";

//import orderShow from "./componets/orderShow/orderShow";
import { getAllProducts,getAllOrders } from "./api";
import { actionType } from "./Context/reducer";
import { useStateValue } from "./Context/stateProvider";
import NotFound from "./componets/NotFound";
import Success from "./componets/Success";
import Address from "./componets/Address/Address";
import RightPannel from "./componets/DisplayContent/RightSide/RightPannel";
import Thankyou from "./componets/Payment/Thankyou";


const promise = loadStripe("pk_test_51MvzjeSISsBNYaiHoPAS6t2b58LxOxBkvKpvmANhHtTHm1dxnDtx1jn0hB1V09WjX2m8PLZcsdvm9nSZ8b05ES1x00nLTz24K9");

export const DataContext = createContext();

function App() {
  //const [{ user }, dispatch] = useStateValue();
 

  // const [user,setUser] = useState()
  // const [ListOfProduct, setListOfProduct] = useState({});
  // const [data, setData] = useState([]);
  // const [order,setOrder] = useState([]);
  // const [flag,setFlag] = useState(false)

  // useEffect(() => {
  //   // will only run once when the app component loads...
  
  //   auth.onAuthStateChanged((authUser) => {
      
  
  //     if (authUser) {
  //       // the user just logged in / the user was logged in
  
  //       dispatch({
  //         type: actionType.SET_USER,
  //         user: authUser?.uid,
  //       });


       
  //       if(!cart){
  //         getUserCart(authUser?.uid).then((data)=>{
  //           dispatch({
  //             type:actionType.ADD_TO_CART,
  //             cart:data.list,
  //           })
  //         })
  //       }


      
      
  //         if(!orderList){
            
  //           getAllOrders(authUser?.uid).then((data)=>{
  //             dispatch({
  //               type:actionType.SET_ORDER_TERM,
  //               orderList:data,
  //             })
  //           })
  //         }
     
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type:  actionType.SET_USER,
  //         user: null,
  //       });
  //     }
  //   });
  // },[]);



  // useEffect(() => {
  //   // will only run once when the app component loads...
  //   if(!allProducts){
  //     getAllProducts().then((data)=>{
  //       dispatch({
  //         type:actionType.SET_ALL_PRODUCTS,
  //         allProducts:data,
  //       })
  //     })
  //   }
   
  // },[])
  





  //   auth.onAuthStateChanged((authUser) => {
      

  //     if (authUser) {
  //     setUser(authUser?.uid)
      
      

  //     let url = "http://localhost:8081/amazon/addToCart/show/"+authUser?.uid;
  //     axios.get(url)
  //     .then(res=>{
  //       //console.log("res data-->",res.data)
  //       setListOfProduct(res.data)
  //       //console.log("List product-->",ListOfProduct)
  //       //localStorage.setItem("myCart", JSON.stringify(ListOfProduct));
  //       //console.log("this is list-->",res.data.list);
  //       //localStorage.setItem("myBasket12",JSON.stringify(ListOfProduct));
  //       //window.location.reload();
  //       setData(res.data.list)
  //       //console.log("list2-->",data)
  //       //localStorage.setItem("users",JSON.stringify(authUser?.uid));
        
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
      
  //     let url1 = "http://localhost:8084/amazon/order/orderlist/"+authUser?.uid;

  //     axios.get(url1)
  //     .then(res=>{
        
  //       setOrder(res.data)
  //       //console.log("orderList-->",res.data)
  
  //       //localStorage.setItem("users",JSON.stringify(authUser?.uid));
        
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })

         
  //       // the user just logged in / the user was logged in

  //       /*dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       }); */
  //     } else {
  //       setUser(null)
  //       // the user is logged out
  //       /*dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       }); */
  //     }
  //     //console.log("2nd data->>>",user)
  //   });
  //   //console.log("THE USER IS >>> ", user);
  //   //let userID = user.uid;
  // },[flag]);

  
  //const [{user}] = useStateValue();
  /*const callApi = () => {
    let url = "http://localhost:8081/amazon/addToCart/show/" + user?.uid;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setListOfProduct(json);
        //console.log("my basket-->",ListOfProduct);
      });
  };
  useEffect(() => {
    callApi();
    setData(ListOfProduct.list);
    //console.log("lkj-->", data);
  }, []); */

  /*useEffect( ()=>{
    //console.log("THE USER IS >>> ", user);
    let url = "http://localhost:8081/amazon/addToCart/show/ZRp3MfNpvCVObQuA48tpsgsbQdH2";
    axios.get(url)
    .then(res=>{
      setListOfProduct(res.data)
      //localStorage.setItem("myCart", JSON.stringify(ListOfProduct));
      console.log("this is list-->",res.data.list);
      //localStorage.setItem("myBasket12",JSON.stringify(ListOfProduct));
      //window.location.reload();
      setData(res.data.list)
      console.log("list2-->",data)
      
    })
    .catch(err=>{
      console.log(err)
    })
  },[]) */
  // const [clientSecret, setClientSecret] = useState("");
  // useEffect(() => {
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   }).then(async (result) => {
  //     var { clientSecret } = await result.json();
  //     setClientSecret(clientSecret);
  //   });
  // }, []);
  return (
    <Router>
      <div className="App">
        <AppContext>
       
         
          {/* <NavigationBar/> */}
         
          <Routes>
          <Route path="/see/:userId" element={<> <NavBar/><OrderHistory/></>}/> 

            <Route path="/payment/:productID?" element={<><NavBar/><Elements stripe={promise}><Payment/></Elements></>}/>
            <Route path="/address" element={<> <NavBar/><Address /></>} />
            <Route path="/login/register" element={<Register />} />
            <Route path="/login" element={<SignUp />} />
            <Route path="/display/:category/:brand?" element={<> <NavBar/><DisplayContent /></>} />
            {/* <Route path="/display/:category/:brand" element={<RightPannel />} /> */}
            <Route path="/order/:productID" element={<> <NavBar/><PlaceOrder /></>} />
            <Route path="/checkout/:userId" element={<> <NavBar/><CheckOuts /></>} /> 
            <Route path="/" element={<> <NavBar/><MainPage /></>} /> 
           
            <Route path="/thankyou" element={<Thankyou/>} /> 
        
     
            
          </Routes>
          {/* <Elements stripe={promise} options={{clientSecret}}><StripePayment/></Elements> */}
          {/* <Payment3/> */}
          </AppContext>
      </div>
    </Router>
  
  );
}

export default App;

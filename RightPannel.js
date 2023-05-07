import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
//import Product from "./Product";
import "./RightSide.css";
import axios from "axios";
import ProductBar from "./ProductBar";

import { useStateValue } from "../../../Context/stateProvider";
import { actionType } from "../../../Context/reducer";
import { getAllProducts } from "../../../api";




function RightPannel({headingText,Brand}) {

const [allProducts,setAllProducts] = useState([]);
const [brandProducts,setBrandProducts] = useState([]);
const [url,setURL] = useState("");






 
 
useEffect(()=>{

  const url1 = "http://localhost:8082/amazon/products/getAllProducts/"+headingText;
  

  axios.get(url1)
  .then(res=>{
    setAllProducts(res.data)  
    console.log(res.data);
  })
  .catch(err=>{
    console.log(err)
  })
},[headingText]);


useEffect(()=>{

  const url2 = "http://localhost:8082/amazon/products/getAllProducts/"+headingText+"/"+Brand;

  axios.get(url2)
  .then(res=>{
    setBrandProducts(res.data)  
    console.log("cat",res.data);
  })
  .catch(err=>{
    console.log(err)
  })
},[Brand]);


    // axios.get("http://localhost:8082/amazon/products/getAllProducts")
    // .then(res=>{
    //   setListOfProduct(res.data)
    //   //localStorage.setItem("myCart", JSON.stringify(ListOfProduct));
    //   console.log("this is list-->",ListOfProduct);
    //   //localStorage.setItem("myBasket12",JSON.stringify(ListOfProduct));
    //   //window.location.reload();
      
    // })
    // .catch(err=>{
    //   console.log(err)
    // })




 /* const fetchData = () => {
    return fetch("localhost:8080/amazon/products/getAllProducts")
          .then((response) => response.json())
          .then((data) => setListOfProduct(data));
  }*/
 /*async function fetchData() {
    try {
      const response = await axios.get("localhost:8080/amazon/products/getAllProducts")
      setListOfProduct(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(fetchData());
  },[])*/

 /*useEffect(() => {
    let list = [
      { id: 1,
        name: "Iphone 11",
        rating: "100",
        price: "104",
        image:
          "https://ik.imagekit.io/Amazon123456/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679464355985",
      },
      { id: 2,
        name: "Iphone 12",
        rating: "101",
        price: "103",
        image:
          "https://ik.imagekit.io/Amazon123456/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679464355985",
      },
      { id: 3,
        name: "Iphone 13",
        rating: "102",
        price: "102",
        image:
          "https://ik.imagekit.io/Amazon123456/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679464355985",
      },
      { id: 4,
        name: "Iphone 14",
        rating: "103",
        price: "101",
        image:
          "https://ik.imagekit.io/Amazon123456/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679464355985",
      },
    ];
    setListOfProduct(list);
  }, []); */

  return (
    <div className="products-container">

    

       <div className="sec-heading">{!Brand ? headingText : Brand}</div>

       {!Brand ? 
        allProducts && allProducts.map((item)=>(
         
          <ProductBar obj={item}/>
          
        ))
       : brandProducts && brandProducts.map((item)=>(
        <ProductBar obj={item}/>))
      }   
    </div> 
  );
}

export default RightPannel;

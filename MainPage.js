import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { useContext } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//import Product from "../DisplayContent/RightSide/Product";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useStateValue } from "../../Context/stateProvider";
import { getAllProducts, getUserCart } from "../../api";
import { actionType } from "../../Context/reducer";
import { auth } from "../../firebase";
import { Context } from "../../api/context";

function MainPage(props) {
  const [ListOfProduct, setListOfProduct] = useState([]);
  // const [{user,cart,allProducts},dispatch] = useStateValue();

  const { products, setProducts, categories, setCategories } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  const getProducts = () => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  };

  //   useEffect(() => {
  //   // will only run once when the app component loads...

  //     getAllProducts().then((data)=>{
  //       setP
  //     })

  // },[])

  // useEffect(() => {
  //   // will only run once when the app component loads...

  // },[])

  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          className="home__image"
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img
              className="home__image"
              src="https://ik.imagekit.io/Amazon123456/amazon-image/Banner-ad/D60755841_PC_3000x1200de._CB606447388_.jpg?updatedAt=1683387980485"
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://ik.imagekit.io/Amazon123456/amazon-image/Banner-ad/TallHero_3000X1200_Unrec._CB593464763_.jpg?updatedAt=1683387980917"
            />{" "}
          </div>
          <div>
            <img
              className="home__image"
              src="https://ik.imagekit.io/Amazon123456/amazon-image/Banner-ad/71YEY_JRlKL._SX3000_.jpg?updatedAt=1683387980498"
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://ik.imagekit.io/Amazon123456/amazon-image/Banner-ad/51ovs76vmtL._SX3000_.jpg?updatedAt=1681502976252"
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://ik.imagekit.io/Amazon123456/amazon-image/Banner-ad/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg?updatedAt=1683387980981"
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://ik.imagekit.io/Amazon123456/amazon-image/Banner-ad/61aURrton0L._SX3000_.jpg?updatedAt=1681502976275"
            />
          </div>
        </Carousel>

        <div className="home__row">
      
            <Product
                    
                    id = "f60c963e-0305-4608-a706-4f1cae400aa5"
                    title = "Apple iPhone 14 Pro Max (128 GB) - Silver"
                    price = {149900}
                    rating =  {4.5}
                    image =  "https://ik.imagekit.io/Amazon123456/amazon-image/Mobiles/iphone-11-max-pro-silver.jpg?updatedAt=1682605592937"
                   
            />
            <Product
                    
                    id = "a5fe5227-301f-4b37-b7c0-8e4546422988"
                    title = "OnePlus 11R 5G (Galactic Black, 8GB RAM, 128GB Storage)"
                    price = {39999}
                    rating =  {4.5}
                    image =  "https://ik.imagekit.io/Amazon123456/amazon-image/Mobiles/one-puls-11R-sonic-black.jpg?updatedAt=1682605592184"
      
            />
             <Product
                    
                    id = "2e898eca-d06a-4e7a-a48e-77c7b728ebdf"
                    title = "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
                    price = {79999}
                    rating =  {4.5}
                    image =  "https://ik.imagekit.io/Amazon123456/amazon-image/Mobiles/samsung-galaxy-s23-5g-cream.jpg?updatedAt=1682605594830"
                   
            />
            <Product
                    
                    id = "cee35a7b-b5b6-4ee0-ae87-e08ebd8b92be"
                    title = "iQOO 9T 5G (Legend, 8GB RAM, 128GB Storage)"
                    price = {44999}
                    rating =  {4.7}
                    image =  "https://ik.imagekit.io/Amazon123456/amazon-image/Mobiles/iqoo-9t-5g-legend-white.jpg?updatedAt=1682605592082"
                   
            />
        
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default MainPage;

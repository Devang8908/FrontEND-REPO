import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteFromBasket } from ".";
import { getUserCart } from ".";
import { auth } from "../firebase";
import { handleQuantity } from ".";

export const Context = createContext();

const AppContext = ({ children }) => {
   
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [orderItems,setOrderItems] = useState([]);
    const [user,setUser] = useState();
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [flag,setFlag] = useState(false);
    const location = useLocation();
    const [address,setAddress] = useState();
    const [userName,setUserName] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // useEffect(() => {
    //         let count = 0;
    //     cartItems?.map((item) => (count += item.attributes.quantity));
    //     setCartCount(count);

    //     let subTotal = 0;
    //     cartItems.map(
    //         (item) =>
    //             (subTotal += item.attributes.price * item.attributes.quantity)
    //     );
    //     setCartSubTotal(subTotal);
    // }, [cartItems]);


    useEffect(() => {
        // will only run once when the app component loads...
      
        auth.onAuthStateChanged((authUser) => {
          
      
          if (authUser) {
            // the user just logged in / the user was logged in
            setUser(authUser?.uid);
            getUserCart(authUser?.uid).then((data) => { 
             setCartItems(data);   
              });

              let url = "http://localhost:8083/amazon/users/getuserdetails/"+authUser?.uid;
               fetch(url)
               .then((response) => response.json())
               .then((data) => {
                 setUserName(data.name);
               });
           
          } else {
            // the user is logged out
            setUser(null);
          }
        });
      },[flag]);


      










    

    // const handleAddToCart = (product, quantity) => {
    //     let items = [...cartItems];
    //     let index = items?.findIndex((p) => p.id === product);
    //     if (index !== -1) {
    //         items[index].qty += quantity;
    //     } else {
    //         product.qty = quantity;
    //         items = [...items, product];
    //     }
    //     setCartItems(items);
    // };

    const handleRemoveFromCart = (userID,productId) => {

        setFlag(!flag);
        deleteFromBasket(userID,productId);
        

    };

    const handleCartProductQuantity = (quantity,userID, productID) => {
        setFlag(!flag);
        handleQuantity(quantity,userID,productID);


    };

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                
                cartItems,
                setCartItems,
                // handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
                orderItems,
                setOrderItems,
                flag,
                setFlag,
                user,
                setUser,
                address,
                setAddress,
                userName,
                setUserName
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
import React, { Component, useState } from 'react';
//import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

import "./NavBar.css"

import { useContext } from 'react';
import { DataContext } from '../../App';
//import { useContext } from 'react';
//import 
import { AiOutlineHeart } from "react-icons/ai";
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../../firebase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getUserCart } from '../../api';
import { actionType } from '../../Context/reducer';
import { useEffect } from 'react';
import { Context } from '../../api/context';

function NavBar(props) {

        // const [{user,cart},dispatch] = useStateValue();
        //const {item} = useContext(CartContext);
     

     const {cartItems, user,userName} = useContext(Context);
     const [scrolled, setScrolled] = useState(false);

     const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
          setScrolled(true);
      } else {
          setScrolled(false);
      }
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  }, []);
     

        const handleAuthenticaton = () => {
            if (user) {
              
              auth.signOut();
            }
          }

        const totalQty = function(){
          console.log("name",userName);
            let qty=0;
            let len = cartItems ? cartItems.length : 0
            for(let i=0;i<len;i++){
                qty+=cartItems[i].qty;
            }
            return qty;
        }
        return ( 
         <div>
            <div className="header">
      <Link to="/" style={{textDecoration:"none"}}>
        <div className="header__logo">
        electro</div>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : userName}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to={'/see/'+user}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
      
        </div>

        <Link to={"/checkout/"+user}>
          <div className="header__optionBasket">
          <div src="" className="cart__image" ></div>
            <span className="header__optionLineTwo header__basketCount">
              {totalQty()}
            </span>
          </div>
        </Link>
      </div>
    </div>
            <div className="navbar__footer">
                    <Link to="/display/Mobiles" style={{textDecoration:"none"}}>
                    <div className="navbar__footer_text">Mobiles</div>
                    </Link>
                    <Link to="/display/SmartWatches" style={{textDecoration:"none"}}>
                    <div className="navbar__footer_text">Smart Watches</div>
                    </Link>
                    <Link to="/display/Music" style={{textDecoration:"none"}}>
                    <div className="navbar__footer_text">Music</div>
                    </Link>
                
                  
                </div>

        </div>
        );
    
}
 
export default NavBar;
import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css"
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { DataContext } from '../../App';

function NavigationBar(props) {

    // const {user,data} = useContext(DataContext)
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    
    // const handleAuthenticaton = () => {
    //     if (user) {
    //       auth.signOut();
    //     }
    //   }

    // const totalQty = function(){
    //     let price=0;
    //     let len = data ? data.length : 0
    //     for(let i=0;i<len;i++){
    //         price+=data[i].qty;
    //     }
    //     return price;
    // }

    const [isMenu, setIsMenu] = useState(false);
 

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

    // const { cartCount, showCart, setShowCart } = useContext(Context);



    return (
        <>
        <header
            className={`main-header ${scrolled ? "sticky-header" : ""}`}
        >
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li  onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)} >Categories</li>
                </ul>
                <div className="navbar__center">
                
        <input className='navbar__searchInput'
          type="text"
          placeholder="Search here"
          
        />
        <div className="searchIcon">
            <SearchIcon />

        
      </div>
                {/* <img
          className="header__logo"
          src="https://ik.imagekit.io/Amazon123456/amazon-image/amazon_PNG11.png?updatedAt=1681419388506"
        /> */}
                </div>
                <div className="right">
                    <TbSearch onClick={() => setSearchModal(true)} />
                    <AiOutlineHeart />
                    <span
                        className="cart-icon"
                        onClick={()=>navigate(("/checkout/"))}
                    >   
                        <CgShoppingCart  />
                        
                        {<span>{2}</span>}
                    </span>
                </div>
            </div>
        </header>
        {/* {searchModal && <Search setSearchModal={setSearchModal} />}
        {showCart && <Cart />} */}
    </>
    );
}

export default NavigationBar;
import React, { useContext, useEffect } from 'react';
import "./LeftSide.css";
import { useNavigate, useParams } from 'react-router';
import { Context } from '../../../api/context';

import { getCategories } from '../../../api';
import { useState } from 'react';
import axios from 'axios';

function LeftPannel({headingText}) {


   const [categories, setCategories] = useState();


   
   let barnList = [];

   if(headingText == "Mobiles")
   barnList = ["Apple","OnePlus","Mi","Samsung","iQOO","Vivo","Oppo"]
   if(headingText == "SmartWatches")
   barnList = ["boat","noise","samsung","Apple"]
   if(headingText == "Music")
   barnList = ["jbl","boat"]
   





    useEffect(()=>{

        const url = "http://localhost:8082/getCategory/cat/"+headingText;

  axios.get(url)
  .then(res=>{
    setCategories(res.data.mapBrandList)  
    console.log(res.data.mapBrandList);
  })
  .catch(err=>{
    console.log(err)
  })

    },[headingText])

    const navigate = useNavigate();
    return (
        // <div className='LeftSide_main'>
        //    <span><strong>Mobiles</strong></span>
        //    <span>Apple</span>
        //    <span>One-Plus</span>
        //    <span>Mi</span>
        //    <span>Real Me</span>   

        // </div>
        <div className="shop-by-category">
            <div className="categories">

  

            {
        categories && categories.map((type,i)=>(
            <div
                        // key={item.id}
                        className="category"
                        onClick={() => navigate(`/display/${headingText}/${barnList[i]}`)}
                    >
                        <img
                            src={type[i]} alt=""
                        />
                    </div>
                    ))
                   
        
      }
              
                    

              
                    
              
            </div>
        </div>
    );
}

export default LeftPannel;
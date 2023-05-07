import React from 'react';
import "./AdvertisementOne.css";

function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__header">
               70% Off | Sports wear
            </div>
            <div className="AdvertisementOne__body">
                <img src='https://ik.imagekit.io/Amazon123456/amazon-image/sportwear-amazon.webp?updatedAt=1679471708197' width= "270px"/>
            </div>
            <div className="AdvertisementOne__footer">
                See more
            </div>
        </div>
    );
}

export default AdvertisementOne;
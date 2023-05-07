import React from 'react';
import LeftPannel from './LeftSide/LeftPannel';
import RightPannel from './RightSide/RightPannel';
import { useParams } from 'react-router';

function DisplayContent(props) {



    const {category} = useParams();
    const {brand} = useParams();

    

    return (
        <div>{
            !brand &&
            <div >
              <LeftPannel headingText={category}/>
            </div>
}
            <div>
               <RightPannel headingText={category} Brand={brand}/>
            </div>
        </div>
    );
}

export default DisplayContent;
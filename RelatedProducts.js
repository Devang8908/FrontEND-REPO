import React from 'react';
import RightPannel from '../DisplayContent/RightSide/RightPannel';

function RelatedProducts({cat}) {
    return (
        <div>
            <div className="related-products">
            <RightPannel headingText="Related Products"  />
        </div>
        </div>
    );
}

export default RelatedProducts;
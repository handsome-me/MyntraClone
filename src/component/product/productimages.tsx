import React from 'react';
import PropTypes from 'prop-types';
import './product.css';
interface Props{

     imageURL:string

};

function ProductImages(props:Props) {

    const {imageURL}=props;
    
    return (
        <div className='image-container'>
        <img src={imageURL} className="product-image" alt="product-image" />            
        </div>
    );
}

export default ProductImages;
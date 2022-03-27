import React from 'react';
import PropTypes from 'prop-types';
import './product.css';
import ProductImage from './productimages';
import ProductInfo from './productinfo';
const imageURL="https://res.cloudinary.com/dq0qx65vj/image/upload/v1630152367/whistler/products/men/cibelly-roberta-SE4Xc1WvIkU-unsplash_uwavtz.jpg";

interface Props{



};

function Product(props:Props) {
    return (
        <div className='product-container'>
         <ProductImage
         imageURL={imageURL}
          
         />
         <ProductInfo
         title=''
         price=''
         type=''
         discount=''
        />
        </div>
    );
}

export default Product;
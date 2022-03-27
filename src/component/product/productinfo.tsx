import React from 'react';
import PropTypes from 'prop-types';
import './productinfo.css';
const WishList="WISHLIST";
interface Props{
   title:string,
   type:string,
   price:string 
   discount:string  ,
   onClick?:any

};

function Productinfo(props:Props) {
  

  const renderWishList=()=>{
const {onClick}=props;
    return(
      <button className='wishlist-button title' onClick={onClick} >
         {WishList}
      </button>
    )

  }


    return (
        <div className='product-info-container'>
          <div className='wishlist-button-container'>
          {renderWishList()}
          </div>
          <div className='information'>
              <span className='h3 title'>Ether</span>
            </div> 
          <div className='information h3'>Orange </div> 
          <div className='information h3' >Rs 44 discount</div>  
        </div>
    );
}

export default Productinfo;
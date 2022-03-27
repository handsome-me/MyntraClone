import React, { memo } from 'react';
import Button from '../Button';
import './index.css';
const imageURL="https://res.cloudinary.com/dq0qx65vj/image/upload/v1630152367/whistler/products/men/cibelly-roberta-SE4Xc1WvIkU-unsplash_uwavtz.jpg";
const ProductDetail = memo(() => {
    return (
         <div className='product-detail-container'>
          <div className='product-detail-image-container'>
              <div className='image'>              
               <img src={imageURL}></img>
              </div>
          </div>
          <div className='product-detail-info-container'>
           {renderTitle("Pume","Men Black High Next TShirt")}
           {renderRatingCard("4.4",40)}
           {renderPriceContainer(1999,38)}
           <Button
            text='ADD TO BAG'
            onClick={()=>{}}
            type="ADDBAG"
            isActionAllowed={false}
           />
          </div>
        </div>
    );
});

export default ProductDetail;


const renderTitle=(brandName:string,info:string)=>{

   return( <div className="title-container">
        
        <div className='title h2 space2'>{brandName}</div>
        <span style={{color:'grey'}} className="space2">{info}</span> 
    </div>   )


}

const renderRatingCard=(ratingStar:string,ratingCount:number)=>{

    return(
        <div className='rating-card-container'>
            <div className='rating-card-star space2'>
                {ratingStar}
            </div>
            <div className="rating-card- space2">
               <span style={{color:'gray'}}> {ratingCount}  Ratings</span>
                </div>
        </div>
    )

}

const renderPriceContainer=(price:number,discountPercent:number)=>{

    return(<div className='price-container'>
        <div className="price title">{price}</div>
        <span style={{color:"orange"}}>({discountPercent}% OFF)</span>
    </div>)
}
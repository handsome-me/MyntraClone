import React, { memo } from 'react';
import './index.css';

/**
 * if action is not allowed then dont allow clicking on it for only wishlist and
 * ADDBAG-> SHOULD BE "GO TO BAG"->click is allowed,
 * WISHLIST -> "WISHLISTED"
 */
interface Props{
    type:"ADDBAG" | "WISHLIST",
    isActionAllowed:Boolean,
    onClick:any,
    text:string

}

const Button = memo((props:Props) => {
    const {text,onClick}=props;
    return (
        <div className='button-container'>
          <button onClick={onClick} className='button'>
              <span style={{color:'white',fontSize:'large'}}>{text}</span>
          </button>
        </div>
    );
});

 

export default Button;
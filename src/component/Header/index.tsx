import React ,{useState,useContext} from 'react';
import NavBar from '../Navbar';
import SearchBar from '../searchbar';
import ActionLogo from '../ActionLogo'
import './index.css';
import BAGLOGO from '../../Asset/bag.svg';
import WISHLISTLOGO from '../../Asset/personal.svg';
import PROFILELOGO from '../../Asset/wishlist.svg';
const BAG="BAG";
const PROFILE="PROFILE";
const WISHLIST="WISHLIST";
const Header=()=>{


    return(
        <div className='header-container'>
     <NavBar/>
     <SearchBar
      onSearch={()=>{}}
      />     

      <div className='action-container-logo'>
      <ActionLogo
       onClick={()=>{}}
       logo={BAGLOGO}
       title={BAG}
      /> 
     </div> 
     <div className='action-container-logo'>
      <ActionLogo
       onClick={()=>{}}
       logo={WISHLISTLOGO}
       title={WISHLIST}
      /> 
     </div> 
     <div className='action-container-logo'>
      <ActionLogo
       onClick={()=>{}}
       logo={PROFILELOGO}
       title={PROFILE}
      /> 
     </div>     
       </div>
        
    )
};

export  default Header;
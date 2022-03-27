import React ,{useState,useContext} from 'react';
import NavBar from '../Navbar';
import SearchBar from '../searchbar';
import ActionLogo from '../ActionLogo'
import './index.css';
import BAGLOGO from '../../Asset/bag.svg';
const BAG="BAG";
const Header=()=>{


    return(
        <div className='header-container'>
     <NavBar/>
     <SearchBar
      onSearch={()=>{}}
      />     

      <ActionLogo
       onClick={()=>{}}
       logo={BAGLOGO}
       title={BAG}
      />      
       </div>
        
    )
};

export  default Header;
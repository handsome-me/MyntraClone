import React ,{useState,useContext} from 'react';
import NavBar from '../Navbar';
import SearchBar from '../searchbar';


const Header=()=>{


    return(
        <div className='header-container'>
     <NavBar/>
     <SearchBar
      onSearch={()=>{}}
      />           
       </div>
    )
};

export  default Header;
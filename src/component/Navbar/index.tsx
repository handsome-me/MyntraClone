import React ,{useState,useContext} from 'react';
import './index.css'
const HOME="HOME";
const MEN="MEN";
const WOMEN="WOMEN";

 

  
   
const NavBar=()=>{

    return(

        <div className='navbar-container'>
            <ul className='navbar-ul'>
              <a href=''><li className='navbar-li'>{HOME}</li></a>
              <a href=''><li className='navbar-li'>{MEN}</li></a>
              <a href=''><li className='navbar-li'>{WOMEN}</li></a>
                 
            </ul>
        </div>

    )

}

export default NavBar;
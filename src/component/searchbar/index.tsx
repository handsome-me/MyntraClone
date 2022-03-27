import React ,{useState,useContext} from 'react';
import './index.css';

interface Props{
    onSearch:Function
}
const SearchBar=(props:Props)=>{
 
    const {onSearch}=props;

    return(

        <div className='search-bar-container'>
            <input type="text" className='search-bar-input'  placeholder='Search here'></input>
            <button onClick={()=>{onSearch()}}></button>
        </div>

    )

}

export default SearchBar;
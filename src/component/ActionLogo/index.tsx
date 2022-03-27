import React ,{useState,useContext, MouseEventHandler} from 'react';
import './index.css';


interface Props{
  
    logo:any,
    title:string,
    onClick:MouseEventHandler<HTMLAnchorElement>


}


const ActionLogo=(props:Props)=>{

    const {logo,title,onClick}=props;
  
    //logo will be svg

    return(
    <div className='action-container'>
     <a href='' onClick={onClick}>  
     <div className='action-logo-container defaultcss'>
        <img width={"100%"} height={"100%"} src={logo}></img>
     </div>
     <div className='action-title defaultcss'>{title}</div>
     </a>
    </div>
    )

}

export default ActionLogo;
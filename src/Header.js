import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';

const Header = (props) => {
    return (
        <nav className="navigation">
          <div className='original-page' onClick={()=>props.showCart(false)}>Return to original Page
          <div className="under"></div>
          </div>
          
          <span style={{width:"20px",height:"20px",position:"absolute",
          background:"tomato",transform:"translate(0,-100%)",
          right:"15px",zIndex:1,borderRadius:"50%",display:props.amount?"grid":"none",placeItems:"center"}}>{props.amount}</span>
          <FaShoppingCart size="3rem" className='fa-shopCart' onClick={()=>props.showCart(true)}/>   
        </nav>
      )
    
}

export default Header
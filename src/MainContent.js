import React from 'react'

const MainContent = (props) => {
    return(
        <div className="main-page">
          {props.List.map((item,index)=>{
  
        return(
        <div className="card" key={index}>
  
          <img src={item.productImage} alt="alternative"/>
          <section>
          <p>Name : {item.productName}</p>
          <h2>Price : {item.price}$</h2>
          </section>
  
          <button onClick={()=>{
            props.handleCheck(item.id)
            props.handleAdd(item.id)
            props.setAmount(p=>p+1)
          }} disabled={item.added?true:false}>{item.added===true?"added":"add to cart"}</button>
  
        </div>
        )}
       )}
       </div>
       )
}

export default MainContent
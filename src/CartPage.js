import React from 'react';
import {FaPlus,FaMinus} from 'react-icons/fa'


const CartPage = (props) => {
    const tot=props.addedItems.reduce((acc,curr)=>acc+curr.total,0);
  
  const handleDelete = (id)=>{
    props.removeItem(props.addedItems.filter(item=>item.id!==id))
  }

  const handleChange=(id)=>{
    props.setList(props.productList.map(item=>{
      if(item.id===id){
        return {...item,added:false}
      }
      return item
    })
    )
  }

  const handleIncrease=(id)=>{
    props.setAddedItems(props.addedItems.map(item=>{
      if(item.id===id){
        return {...item,amount:item.amount+1,total:(item.amount+1)*item.price}
      }
      return item
    })
    )
  }

  const handleDecrease=(id)=>{
    props.setAddedItems(props.addedItems.map(item=>{
      if(item.id===id){
        return {...item,amount:item.amount===1?item.amount:item.amount-1,total:(item.amount-1)*item.price}
      }
      return item
    })
    )
  }
  
  
  
  return (
    <div className="cart-content">
        <h1>Added Products</h1>
        <div className="product-container">
          {tot===0 && <h1 style={{fontStyle:"italic"}}>No Added Item</h1>}

        {props.addedItems.map((item,key)=>{
          return(<div key={key} className="product-content" >

            <div className="product">

             
            <img src={item.productImage} alt="alternative" />
            <div className="product-name">{item.productName}</div>

            <section className="increase-decrease">
            <button onClick={()=>handleIncrease(item.id)}>
            <FaPlus style={{color:"white"}} /></button>

            <span>{item.amount}</span>

            <button onClick={()=>handleDecrease(item.id)} disabled={item.amount===1?true:false}><FaMinus style={{color:"white"}} /></button>
            </section>

            <span className="total">Total price : {item.total}$</span>
            </div>

            <button onClick={()=>{
              handleDelete(item.id);
              handleChange(item.id);
              props.setAmount(p=>p-1);
            }
              } className="remove-button">Remove</button>
          </div>
          )
        })}
        </div>
        <h2>{tot===0?"":`Total : ${props.addedItems.reduce((acc,curr)=>acc+curr.total,0)}$`}</h2>
        {tot!==0 && <button className="purchase">Purchase All</button>}
    </div>
  )

}

export default CartPage
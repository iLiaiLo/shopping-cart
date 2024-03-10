import React from "react"; 
import List from "./ShoppingList.js"
import Header from "./Header.js";
import CartPage from "./CartPage.js";
import MainContent from "./MainContent.js";
import { useState} from "react";


function App() {
  const [showCart,setShowCart]=useState(false);
  const [list,setList]=useState(List);
  const [amount,setAmount]=useState(0);
  const [addItems,setAddItems]=useState([]);

  const handleCheck=(id)=>{
    setList(list.map(it=>{
      if(it.id===id){
        return {...it,added:true}
      }
      return it
    })
    )
  }
  const handleAdd=(id)=>{
    List.map(item=>{
      if(item.id===id){
        setAddItems(prew=>[...prew,item])
      }
      return item
    })
  }  

  return (
    <div className="whole-page">
      <Header showCart={(show)=>setShowCart(show)} amount={amount}/>

      {showCart?
      <CartPage addedItems={addItems} setAddedItems={setAddItems}
       productList={list} setList={setList}  removeItem={setAddItems} setAmount={setAmount} />:
      <MainContent handleAdd={handleAdd} handleCheck={handleCheck} List={list} setAmount={setAmount} />
    }
    </div>
  )

}

export default App;

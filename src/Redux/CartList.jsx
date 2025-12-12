import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllItems, RemoveItem } from './slice';
import { useNavigate } from 'react-router-dom';

export default function CartList () {
  const cartselector = useSelector((state) => state.cart.items)

const[cartItems,setCartItems]=useState(cartselector);
useEffect(()=>{
setCartItems(cartselector);
},[cartselector])
 const dispatch=useDispatch();
const navigate=useNavigate();
  const manageQuantity = (id, q) => {
let quantity=parseInt(q)>1?parseInt(q):1
  const cartTempItems=cartselector.map((item)=>{
    return item.id==id?{...item,quantity}:item
  })
 
  console.log(cartTempItems[0]);
  setCartItems(cartTempItems);
  }

  const handlePlaceOrder=()=>{
    localStorage.clear();
    dispatch(clearAllItems());
    alert("Order Placed");
    navigate("/")

  }
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart items</h2>
          <span>{cartselector.length} items</span>
        </div>

        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <h4>{item.brand}</h4>
                  </div>
                </div>

                <div className="item-actions">
                  <input
                    type="number"
                    placeholder="enter Quantity"
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                  />

                  <span className="price">
                    {item.quantity?item.price*item.quantity:item.price}</span>
                  <button  onClick={()=>dispatch(RemoveItem(item))} className="btn">Remove</button>
                </div>
              </div>
            ))
          : null}

        <div>
          Total: ${(cartItems.reduce((sum, item) =>item.quantity?sum + item.price*item.quantity:sum+item.price, 0)).toFixed(2)}

        </div>
        <button onClick={handlePlaceOrder} className="btn">Place Holder</button>
      </div>
    </>
  )
}

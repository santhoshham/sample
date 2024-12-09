import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../Context/StoreContext'
import { RxCross1 } from "react-icons/rx";

export default function Cart() {

    const { CarItems, food_list, removeFromCart } = useContext(StoreContext)

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-titles'>
                  <p>Items</p>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>
                </div>
                <br/>
                <hr/>
                {food_list.map((item, index)=>{
                   if(CarItems[item._id]>0){
                    return(
                        <>
                        <div className='cart-items-title cart-items-item'>
                           <img src={item.image} alt=''/>
                           <p>{item.name}</p>
                           <p>{item.price}</p>
                           <p>{CarItems[item._id]}</p>
                           <p>{item.price*CarItems[item._id]}</p>
                           <p><RxCross1 size={25}/></p>
                        </div>
                        <hr/>
                        </>
                    )
                   } 
                })}
            </div>
        </div>
    )
}
import React from 'react'
import './Fooditem.css'
import { IoStar , IoStarHalf } from "react-icons/io5";


function Fooditem ({id,name,price,description,image,rating}){
  const fullStars = Math.floor(rating); 
  const halfStar = rating % 1 !== 0; 
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-iem-img' src={image} />
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
               {/* <IoStar  color='red'/>
                <IoStar  color='red'/>
                <IoStar  color='red'/>
                <IoStar  color='red'/>
               <IoStarHalf color='red'/>
               */}
               <div className='food-item-rating'>
            {[Array(fullStars)].map((_, index) => (
              <IoStar key={index} color="red" />
            ))}
            {halfStar && <IoStarHalf color="red" />}
            {[Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
              <IoStar key={index + fullStars + (halfStar ? 1 : 0)} color="grey" />
            ))}
          </div>        
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditem
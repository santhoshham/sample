import React from 'react'
import './Fooditem.css'

function Fooditem ({id,name,price,description,image}){
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-iem-img' src={image} />
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <i className="fi fi-rr-Rating-free-icon" style={{fontSize: '23px'}} />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditem
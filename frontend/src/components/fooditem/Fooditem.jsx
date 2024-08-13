import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext'

const Fooditem = ({_id,name,price,description,image}) => {

    // const [itemCount,setItemCount] = useState(0)  // initial setting to count cart items
     const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
   <div className='food-item'>
    <div className='food-item-img-container'>
        <img src={url+"/images/"+image} className='food-item-image' alt="" />
        {!cartItems[_id]
           ?<img className='add' onClick={()=>addToCart(_id)} src={assets.add_icon_white}/>
           :<div className='food-item-counter'>
                 <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
                 <p>{cartItems[_id]}</p>
                 <img onClick={()=>addToCart(_id)} src={assets.add_icon_green} alt="" />
           </div>

        }
    </div>
    <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
    </div>

   </div>
  )
}

export default Fooditem
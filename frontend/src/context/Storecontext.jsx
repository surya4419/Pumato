import { createContext,useEffect,useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null) //new context to use throughout application

const StoreContextProvider = (props) =>{
   
  const [cartItems,setCartItems] = useState({});
    
  const addToCart = (itemId) =>{
    if (!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  
 


      const contextvalue = {
           food_list,    //we can access the food_list anywhere
           cartItems,
           setCartItems,
           addToCart,
           removeFromCart,
          

      }
      return(
        //provider component will wrap your application and provide value to all children
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
      )

}

export default StoreContextProvider;
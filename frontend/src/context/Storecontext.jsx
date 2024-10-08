import { createContext,useEffect,useState } from "react";
//import { food_list } from "../assets/assets";
import axios from "axios"


export const StoreContext = createContext(null) //new context to use throughout application

const StoreContextProvider = (props) =>{
   
  const [cartItems,setCartItems] = useState({});
  const url = "http://localhost:4000"
  const [token,setToken] = useState("")
  const [food_list,setFoodlist] = useState([])
    
  const addToCart = async (itemId) =>{
    if (!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  }
  

  const removeFromCart = async (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;

  }

  //foodlist from backend
  const fetchFoodlist = async ()=> {
    const response = await axios.get(url+"/api/food/list");
    setFoodlist(response.data.data)
  }

   const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
   }


  //stay logged in on refreshing
  useEffect(()=>{
    async function loadData() {
      await fetchFoodlist()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])
 


      const contextvalue = {
           food_list,    //we can access the food_list anywhere
           cartItems,
           setCartItems,
           addToCart,
           removeFromCart,
           getTotalCartAmount,
           url,
           token,
           setToken

      }
      return(
        //provider component will wrap your application and provide value to all children
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
      )

}

export default StoreContextProvider;
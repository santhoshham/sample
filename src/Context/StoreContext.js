import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/Images";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [CarItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!CarItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        console.log(CarItems);
    }, [CarItems])

    const contextValue = {
        food_list,
        CarItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [menuData, setMenuData] = useState([])
    useEffect(()=> {
        fetchMenuData()
        
    }, [])

    const fetchMenuData = async ()=> {
        let data = await fetch(MENU_URL+ `restaurantId=${resId}`)
        data = await data.json();

        console.log("Data",data)
        
        setMenuData(data)
        
    }
    return menuData

}

export default useRestaurantMenu

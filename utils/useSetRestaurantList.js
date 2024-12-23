import { useState } from "react";


const useSearchRestaurantList = (restaurant)=> {
    const [searchedRestaurant, setSearchedRestaurant] = useState([]);
    setSearchedRestaurant(restaurant)
    return searchedRestaurant
}


export default useSearchRestaurantList
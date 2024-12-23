import { useState, useEffect } from 'react'


const useRestaurant =()=> {
    let [restList, setListofRestaurant] = useState([]);
    let [originalRestaurantCard, setOriginalRestaurantCard] = useState([]);
    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async ()=> {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        
        data=await data.json();
        data = data.data.cards;
        data = data.filter((cardData=> {
            return cardData.card.card.info
        }));
        setListofRestaurant(data)
        setOriginalRestaurantCard(data)
    }

    return {restList, originalRestaurantCard}
}


export default useRestaurant
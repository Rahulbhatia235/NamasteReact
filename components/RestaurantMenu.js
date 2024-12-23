import { useEffect, useState } from "react"

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=> {
    
    const {resId} = useParams();
    const menuData = useRestaurantMenu(resId)
    
    if(menuData.length ===0 ) {
        return <Shimmer></Shimmer>
    }
    console.log("MenuData", menuData)
    let {text} = menuData.data.cards[0].card.card
    
    let menuCard = menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories
    return (
        <>
        <h1>{text}</h1>
        <div>
            {menuCard.map((menu) => (
               
               <h4>{menu.card.info.name}</h4>
               
            ))}
            

        </div>
        </>
    )
}

export default RestaurantMenu
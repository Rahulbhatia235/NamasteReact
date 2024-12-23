import { listofRestaurant } from "../utils/metaData"
import { Restaurant } from "./Restaurant"
//import { listofRestaurant } from "../utils/metaData"
import { useState, useEffect } from 'react'

import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
const Body = ()=> {
    let [restList, setListofRestaurant] = useState([])
    let [searchFilterText, setSearchFilterText] = useState([])
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
        }))
        console.log(data)
        
        setListofRestaurant(data)
        setOriginalRestaurantCard(data)
    }
    console.log(restList)
    return (restList.length === 0) ? (<Shimmer/>) :(
        <>
        <div>
            <input className="searchText" value={searchFilterText} onChange = {(e)=> {
                setSearchFilterText(e.target.value)
            }}></input>
            <button className="search_restaurant" onClick={()=> {
                console.log(originalRestaurantCard)
                console.log(searchFilterText)
                const searchedRestaurant = originalRestaurantCard.filter((restaurant)=> {
                    return restaurant.card.card.info.name.toLowerCase().includes(searchFilterText.toLowerCase())
                })
                setListofRestaurant(searchedRestaurant)
            }}>Search</button>
        </div>
        <div id="res-container" >
            <button className="filter-btn" onClick={()=>{
                const filteredRestaurnat = restList.filter((restaurant)=> {
                        return restaurant.card.card.info.avgRating > 4.3;             
                });
                setListofRestaurant(filteredRestaurnat)
                
            }}>View Top Rated Restaurant</button>
            <div id = "restaurant" className="restaurant">
                
                {restList.map((restaurant)=> (
                    
                  <Link to={"/restaurant/"+ restaurant.card.card.info.id  } key={restaurant.card.card.info.id}><Restaurant  resName={restaurant.card.card.info.name} stars={restaurant.card.card.info.avgRating} deliveryTime={restaurant.card.card.info.sla.deliveryTime}/></Link>  
                 
                ))}
            </div>
            

        </div>
        </>
        
    )
}

export default Body
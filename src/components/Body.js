import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    return (
       <div className="body">
           <div className="search">Search</div>

           <div className="res-container">

               {resList.map((restaurant) => (
                   <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
               ))}
           </div>
       </div>
    )
}
export default Body;
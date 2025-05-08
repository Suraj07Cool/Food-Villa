import apiResponse from "../apiResponse.json";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState();
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          value={searchInput}
          onChange={e=>setSearchInput(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {apiResponse.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

import apiResponse from "../apiResponse.json";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerLoader from "./Shimmer";

const filterData = (searchText, restaurantList) => {
  const filterRestaurant = restaurantList.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  console.log(filterRestaurant, "<<<<");
  return filterRestaurant;
};

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurant, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    setTimeout(() => {
      setAllRestaurants(apiResponse);
      setFilteredRestaurants(apiResponse);
      setIsLoading(false);
    }, 1000);
  }
  if(isLoading || isFiltering) return <ShimmerLoader />;
  return  (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            setIsFiltering(true);
            setTimeout(() => {
              const filtered = filterData(searchInput, allRestaurants);
              setFilteredRestaurants(filtered);
              setIsFiltering(false);
            }, 1000);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {console.log(filterRestaurant, "<<<<<<<<<<<<")}
        {filterRestaurant.length === 0 ? (
          <h1>No data found with filter!!</h1>
        ) : (
          filterRestaurant.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;

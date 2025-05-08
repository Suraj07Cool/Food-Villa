import {IMG_CDN_URL} from "../constants";

//restaurant card
const RestaurantCard = ({
    name,
    cuisines,
    locality,
    avgRating,
    cloudinaryImageId,
  }) => {
    return (
      <>
        <div className="card">
          <img
            alt="logo"
            src={IMG_CDN_URL+cloudinaryImageId}
          />
          <h2>{name}</h2>
          {Array.isArray(cuisines) && cuisines.length > 0 && (
            <h3>{cuisines.join(", ")}</h3>
          )} 
          <h3>{locality}</h3>
          <h4>{avgRating} start</h4>
        </div>
      </>
    );
  };

export default RestaurantCard;
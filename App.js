import React from "react";
import ReactDOM from "react-dom/client";
import apiResponse from "../apiResponse.json";

// const heading = React.createElement("h1", { id: "title" ,key:"h1"}, "heading1");
// const heading2 = React.createElement("h1", { id: "suraj" , key:"h2"}, "heading1");

// const container= React.createElement("div",{id:"container"},[heading,heading2])

//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/4/89f0bef9-5816-432b-b770-75718df915bf_324540.jpg
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

//let make functional component
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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
const Body = () => {
  return (
    <div className="restaurant-list">
      {apiResponse.map((restaurant) => {
        console.log(restaurant.info.id);
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>footer</h4>;
};
// const Header = () => (
const AppLayout = () => {
  return (
    <>
      <Header />

      <Body />

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)

root.render(<AppLayout />);

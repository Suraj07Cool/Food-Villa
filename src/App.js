import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";



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

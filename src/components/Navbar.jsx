import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; //to get data from store
const Navbar = () => {
  // we are subscribing a state, which means that whenever there is any chnge in the state value, we will directly get the updated value without requesting. We pass a function in useSelector where we specify which data we are subscribing
  const items = useSelector((state) => state.cart); // here the state is actual state of app and not the sliced state.
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">Redux Store</span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart items : {items.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  // we write useEfect to fetch the products from api , it is a async fuction
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products"); // it returns data in the form of string
    //   const data = await res.json(); // convert it into json
    //   console.log(data);
    //   setProducts(data);
    // };

    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    // We need to store the product in redux store, for that we dispatch the acion which goes and calls the reducer in our slice and change the state.
    dispatch(add(product)); // we are sending payload in the form of product that we are getting from listener.
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong....</h2>;
  }

  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

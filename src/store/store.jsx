//configure the store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// similart to creating a slice,  pass an object in this method as well.
const store = configureStore({
  // pass a parameter reducer , in slice it was reducers. with a 's'
  reducer: {
    // give the name of the reducer, it is the same reducer which is exported from the respective slice.
    cart: cartReducer,
    product: productReducer,
  },
});

//export tje store
export default store;

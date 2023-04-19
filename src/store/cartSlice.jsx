// using slice we can organise our store data in small pieces

import { createSlice } from "@reduxjs/toolkit";

//  create the slice using createSlice method provided by toolkit. this function takes on object which contains parameters such as name, initialState, and reducers. in reducers we declare different functions which help us to manage the state of our app.

const cartSlice = createSlice({
  name: "cart",
  initialState: [], // decalre the initialState
  reducers: {
    // redux says that we cannot directly ,mutate the orignal array so we used to return a copied state and then used to add the action.payload to it, but here we do not need to do so because here we are using createSlice method which is internally doing the same job for us.
    add(state, action) {
      state.push(action.payload); //  we are directly pushon the state in our initial array.
    }, // these are pure functions -> do not affect the data outside these functions. they accept 2 params state and action
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload); // we filter the array and  get the item and check if the item's id does not match the ation.payload id then we keep it and the one which matches we remove it.
    },
  },
});

// export the functions
export const { add, remove } = cartSlice.actions; // we can get the functions from the action property of the slice method.

//export the reducer
export default cartSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// declaring an object similar to enum
// using object.freeze so that it becomes immutable
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [], //list of products
    status: STATUSES.IDLE,
  }, // decalre the initialState , for products it will be an object to store complete info
  reducers: {
    // setProducts(state, action) {
    //   //***DO NOT USE THIS**/
    //   //  const res = await fetch("https://fakestoreapi.com/products");
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.data = action.payload), (state.status = STATUSES.IDLE);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// export the functions
export const { setProducts, setStatus } = productSlice.actions; // we can get the functions from the action property of the slice method.

//export the reducer
export default productSlice.reducer;

//Thunks
// it is a function which returns a new asynchronous function

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products"); // it returns data in the form of string
  const data = await res.json();

  return data;
});
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       // get the data from api
//       const res = await fetch("https://fakestoreapi.com/products"); // it returns data in the form of string
//       const data = await res.json();
//       // use dispatch to dispatch the action
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],// it indicates the array of products in the cart
    quantity: 0,// it indicates the total quantity of products in the cart
    total: 0,// it indicates the total price of products in the cart
  },
  reducers: {
    addProduct: (state, action) => {
      //state here the previous state of the cart
      state.quantity += 1; //increase the quantity by 1 as one product is added
      state.products.push(action.payload); //add the product to the cart products array
      state.total += action.payload.price * action.payload.quantity;//add the price of the product to the total price
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

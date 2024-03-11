import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Productslice";
import CartReducer from "./Cartslice";

export const Productstore = configureStore({
    reducer: {
        proReducer: ProductReducer,
        cart: CartReducer
    }
})
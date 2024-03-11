// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        removeCart: (state, action) => {
            const { id } = action.payload;
           state.items = state.items.filter((product) => product.id !== id);
        },

        // Define other cart actions as needed
    },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

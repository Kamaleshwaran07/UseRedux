import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useSelector } from "react-redux";

function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) return i;
    }
    return -1
}


const Productslice = createSlice({

    name: 'product',
    initialState: {
        data: [],
       
        status: 'idle',
        error: null
    },
    reducers: {
        // saveAllBlogs: (state, action) => {
        //     return action.payload
        // },
        fetchProductStart: (state) => {
            state.status = 'loading'
        },
        fetchProductSuccess: (state, action) => {
            state.status = 'success',
                state.data = action.payload
        },
        fetchProductFailure: (state, action) => {
            state.status = "failed",
                state.error = action.payload
        },
        increaseCart: (state, action) => {
            let { id } = action.payload;
            let index = findIndex(state.data, id)
            if (index != -1) {
                state.data[index].quantity = (state.data[index].quantity || 0) + 1;
            }


        },
        decreaseCart: (state, action) => {
            let { id } = action.payload;
            let index = findIndex(state.data, id)
            if (index != -1 && state.data[index].quantity > 0) {
                state.data[index].quantity = (state.data[index].quantity || 0) - 1;
            }


        },
        
        

    },
})
export const { fetchProductStart, fetchProductSuccess, fetchProductFailure, increaseCart, decreaseCart} = Productslice.actions;
export const fetchProduct = () => async (dispatch) => {

    dispatch(fetchProductStart())
    try {
        const res = await axios.get("https://65da9e60bcc50200fcdd0bf7.mockapi.io/Products/")
        dispatch(fetchProductSuccess(res.data))
    } catch (error) {
        dispatch(fetchProductFailure(error.message))

    }



}

export default Productslice.reducer;
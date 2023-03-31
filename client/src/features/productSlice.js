import { createSlice } from "@reduxjs/toolkit";
import thriftApi from "../services/thriftApi";

const initialState = [];

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateProducts: (_, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(thriftApi.endpoints.postproduct.matchFulfilled, (_, { payload }) => payload);
      
    },
   
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
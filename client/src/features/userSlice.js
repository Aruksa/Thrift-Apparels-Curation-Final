import { createSlice } from "@reduxjs/toolkit";
import thriftApi from "../services/thriftApi";


const initialState = null;

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        logout: () => initialState,
    },
    extraReducers:(builder)=> {
        builder.addMatcher(thriftApi.endpoints.log.matchFulfilled, (_, {payload})=>payload);
        builder.addMatcher(thriftApi.endpoints.reg.matchFulfilled, (_, {payload})=>payload);
        builder.addMatcher(thriftApi.endpoints.addToCart.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(thriftApi.endpoints.removeFromCart.matchFulfilled, (_, { payload }) => payload);
    }
});
export const{logout}=userSlice.actions;
export default userSlice.reducer;

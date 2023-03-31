import { createSlice } from "@reduxjs/toolkit";
import thriftApi from "../services/thriftApi";


const initialState = null;

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {},
    extraReducers:(builder)=> {
        builder.addMatcher(thriftApi.endpoints.log.matchFulfilled, (_, {payload})=>payload);
        builder.addMatcher(thriftApi.endpoints.reg.matchFulfilled, (_, {payload})=>payload);
    }
});

export default userSlice.reducer;

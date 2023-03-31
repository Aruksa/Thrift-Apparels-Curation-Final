import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
import thriftApi from "./services/thriftApi";


import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducer = combineReducers({
    user: userSlice,
    product: productSlice,
    [thriftApi.reducerPath]: thriftApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [thriftApi.reducerPath, "product"],
};


const persistedReducer = persistReducer(persistConfig, reducer);



const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, thriftApi.middleware],
});

export default store;
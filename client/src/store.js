import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import thunk from "redux-thunk";
import userSlice from "./features/userSlice";
import thriftApi from "./services/thriftApi";
import { combineReducers } from "redux";


import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore} from "redux-persist";



const persistConfig = {
    key: "root",
    storage,
};

const final_reducer = combineReducers({
    user: userSlice,
    products: productSlice,
    [thriftApi.reducerPath]: thriftApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, final_reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, thriftApi.middleware],
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
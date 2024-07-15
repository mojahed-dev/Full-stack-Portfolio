import rootSlice from "./rootSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// Combine multiple reducers (only one here) into a single root reducer
const reducer =  combineReducers({
    root: rootSlice,
});


// Configure and create the Redux store with the root reducer
const store = configureStore({
    reducer,
});

export default store;
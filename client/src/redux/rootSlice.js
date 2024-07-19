import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the state with name 'root', initial state, and reducers
const rootSlice = createSlice({
    name: 'root', // Name of the slice
    initialState: {
        loading: false, // Initial state for loading
        portfolioData: null, // Initial state for portfolio data
        reloadData: false
    },
    reducers: {
        Showloading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        SetPortfolioData:  (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) => {
            state.reloadData = action.payload;
        }
    }
});


export default rootSlice.reducer;

export const { Showloading, HideLoading, SetPortfolioData, ReloadData } = rootSlice.actions;
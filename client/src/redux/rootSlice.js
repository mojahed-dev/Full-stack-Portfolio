import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        portfolioData: null
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
        }
    }
});


export default rootSlice.reducer;

export const { Showloading, HideLoading, SetPortfolioData } = rootSlice.actions;
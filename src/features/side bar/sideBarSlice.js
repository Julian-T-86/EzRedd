import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPopularSubreddits = createAsyncThunk(
    'subreddits/fetchPopular',
    async () => {
        const response = await axios.get(`https://www.reddit.com/subreddits/popular.json?limit=10`);
        return response.data.data.children.map(subreddit => subreddit.data.display_name);
    }
);

const sideBarSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularSubreddits.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularSubreddits.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.subreddits = action.payload;
            })
            .addCase(fetchPopularSubreddits.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default sideBarSlice.reducer;

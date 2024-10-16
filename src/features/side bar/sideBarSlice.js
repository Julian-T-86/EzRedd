import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Fuse from 'fuse.js';

export const fetchPopularSubreddits = createAsyncThunk(
    'subreddits/fetchPopular',
    async () => {
        const response = await axios.get(`https://www.reddit.com/subreddits/popular.json?limit=20`);
        return response.data.data.children.map(subreddit => subreddit.data.display_name);
    }
);

export const fetchFilteredSubreddits = createAsyncThunk(
    'subreddits/fetchFiltered',
    async (searchTerm) => {
        const response = await axios.get(`https://www.reddit.com/subreddits/search.json?q=${searchTerm}&limit=20`);
        return response.data.data.children.map(subreddit => subreddit.data.display_name);
    }
);

const sideBarSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        filteredSubreddits: [],
        topSubreddits: [],
        status: 'idle',
        error: null
    },
    reducers: {
        filterSubreddits: (state, action) => {
            // This might be redundant since fetchFilteredSubreddits does the job
            const fuse = new Fuse(state.subreddits, { keys: ['display_name'], threshold: 0.3 });
            const results = fuse.search(action.payload);
            state.filteredSubreddits = results.map(result => result.item.display_name);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularSubreddits.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularSubreddits.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.subreddits = action.payload;
                state.topSubreddits = action.payload; // Store top 20 subreddits separately
            })
            .addCase(fetchPopularSubreddits.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchFilteredSubreddits.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFilteredSubreddits.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.filteredSubreddits = action.payload;
            })
            .addCase(fetchFilteredSubreddits.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { filterSubreddits } = sideBarSlice.actions;
export default sideBarSlice.reducer;

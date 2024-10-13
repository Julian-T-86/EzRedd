import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRedditPosts = createAsyncThunk(
  'reddit/fetchPosts',
  async (subreddit) => {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}/top.json?limit=10`);
    return response.data.data.children.map(post => post.data);
  }
);

const postsSlice = createSlice({
  name: 'reddit',
  initialState: {
    posts: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRedditPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchRedditPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default postsSlice.reducer;

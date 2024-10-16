import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Fuse from 'fuse.js';

export const fetchRedditPosts = createAsyncThunk(
    'reddit/fetchPosts',
    async (subreddit) => {
        const response = await axios.get(`https://www.reddit.com/r/${subreddit}/top.json?limit=10`);
        return { posts: response.data.data.children.map(post => post.data), subreddit };
    }
);

const postsSlice = createSlice({
  name: 'reddit',
  initialState: {
      posts: [],
      allPosts: {},
      status: 'idle',
      error: null,
      searchTerm: ''
  },
  reducers: {
      setSearchTerm: (state, action) => {
          state.searchTerm = action.payload;
      },
      filterPosts: (state, action) => {
          const options = {
              keys: ['title', 'selftext'], 
              threshold: 0.4 
          };
          const fuse = new Fuse(state.allPosts[state.currentSubreddit] || [], options);
          const results = fuse.search(action.payload);
          state.posts = results.map(result => result.item);
      }
  },
  extraReducers: (builder) => {
      builder
          .addCase(fetchRedditPosts.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(fetchRedditPosts.fulfilled, (state, action) => {
              state.status = 'succeeded';
              const { posts, subreddit } = action.payload;
              state.posts = posts;
              state.currentSubreddit = subreddit;
              state.allPosts[subreddit] = posts;
          })
          .addCase(fetchRedditPosts.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
          });
  }
});

export const { setSearchTerm, filterPosts } = postsSlice.actions;
export default postsSlice.reducer;
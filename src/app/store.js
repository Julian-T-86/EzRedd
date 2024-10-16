import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subRedditsReducer from '../features/side bar/sideBarSlice'


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subRedditsReducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
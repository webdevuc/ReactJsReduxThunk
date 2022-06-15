import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../action/postsSlice';
import usersReducer from '../action/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

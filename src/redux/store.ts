import {configureStore} from '@reduxjs/toolkit';

import {default as accountsReducer} from './reducers/accountsSlice';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

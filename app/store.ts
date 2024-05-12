import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchResultsSlice';
import searchResultsReducer from './features/searchResultsSlice';
import { githubApi } from './services/github';

const store = configureStore({
  reducer: {
    search: searchReducer,
    searchResults: searchResultsReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

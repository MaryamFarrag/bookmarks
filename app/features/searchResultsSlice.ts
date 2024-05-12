import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Repo {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
}

interface SearchResultsState {
  repos: Repo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchResultsState = {
  repos: [],
  isLoading: false,
  error: null,
};

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<Repo[]>) => {
      state.repos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setSearchResults, setLoading, setError } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;

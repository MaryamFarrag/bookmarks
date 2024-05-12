import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Repo {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
}

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/repositories' }),
  endpoints: (builder) => ({
    searchRepos: builder.query<Repo[], {searchTerm: string; page: number}>({
      query: (params) => `?q=${params.searchTerm}&per_page=10&page=${params.page}`,
    }),
  }),
});

export const { useSearchReposQuery } = githubApi;

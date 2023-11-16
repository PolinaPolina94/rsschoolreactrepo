import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Item } from '../types';

type API = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Item[];
};

export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (build) => ({
    fetchAllItems: build.query({
      query: (name: string = '') => ({
        url: '/',
        params: {
          name: name,
        },
      }),
      transformResponse: (response: API) => {
        const data = response.results;
        return {
          data: data,
        };
      },
    }),
    // fetchSearchItems: build.query({
    //   query: (name: string = '') => ({
    //     url: '/',
    //     params: {
    //       name: name,
    //     },
    //   }),
    //   transformResponse: (response: API) => {
    //     const data = response.results;
    //     return {
    //       data,
    //     };
    //   },
    // }),
  }),
});

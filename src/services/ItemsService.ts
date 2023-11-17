import { Item } from './../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

type API = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Item[];
};

type Transform = {
  data: Item[];
};

export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  endpoints: (build) => ({
    fetchAllItems: build.query<Transform, number | string | undefined>({
      query: (page: number = 1) => {
        const personName = localStorage.getItem('personName');
        return `?page=${page}&name=${personName}`;
      },
      transformResponse: (response: API) => {
        const data = response.results;
        return {
          data: data,
        };
      },
    }),
  }),
});

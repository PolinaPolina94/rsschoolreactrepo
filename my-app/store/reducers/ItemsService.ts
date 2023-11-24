import { HYDRATE } from 'next-redux-wrapper';
import { Item } from '../../types/types';
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
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    fetchAllItems: builder.query<Transform, string | undefined>({
      query: (name: string = '') => {
        // const personName = localStorage.getItem('personName');
        return `character/?page=1&name=${name}`;
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

export const {
  useFetchAllItemsQuery,
  util: { getRunningQueriesThunk },
} = itemsAPI;

// export endpoints for use in SSR
export const { fetchAllItems } = itemsAPI.endpoints;

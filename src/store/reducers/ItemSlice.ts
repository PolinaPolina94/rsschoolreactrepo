import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, State } from '../../types';

const initialState: State = {
  isLoaded: false,
  items: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    itemsFetching(state) {
      state.isLoaded = true;
    },
    itemsFetchingSuccess(state, action: PayloadAction<Item[]>) {
      state.isLoaded = false;
      state.error = '';
      state.items = action.payload;
    },
    // itemsFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoaded = false;
    //   state.error = action.payload;
    // },
  },
});

export default itemSlice.reducer;

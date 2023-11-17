import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, StateRedux } from '../../types';
import { fetchItems } from './ActionCreators';

const initialState: StateRedux = {
  isLoaded: false,
  items: [],
  person: '',
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    personNameReduser(state, action: PayloadAction<string>) {
      state.person = action.payload;
    },
    personItemsReduser(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending.type]: (state) => {
      state.isLoaded = true;
    },
    [fetchItems.fulfilled.type]: (state, action: PayloadAction<Item[]>) => {
      state.isLoaded = false;
      state.error = '';
      state.items = action.payload;
    },
    [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoaded = false;
      state.error = action.payload;
    },
  },
});

export default itemSlice.reducer;

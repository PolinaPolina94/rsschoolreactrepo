import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, StateRedux } from '../../types/types';

const initialState: StateRedux = {
  isLoadedPage: false,
  isLoadedDetail: false,
  items: [],
  person: '',
  countItems: 20,
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
    loadedReduserPage(state, action: PayloadAction<boolean>) {
      state.isLoadedPage = action.payload;
    },
    loadedReduserDetails(state, action: PayloadAction<boolean>) {
      state.isLoadedDetail = action.payload;
    },
    itemsCountReducer(state, action: PayloadAction<number>) {
      state.countItems = action.payload;
    },
  },
});

export default itemSlice.reducer;

// import { fetchItems } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, StateRedux } from '../../types';

const initialState: StateRedux = {
  isLoadedPage: false,
  isLoadedDetail: false,
  items: [],
  person: '',
  countItems: 10,
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
  // ******************** DON'T LOOK AT THIS COMMENT CODE, I REALLY NEED IT :)  THANKS ***********************

  // extraReducers: {
  //   [fetchItems.pending.type]: (state) => {
  //     state.isLoadedPage = true;
  //   },
  //   [fetchItems.fulfilled.type]: (state, action: PayloadAction<Item[]>) => {
  //     state.isLoadedPage = false;
  //     state.error = '';
  //     state.items = action.payload;
  //   },
  //   [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoadedPage = false;
  //     state.error = action.payload;
  //   },
  // },
});

export default itemSlice.reducer;

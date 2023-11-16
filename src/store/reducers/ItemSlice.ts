// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Item, State } from '../../types';
// import { fetchItems } from './ActionCreators';

// const initialState: State = {
//   isLoaded: false,
//   items: [],
// };

// export const itemSlice = createSlice({
//   name: 'item',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchItems.pending.type]: (state) => {
//       state.isLoaded = true;
//     },
//     [fetchItems.fulfilled.type]: (state, action: PayloadAction<Item[]>) => {
//       state.isLoaded = false;
//       state.error = '';
//       state.items = action.payload;
//     },
//     [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
//       state.isLoaded = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default itemSlice.reducer;

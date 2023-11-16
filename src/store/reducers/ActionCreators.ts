// import { Item } from '../../types';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchItems = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
//   try {
//     const responce: Item[] = await fetch(`https://rickandmortyapi.com/api/character/?page=1`)
//       .then((res) => res.json())
//       .then((result) => result.results);
//     return responce;
//   } catch (e) {
//     return thunkAPI.rejectWithValue('something went wrong');
//   }
// });

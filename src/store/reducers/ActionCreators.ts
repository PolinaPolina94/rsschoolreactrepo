import { Item } from '../../types';
import { AppDispatch } from '../store';
import { itemSlice } from './ItemSlice';

export const fetchItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemSlice.actions.itemsFetching());
    const responce: Item[] = await fetch(`https://rickandmortyapi.com/api/character/?page=1`)
      .then((res) => res.json())
      .then((result) => result.results);
    dispatch(itemSlice.actions.itemsFetchingSuccess(responce));
  } catch (e) {
    console.log('error');
    // dispatch(itemSlice.actions.itemsFetchingError(e));
  }
};

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/ItemSlice';
import { itemsAPI } from '../services/ItemsService';

const rootReducer = combineReducers({
  itemReducer,
  [itemsAPI.reducerPath]: itemsAPI.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsAPI.middleware),
  });
};

export default setupStore;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

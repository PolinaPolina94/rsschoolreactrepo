import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSliceForm1 from "./reducers/UserSliceForm1";
import UserSliceForm2 from "./reducers/UserSliceForm2";

const rootReducer = combineReducers({ UserSliceForm1, UserSliceForm2 });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

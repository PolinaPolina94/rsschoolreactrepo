import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IUser = {
  name: string;
  age: number | null;
  email: string;
  password1: string;
  password2: string;
  sex: string;
  acception: boolean;
  photo: string | undefined;
  countries: string[];
};

const initialState: IUser = {
  name: "",
  age: null,
  email: "",
  password1: "",
  password2: "",
  sex: "",
  acception: true,
  photo: "",
  countries: [],
};

export const UserSliceForm2 = createSlice({
  name: "userinfo1",
  initialState,
  reducers: {
    username2(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    userage2(state, action: PayloadAction<number | null>) {
      state.age = action.payload;
    },
    useremail2(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    userpassword11(state, action: PayloadAction<string>) {
      state.password1 = action.payload;
    },
    userpassword22(state, action: PayloadAction<string>) {
      state.password2 = action.payload;
    },
    usersex2(state, action: PayloadAction<string>) {
      state.sex = action.payload;
    },
    useracception2(state, action: PayloadAction<boolean>) {
      state.acception = action.payload;
    },
    userphoto2(state, action: PayloadAction<string>) {
      state.photo = action.payload;
    },
    usercountries2(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export default UserSliceForm2.reducer;

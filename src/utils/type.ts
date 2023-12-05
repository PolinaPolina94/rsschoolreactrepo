export type Inputs = {
  name: string;
  age: number;
  email: string;
  password1: string;
  password2: string;
  sex: string;
  photo: object;
  country: string;
  checkbox: boolean;
};

export type ErrorMessages =
  | "name"
  | "age"
  | "email"
  | "password1"
  | "password2"
  | "country"
  | "sex"
  | "checkbox"
  | "photo";

import { Dispatch, SetStateAction, createContext } from 'react';
import { InputValue } from '../../types';

export type InputContextApp = {
  state: InputValue | null;
  setValue: Dispatch<SetStateAction<InputValue | null>>;
};

const obj = {
  state: {
    value: '',
  },
  setValue: (): void => {},
};

export const InputContext = createContext<InputContextApp>(obj);

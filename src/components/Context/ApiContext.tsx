import { createContext } from 'react';
import { State } from '../../types';

export type ApiContextApp = {
  state: State | null;
  setState: React.Dispatch<React.SetStateAction<State | null>>;
};

const objectState = {
  state: {
    isLoaded: false,
    items: [],
  },
  setState: (): void => {},
};

export const ApiContext = createContext<ApiContextApp>(objectState);

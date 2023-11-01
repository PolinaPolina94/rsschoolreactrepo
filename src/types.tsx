import { ReactNode } from 'react';

export type Item = {
  id?: number;
  name: string;
  image: string;
  species: string;
  type: string;
  gender: string;
  planet: string;
  origin?: {
    name: string;
    url: string;
  };
};

export type State = {
  error: null;
  isLoaded: boolean;
  items: Item[];
};

export type InputValue = {
  value: string;
};

export interface Props {
  children?: ReactNode;
}

export interface HasState {
  hasError: boolean;
}

import { ReactNode } from 'react';

export type Item = {
  id: number;
  name: string;
  image: string;
  status?: string;
  species: string;
  type: string;
  gender: string;
  planet: string;
  created?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
};

export type StateForPerson = {
  isLoaded?: boolean;
  items: Item[];
  setState: React.Dispatch<React.SetStateAction<State | null>>;
};

export type State = {
  error?: string;
  isLoaded: boolean;
  items: Item[];
};

export type StateRedux = {
  error?: string;
  isLoadedPage: boolean;
  isLoadedDetail: boolean;
  items: Item[];
  person: string;
  countItems: number;
};

export type Data = {
  data: Item[];
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

export interface UsePaginationProps {
  contentPerPage: number;
  count: number | null;
}
export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}
export type UsePagination = (arg0: UsePaginationProps) => UsePaginationReturn;

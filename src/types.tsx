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
  error?: null;
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

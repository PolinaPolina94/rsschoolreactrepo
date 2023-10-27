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

import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ListItems from '../components/main-page/ListItems';

jest.mock('react-redux');

describe('CardList tests', () => {
  const objectState = {
    items: [
      {
        id: 1,
        name: 'Johnny Depp',
        image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        planet: 'Earth',
        created: '2017-12-29T18:51:29.693Z',
        origin: {
          name: 'Earth (C-500A)',
          url: 'https://rickandmortyapi.com/api/location/23',
        },
        location: {
          name: 'Earth (C-500A)',
          url: 'https://rickandmortyapi.com/api/location/23',
        },
      },
      {
        id: 183,
        name: 'Luiza',
        image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        planet: 'Earth',
        created: '2017-12-29T18:51:29.693Z',
        origin: {
          name: 'Earth (C-500A)',
          url: 'https://rickandmortyapi.com/api/location/23',
        },
        location: {
          name: 'Earth (C-500A)',
          url: 'https://rickandmortyapi.com/api/location/23',
        },
      },
    ],
  };
  it('render 2 cards in the List', async () => {
    render(
      <BrowserRouter>
        <ListItems items={objectState.items} />;
      </BrowserRouter>
    );
    expect(screen.getByText(/Johnny Depp/)).toBeInTheDocument();
    expect(screen.getByText(/Luiza/)).toBeInTheDocument();
  });
  it('show `no such persons` without cards', () => {
    render(
      <BrowserRouter>
        <ListItems items={[]} />;
      </BrowserRouter>
    );
    expect(screen.getByText(/no such person/)).toBeInTheDocument();
  });
});

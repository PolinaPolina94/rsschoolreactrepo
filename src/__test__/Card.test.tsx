import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListItems from '../components/main-page/ListItems';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Card tests', () => {
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
  it('Card shows right datas', async () => {
    render(
      <BrowserRouter>
        <ListItems items={objectState.items} />;
      </BrowserRouter>
    );
    expect(screen.getByText('Luiza'));
    expect(screen.getByText('Johnny Depp'));
    expect(screen.getAllByRole('img'));
    expect(screen.getAllByAltText(/person name/));
  });
  it('Render cards', async () => {
    render(
      <BrowserRouter>
        <ListItems items={objectState.items} />;
      </BrowserRouter>
    );
    expect(screen.getByText('Luiza')).toBeInTheDocument();
    expect(screen.getByText('Johnny Depp')).toBeInTheDocument();
  });
  it('Click for card show it details', async () => {
    render(
      <BrowserRouter>
        <ListItems items={objectState.items} />;
      </BrowserRouter>
    );
    expect(screen.getAllByRole('img'));
    waitFor(() => {
      fireEvent.click(screen.getAllByRole('link')[0]);
      expect(screen.getByRole('person')).toBeInTheDocument();
    });
  });
  it('Click for card triggers API', async () => {
    render(
      <BrowserRouter>
        <ListItems items={objectState.items} />;
      </BrowserRouter>
    );
    expect(screen.getAllByRole('img'));
    waitFor(() => {
      fireEvent.click(screen.getAllByRole('link')[0]);
      expect(mockedDispatch.mockReturnValue(jest.fn()));
      expect(screen.getByRole('person')).toBeInTheDocument();
    });
  });
});

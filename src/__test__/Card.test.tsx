import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListItems from '../components/main-page/ListItems';
import { ApiContext } from '../components/Context/ApiContext';
import MainPage from '../components/main-page/MainPage';
import fetchMock from 'jest-fetch-mock';

describe('Card tests', () => {
  it('Close the window with click', async () => {
    fetchMock.mockResponse(JSON.stringify({ data: 'mock data' }));
    const state = {
      isLoaded: true,
      items: [],
      setState: () => {},
    };
    const setState = () => {};
    render(
      <BrowserRouter>
        <ApiContext.Provider value={{ state, setState }}>
          <MainPage />
        </ApiContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('main'));
    expect(screen.getByRole('itemsonpage'));
    waitFor(() => {
      fireEvent.click(screen.getByRole('itemsonpage'));
      expect(screen.getByRole('person')).not.toBeInTheDocument();
    });
  });
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
    expect(screen.getAllByRole('link'));
    fireEvent.click(screen.getByText('Johnny Depp'));
  });
});

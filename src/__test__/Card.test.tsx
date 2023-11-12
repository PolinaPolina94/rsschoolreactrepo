import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListItems from '../components/main-page/ListItems';

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

// expect(window.location.search).toBe('');
// await waitFor(() => {
//   fireEvent.click(screen.getByText('2'));
//   expect(window.location.search).toBe('/page/2');
// });

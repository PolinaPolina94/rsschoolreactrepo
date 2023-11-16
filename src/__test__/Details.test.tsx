// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Person from '../components/Person/Person';
// import fetchMock from 'jest-fetch-mock';
// import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// import ListItems from '../components/main-page/ListItems';

// describe('Details card tests', () => {
//   const objectState = {
//     items: [
//       {
//         id: 1,
//         name: 'Johnny Depp',
//         image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
//         status: 'Alive',
//         species: 'Human',
//         type: '',
//         gender: 'Male',
//         planet: 'Earth',
//         created: '2017-12-29T18:51:29.693Z',
//         origin: {
//           name: 'Earth (C-500A)',
//           url: 'https://rickandmortyapi.com/api/location/23',
//         },
//         location: {
//           name: 'Earth (C-500A)',
//           url: 'https://rickandmortyapi.com/api/location/23',
//         },
//       },
//       {
//         id: 183,
//         name: 'Luiza',
//         image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
//         status: 'Alive',
//         species: 'Human',
//         type: '',
//         gender: 'Male',
//         planet: 'Earth',
//         created: '2017-12-29T18:51:29.693Z',
//         origin: {
//           name: 'Earth (C-500A)',
//           url: 'https://rickandmortyapi.com/api/location/23',
//         },
//         location: {
//           name: 'Earth (C-500A)',
//           url: 'https://rickandmortyapi.com/api/location/23',
//         },
//       },
//     ],
//   };
//   it('Render detail card with loader and with fetching', async () => {
//     fetchMock.mockResponse(JSON.stringify({ data: 'mock data' }));
//     render(
//       <MemoryRouter initialEntries={['/details/1']}>
//         <Person />
//       </MemoryRouter>
//     );
//     expect(screen.getByRole('loader')).toBeInTheDocument();
//   });
//   it('Show card list', async () => {
//     fetchMock.mockResponse(JSON.stringify({ data: 'mock data' }));
//     render(
//       <BrowserRouter>
//         <ListItems items={objectState.items} />;
//       </BrowserRouter>
//     );
//     waitFor(() => {
//       expect(screen.getAllByAltText('person name')[0]).toBeInTheDocument();
//     });
//     waitFor(() => {
//       fireEvent.click(screen.getAllByAltText('person name')[0]);
//     });
//     expect(screen.getByText('Johnny Depp')).toBeInTheDocument();
//   });
//   it('Render detail detail after click and close it', async () => {
//     render(
//       <MemoryRouter initialEntries={['/details/1']}>
//         <Person />
//       </MemoryRouter>
//     );
//     expect(screen.getByRole('loader')).toBeInTheDocument();
//     waitFor(() => {
//       fetchMock.mockResponse(JSON.stringify({ data: 'mock data' }));
//       expect(screen.getByRole('loader')).not.toBeInTheDocument();
//       expect(screen.getByRole('person')).toBeInTheDocument();
//       expect(screen.getByText('IDENTIFICATION-NUMBER')).toBeInTheDocument();
//       expect(screen.getByText('button')).toBeInTheDocument();
//       waitFor(() => {
//         fireEvent.click(screen.getByRole('button'));
//         expect(screen.getByText('IDENTIFICATION-NUMBER')).not.toBeInTheDocument();
//       });
//       waitFor(() => {
//         fireEvent.click(screen.getByRole('button'));
//         expect(screen.getByRole('main')).toBeInTheDocument();
//       });
//     });
//   });
// });

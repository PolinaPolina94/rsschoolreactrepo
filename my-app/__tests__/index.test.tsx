import { useRouter } from 'next/router';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { createRequest, createResponse } from 'node-mocks-http';
import Home, { getServerSideProps } from '@/pages';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import ErrorPageNavigation from '@/pages/404';
import ListItems from '@/components/ListItems';
import Person from '@/components/Person';
import ErrorBoundary from '@/components/ErrorBoundary';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
export const gsspCtx = (
  context?: Partial<GetServerSidePropsContext>
): GetServerSidePropsContext => ({
  req: createRequest(),
  res: createResponse(),
  params: undefined,
  query: {},
  resolvedUrl: '',
  ...context,
});

export function assertHasProps<T>(res: GetServerSidePropsResult<T>): asserts res is { props: T } {
  const hasProps = typeof res === 'object';
  if (!hasProps) throw new Error('no props');
}

describe('Tests for the Home Page', () => {
  mockedDispatch.mockReturnValue(jest.fn());
  it('Render HomePage with mock data', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { page: 1, name: 'rick' },
    });

    const res = await getServerSideProps(gsspCtx());
    assertHasProps(res);
    render(<Home {...res.props} />);
    expect(screen.getByText(/Search/)).toBeInTheDocument();
    expect(screen.getByTestId('PaginatorContent')).toBeInTheDocument();
  });

  it('Render 404 page', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
    });

    const res = await getServerSideProps(gsspCtx());
    assertHasProps(res);
    render(<ErrorPageNavigation />);
  });

  it('Render Person', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { page: 1, name: ' ' },
    });

    const res = await getServerSideProps(gsspCtx());
    assertHasProps(res);
    render(<Home {...res.props} />);
    expect(screen.getByText(/Error Button/));
    waitFor(() => {
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByText(/Oops/)).toBeInTheDocument();
    });
  });

  it('render ListItems page', () => {
    const objectState = {
      items: {
        data: [
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
      },
    };
    (useRouter as jest.Mock).mockReturnValue({
      query: { page: 1, name: 'rick' },
    });
    render(<ListItems items={objectState.items.data} />);
    expect(screen.getByText(/Luiza/i)).toBeInTheDocument();
  });
  it('render ListItems page', () => {
    const objectState = {
      items: {
        data: [
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
      },
    };
    (useRouter as jest.Mock).mockReturnValue({
      query: { page: 1, name: 'rick' },
    });
    render(<ListItems items={objectState.items.data} />);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
    waitFor(() => {
      fireEvent.click(screen.getAllByRole('img')[0]);
      expect(render(<Person items={objectState.items.data} />));
      expect(screen.getByRole('person')).toBeInTheDocument();
      expect(screen.getByText('IDENTIFICATION-NUMBER')).toBeInTheDocument();
      expect(screen.getByText('button')).toBeInTheDocument();
    });
  });
  it('render error', async () => {
    const GetError = () => {
      throw new Error('Error');
      return <></>;
    };
    function showPage() {
      render(
        <ErrorBoundary>
          <GetError />
        </ErrorBoundary>
      );
    }
    await act(async () => {
      showPage();
    });
    expect(screen.getByText(/Oops/)).toBeInTheDocument();
    waitFor(() => {
      expect(jest.fn()).toHaveBeenCalledWith('/');
    });
  });
});

import { useEffect, useState } from 'react';
import { Item, State } from '../../types';
import ItemOnPage from './ItemOnPage';
import classes from './ItemOnPage.module.css';
import Loader from '../loader/Loader';
import Pagination from '../Pagination/Pagination';
import { useParams } from 'react-router-dom';

const MainPage = () => {
  const personName = localStorage.getItem('personName');

  const [state, setState] = useState<State | null>(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemPerPage, setitemPerPage] = useState(20);

  const { id } = useParams();
  console.log('hello', id);

  useEffect(() => {
    if (!personName) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then((res) => res.json())
        .then((result) => {
          setState({
            isLoaded: true,
            items: result.results,
          });
        });
    } else if (personName == null) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((res) => res.json())
        .then((result) => {
          setState({
            isLoaded: true,
            items: result.results,
          });
        });
    } else if (personName && personName.trim() == '') {
      fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then((res) => res.json())
        .then((result) => {
          setState({
            isLoaded: true,
            items: result.results,
          });
        });
    } else if (personName) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${personName}`)
        .then((res) => res.json())
        .then((result) => {
          setState({
            isLoaded: true,
            items: result.results,
          });
        });
    }
  }, [personName, id]);

  if (state) {
    const loading = state.isLoaded;
    const items = state.items;

    // const lastItemIndex = currentPage * itemPerPage;
    // const firstItemIndex = lastItemIndex - itemPerPage;
    // const currentItems = items.slice(firstItemIndex, lastItemIndex);
    if (!loading) {
      return <Loader />;
    } else if (items) {
      return (
        <main className={classes.main}>
          <Pagination />
          {items.map((el: Item) => (
            <ItemOnPage
              key={el.id}
              name={el.name}
              image={el.image}
              species={el.species}
              type={el.type}
              gender={el.gender}
              planet={el.origin!.name}
            />
          ))}
        </main>
      );
    } else {
      return <div className={classes.notfound}> no such name </div>;
    }
  }
};

export default MainPage;

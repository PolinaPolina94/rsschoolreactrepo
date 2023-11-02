import { useEffect, useState } from 'react';
import { Item, State } from '../../types';
import ItemOnPage from './ItemOnPage';
import classes from './ItemOnPage.module.css';
import Loader from '../loader/Loader';

const MainPage = () => {
  const personName = localStorage.getItem('personName');

  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    if (!personName) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
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
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
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
  }, [personName]);

  if (state) {
    const loading = state.isLoaded;
    const items = state.items;
    if (!loading) {
      return <Loader />;
    } else if (items) {
      return (
        <main>
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

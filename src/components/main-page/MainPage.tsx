import { useContext, useEffect } from 'react';
import classes from './ItemOnPage.module.css';
import Loader from '../loader/Loader';
// import {Pagination } from '../Pagination/Pagination';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
// import SelectorBtn from '../SelectorBtn/SelectorBtn';
import { ApiContext, ApiContextApp } from '../Context/ApiContext';
import ListItems from './ListItems';
// import { Paginator } from '../Pagination/Pagination';

const MainPage = () => {
  const personName = localStorage.getItem('personName');
  let countPages = Number(localStorage.getItem('countPages'));
  const activeStyle = localStorage.getItem('active');
  const navigate = useNavigate();

  const { state, setState } = useContext<ApiContextApp>(ApiContext);
  console.log(state);

  const { id } = useParams();
  if (!countPages) {
    countPages = 5;
  }
  const closeModal = () => {
    if (activeStyle === 'rockNew') {
      localStorage.setItem('active', '');
      navigate(-1);
    }
  };
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
    } else if (personName == null && !countPages) {
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
  }, [personName, id, countPages, setState]);
  useEffect(() => {
    if (activeStyle === 'rockNew') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '800px';
    } else {
      document.body.style.overflow = 'visible';
    }
  });

  if (state) {
    const loading = state.isLoaded;
    const items = state.items;
    if (!loading) {
      return <Loader />;
    } else if (items) {
      items.length = countPages;
      return (
        <main className={classes.main}>
          <div className={classes.itemsonpagecontainer}>
            <div className={classes.itemsonpage} onClick={closeModal}>
              {<ListItems items={items} />}
              {/* {items.map((el: Item) => (
                <ItemOnPage
                  key={el.id}
                  name={el.name}
                  image={el.image}
                  species={el.species}
                  type={el.type}
                  gender={el.gender}
                  planet={el.origin!.name}
                  id={el.id}
                />
              ))} */}
            </div>
            <div
              className={
                activeStyle === 'rockNew'
                  ? `${classes.itemperson} ${classes.active}`
                  : `${classes.itemperson}`
              }
            >
              {' '}
              <Outlet />
            </div>
          </div>
        </main>
      );
    } else {
      return <div className={classes.notfound}> no such name </div>;
    }
  }
};

export default MainPage;

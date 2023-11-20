import classes from './ItemOnPage.module.css';
import ListItems from './ListItems';
import { Outlet, useParams } from 'react-router-dom';
// import Loader from '../loader/Loader';
import { itemsAPI } from '../../services/ItemsService';
import { itemSlice } from '../../store/reducers/ItemSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import Loader from '../loader/Loader';

const MainPage = () => {
  let countPages = Number(localStorage.getItem('countPages'));
  const name = localStorage.getItem('personName');

  const activeStyle = localStorage.getItem('active');
  const { id } = useParams();
  const idNumber = Number(id);
  const { data: data, isLoading, error } = itemsAPI.useFetchAllItemsQuery(idNumber);
  const items = data?.data;
  const { personItemsReduser } = itemSlice.actions;
  const { personNameReduser } = itemSlice.actions;
  const { itemsCountReducer } = itemSlice.actions;
  const { loadedReduserPage } = itemSlice.actions;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (items && name) {
      dispatch(personItemsReduser(items));
      dispatch(personNameReduser(name));
    } else {
      dispatch(personNameReduser(''));
    }
    if (countPages) {
      dispatch(itemsCountReducer(countPages));
    }
    if (items && !name) {
      dispatch(personItemsReduser(items));
    }
    if (!items) {
      dispatch(loadedReduserPage(true));
    }
    if (items) {
      dispatch(loadedReduserPage(false));
    }
  });
  console.log(items);
  if (!countPages) {
    countPages = 10;
  }
  let itemslength;
  if (items) {
    itemslength = [...items];
    itemslength.length = countPages;
  }
  return (
    <main className={classes.main} role="main">
      <div className={classes.itemsonpagecontainer}>
        <div className={classes.itemsonpage} role="itemsonpage">
          {isLoading && <Loader />}
          {itemslength && <ListItems items={itemslength} />}
          {error && <div className={classes.notfound}> no such name, press Search </div>}
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
};

export default MainPage;

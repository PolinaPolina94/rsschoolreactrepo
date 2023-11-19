import classes from './ItemOnPage.module.css';
import ListItems from './ListItems';
import { Outlet, useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { itemsAPI } from '../../services/ItemsService';
import { itemSlice } from '../../store/reducers/ItemSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';

const MainPage = () => {
  const countPages = Number(localStorage.getItem('countPages'));
  const activeStyle = localStorage.getItem('active');
  const { id } = useParams();
  const idNumber = Number(id);
  const { data: data, isLoading, error } = itemsAPI.useFetchAllItemsQuery(idNumber);
  const items = data?.data;
  const { personItemsReduser } = itemSlice.actions;
  const { loadedReduserPage } = itemSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (items) {
      dispatch(personItemsReduser(items));
      dispatch(loadedReduserPage(false));
    } else {
      dispatch(loadedReduserPage(true));
    }
  });
  console.log(countPages);
  let itemslength;
  if (items) {
    itemslength = [...items];
    itemslength.length = countPages;
  }
  console.log(itemslength);

  return (
    <main className={classes.main} role="main">
      <div className={classes.itemsonpagecontainer}>
        {/* <div className={classes.itemsonpage} onClick={closeModal} role="itemsonpage"> */}
        <div className={classes.itemsonpage} role="itemsonpage">
          {itemslength && <ListItems items={itemslength} />}
          {isLoading && <Loader />}
          {error && <div className={classes.notfound}> no such name </div>}
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

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
  // const navigate = useNavigate();
  // const { state, setState } = useContext<ApiContextApp>(ApiContext);
  // console.log(state);

  const { id } = useParams();
  const idNumber = Number(id);
  // if (!countPages) {
  //   countPages = 5;
  // }
  // useEffect(() => {
  //   if (!personName) {
  //     fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setState({
  //           isLoaded: true,
  //           items: result.results,
  //         });
  //       });
  //   } else if (personName == null && !countPages) {
  //     fetch(`https://rickandmortyapi.com/api/character/?page=1`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setState({
  //           isLoaded: true,
  //           items: result.results,
  //         });
  //       });
  //   } else if (personName && personName.trim() == '') {
  //     fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setState({
  //           isLoaded: true,
  //           items: result.results,
  //         });
  //       });
  //   } else if (personName) {
  //     fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${personName}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setState({
  //           isLoaded: true,
  //           items: result.results,
  //         });
  //       });
  //   }
  // }, [personName, id, countPages, setState]);
  // useEffect(() => {
  //   if (activeStyle === 'rockNew') {
  //     document.body.style.height = '800px';
  //   } else {
  //     document.body.style.overflow = 'visible';
  //   }
  // });

  // if (state) {
  //   const loading = state.isLoaded;
  //   const items = state.items;
  //   if (!loading) {
  //     return <Loader />;
  //   } else if (items) {
  //     items.length = countPages;
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

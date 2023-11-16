// import { useContext, useEffect } from 'react';
import classes from './ItemOnPage.module.css';
// import Loader from '../loader/Loader';
// import { Outlet, useNavigate, useParams } from 'react-router-dom';
// import { ApiContext, ApiContextApp } from '../Context/ApiContext';
// import ListItems from './ListItems';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchItems } from '../../store/reducers/ActionCreators';
import ListItems from './ListItems';
import { Outlet } from 'react-router-dom';
import Loader from '../loader/Loader';

const MainPage = () => {
  // const personName = localStorage.getItem('personName');
  // let countPages = Number(localStorage.getItem('countPages'));
  const activeStyle = localStorage.getItem('active');
  // const navigate = useNavigate();

  // const { state, setState } = useContext<ApiContextApp>(ApiContext);
  // console.log(state);

  // const { id } = useParams();
  // if (!countPages) {
  //   countPages = 5;
  // }
  // const closeModal = () => {
  //   if (activeStyle === 'rockNew') {
  //     localStorage.setItem('active', '');
  //     navigate(-1);
  //   }
  // };

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.itemReducer.items);
  const isLoaded = useAppSelector((state) => state.itemReducer.isLoaded);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  // console.log(items);

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
  //     document.body.style.overflow = 'hidden';
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
  return (
    // <div>lala</div>

    // <main className={classes.main} role="main">

    <div className={classes.itemsonpagecontainer}>
      {/* <div>{JSON.stringify(items)}</div> */}
      {/* <div className={classes.itemsonpage} onClick={closeModal} role="itemsonpage"> */}

      <div className={classes.itemsonpage} role="itemsonpage">
        {<ListItems items={items} />}
        {isLoaded && <Loader />}
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
    // </main>
  );
  // } else {
  //   return <div className={classes.notfound}> no such name </div>;
  // }
  // }
};

export default MainPage;

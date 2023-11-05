import React, { useEffect, useState } from 'react';
import classes from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

const Paginator = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  console.log(totalPages);
  const activeStyle = localStorage.getItem('active');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((info) => {
        setTotalItems(info.info.count);
        setTotalPages(info.info.pages);
        // setState({
        //   isLoaded: true,
        //   items: result.results,
        // });
      });
  });

  const pagesCount = Math.ceil(totalItems / 20);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // console.log(pages);
  const curP = page;
  const curPF = curP - 5 < 0 ? 0 : curP - 5;
  const curPL = curP + 5;
  const slicedPages = pages.slice(curPF, curPL);
  slicedPages.length <= 9;
  // const prev = (curP: number): void => {
  //   setPage(curP - 1);
  // };

  return (
    <div
      className={
        activeStyle === 'rockNew'
          ? `${classes.container} ${classes.disabled}`
          : `${classes.container}`
      }
    >
      {slicedPages.map((el) => (
        <NavLink
          to={`/page/${el}`}
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          key={el + 1}
          onClick={() => setPage(el)}
        >
          {' '}
          {el}
        </NavLink>
      ))}
    </div>
  );
};

export default Paginator;

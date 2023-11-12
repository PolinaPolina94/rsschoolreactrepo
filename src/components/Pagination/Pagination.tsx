import React, { useState } from 'react';
import classes from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

export function Paginator() {
  const [totalItems] = useState(826);
  const [totalPages] = useState(42);
  const [page, setPage] = useState(1);
  console.log(totalPages);
  const activeStyle = localStorage.getItem('active');

  // useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then((res) => res.json())
  //     .then((info) => {
  //       setTotalItems(info.info.count);
  //       setTotalPages(info.info.pages);
  //     });
  // });

  const pagesCount = Math.ceil(totalItems / 20);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const curP = page;
  const curPF = curP - 5 < 0 ? 0 : curP - 5;
  const curPL = curP + 5;
  const slicedPages = pages.slice(curPF, curPL);
  slicedPages.length <= 9;
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
      <div data-testid="PaginatorContent"></div>
    </div>
  );
}

// export default Paginator;

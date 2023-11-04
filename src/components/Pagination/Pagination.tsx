// import { NavLink } from 'react-router-dom';
// import classes from './Pagination.module.css';
// import { useEffect, useState } from 'react';

// const Pagination = () => {
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character')
//       .then((res) => res.json())
//       .then((info) => {
//         setTotalItems(info.info.count);
//         setTotalPages(info.info.pages);
//         // setState({
//         //   isLoaded: true,
//         //   items: result.results,
//         // });
//       });
//   });

//   const changePage = (direction: boolean) => {
//     setPage((state) => {
//       // move forward
//       if (direction) {
//         // if page is the last page, do nothing
//         if (state === 20) {
//           return state;
//         }
//         return state + 1;
//         // go back
//       } else {
//         // if page is the first page, do nothing
//         if (state === 1) {
//           return state;
//         }
//         return state - 1;
//       }
//     });
//   };

//   // nextPage: ()=> changePage(true);
//   // prevPage: () => changePage(false);

//   const curP = page;
//   const curPF = curP - 9 < 0 ? 0 : curP - 9;
//   const curPL = curP + 9;

//   const array: number[] = [...Array(totalPages).keys()];
//   const slicedPages = array.slice(curPF, curPL);
//   slicedPages.length = 9;
//   console.log(slicedPages);
//   console.log(page);

//   // 20 => itemsPerPage;

//   const startIndex = (page - 1) * 20;
//   const endIndex = startIndex + 20;
//   console.log(startIndex, endIndex);

//   return (
//     <div className={classes.container}>
//       <button className={classes.button} onClick={() => setPage(page - 1)}>
//         {' '}
//         👈
//       </button>
//       {slicedPages.map((el) => (
//         <NavLink
//           to={`/page/${el + 1}`}
//           className={({ isActive }) => (isActive ? classes.active : undefined)}
//           key={el + 1}
//           onClick={() => setPage(el + 1)}
//         >
//           {' '}
//           {el + 1}
//         </NavLink>
//       ))}
//       <button className={classes.button} onClick={() => changePage(true)}>
//         {' '}
//         👉
//       </button>
//     </div>
//   );
// };
// export default Pagination;

import React, { useEffect, useState } from 'react';
import classes from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

const Paginator = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  console.log(totalPages);
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
    <div className={classes.container}>
      {/* <button
        className={classes.button}
        onClick={() => {
          setPage(curP - 1);
          console.log(curP);
        }}
      >
        {' '}
        👈
      </button> */}
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
      {/* <button className={classes.button}> 👉</button> */}
    </div>
  );
};

export default Paginator;

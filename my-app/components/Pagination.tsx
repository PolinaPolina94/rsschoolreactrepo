import React, { useState } from 'react';
import styles from '../styles/Pagination.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pagination = () => {
  const router = useRouter();
  const name = router.query.name;
  const [totalItems] = useState(826);
  const [page, setPage] = useState(1);

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
    <div className={styles.container}>
      {slicedPages.map((el) => (
        <Link
          href={`/?page=${el}&name=${name}`}
          className={styles.a}
          // className={({ isActive }) => (isActive ? styles.active : undefined)}
          key={el + 1}
          onClick={() => {
            // e.preventDefault();
            // console.log(e.currentTarget.innerText);
            setPage(el);
          }}
        >
          {' '}
          {el}
        </Link>
      ))}
      <div data-testid="PaginatorContent"></div>
    </div>
  );
};
export default Pagination;

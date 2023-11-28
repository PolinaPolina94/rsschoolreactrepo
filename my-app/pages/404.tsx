import React from 'react';
import styles from '../styles/ErrorPageNavigation.module.css';
import Link from 'next/link';

const ErrorPageNavigation: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Oops!</h1>
      <p className={styles.text}>Sorry, we dont have information about it.</p>
      <h2 className={styles.h1}>404 error</h2>
      <Link href={'/'}>
        <div className={styles.reset}> Click, to return </div>
      </Link>
      <div className={styles.error}>
        {' '}
        If you called <span className={styles.errorspan}>`Throw Error`</span> ➡ reset the page{' '}
      </div>
    </div>
  );
};

export default ErrorPageNavigation;

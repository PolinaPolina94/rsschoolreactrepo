import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from '../styles/ErrorPageNavigation.module.css';
import Link from 'next/link';

const ErrorPageNavigation: React.FC = () => {
//   const navigate = useNavigate();
  return (
    <div className= {styles.container}>
      <h1 className={styles.h1}>Oops!</h1>
      <p className= {styles.text}>Sorry, we dont have information about it.</p>
      <h2 className={styles.h1}>404 error</h2>
      <Link href={'/'}>
      <button className= {styles.button} onClick={() => console.log('oops')}>
        {' '}
        Go back{' '}
      </button>
      </Link>
      
    </div>
  );
};

export default ErrorPageNavigation;
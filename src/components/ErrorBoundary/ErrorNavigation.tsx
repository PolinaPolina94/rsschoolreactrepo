import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ErrorPage.module.css';

const ErrorPageNavigation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h1>Oops!</h1>
      <p className={classes.text}>Sorry, an unexpected error has occurred.</p>
      <p className={classes.errormessage}>errorMessage</p>
      <button className={classes.button} onClick={() => navigate(-1)}>
        {' '}
        Go back{' '}
      </button>
    </div>
  );
};

export default ErrorPageNavigation;

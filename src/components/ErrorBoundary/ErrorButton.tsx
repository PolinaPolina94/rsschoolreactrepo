import { useState } from 'react';
import classes from './ErrorPage.module.css';

const ErrorButton = () => {
  const [hasError, sethasError] = useState(true);
  const activeStyle = localStorage.getItem('active');

  const handleErrorSubmit = () => {
    sethasError(false);
  };
  if (hasError) {
    return (
      <>
        <form onSubmit={handleErrorSubmit}>
          <button
            className={
              activeStyle === 'rockNew'
                ? `${classes.button} ${classes.disabled}`
                : `${classes.button}`
            }
            type="submit"
          >
            {' '}
            Error Button ♻{' '}
          </button>
        </form>
      </>
    );
  } else {
    throw new Error('Sorry...error');
  }
};

export default ErrorButton;

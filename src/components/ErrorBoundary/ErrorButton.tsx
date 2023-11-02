import { useState } from 'react';
import classes from './ErrorPage.module.css';

const ErrorButton = () => {
  const [hasError, sethasError] = useState(true);
  // state = {
  //   hasError: true,
  // };
  const handleErrorSubmit = () => {
    sethasError(false);
  };
  if (hasError) {
    return (
      <>
        <form onSubmit={handleErrorSubmit}>
          <button className={classes.button} type="submit">
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

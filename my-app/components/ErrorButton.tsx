import { useState } from 'react';
import styles from '../styles/ErrorButton.module.css';

const ErrorButton = () => {
  const [hasError, sethasError] = useState(true);

  const handleErrorSubmit = () => {
    sethasError(false);
  };
  if (hasError) {
    return (
      <>
        <form onSubmit={handleErrorSubmit}>
          <button className={styles.button} type="submit">
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

import styles from '@/styles/ErrorButton.module.css';
import { FormEvent } from 'react';

const ErrorButton = () => {
  const handleErrorSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('error btn');
  };
    return (
      <>
        <form onSubmit={handleErrorSubmit}>
          <button
            className={styles.button}
            type="submit"
          >
            {' '}
            Error Button ♻{' '}
          </button>
        </form>
      </>
    );
};

export default ErrorButton;
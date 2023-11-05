import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  const handleResetSubmit = (): void => {
    localStorage.setItem('personName', '');
  };
  return (
    <>
      <form onSubmit={handleResetSubmit}>
        <div className={classes.container}>
          <h1>Sorry... error</h1>
          <button className={classes.reset} type="submit">
            {' '}
            Reset ♻{' '}
          </button>
        </div>
      </form>
    </>
  );
};

export default ErrorPage;

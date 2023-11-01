import { PureComponent } from 'react';
import classes from './ErrorPage.module.css';

class ErrorPage extends PureComponent {
  handleResetSubmit = (): void => {
    localStorage.setItem('personName', '');
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleResetSubmit}>
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
  }
}

export default ErrorPage;

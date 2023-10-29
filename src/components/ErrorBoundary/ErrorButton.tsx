import { PureComponent } from 'react';
import classes from './ErrorPage.module.css';

class ErrorButton extends PureComponent {
  state = {
    hasError: true,
  };
  handleErrorSubmit = () => {
    this.setState({ hasError: false });
  };
  render() {
    if (this.state.hasError) {
      return (
        <>
          <form onSubmit={this.handleErrorSubmit}>
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
  }
}

export default ErrorButton;

import { Component } from 'react';
import classes from './InputSearch.module.css';

class InputSearch extends Component {
  render() {
    return (
      <div className={classes.inputwrapper}>
        <input type="text" placeholder="write here a name" />
        <button className={classes.buttonsearch} type="submit">
          {' '}
          Search 🔎{' '}
        </button>
      </div>
    );
  }
}

export default InputSearch;

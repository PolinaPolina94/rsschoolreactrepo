import { Component } from 'react';
import classes from './InputSearch.module.css';
import { InputValue } from '../../types';

class InputSearch extends Component {
  state: InputValue = {
    value: '',
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    this.setState({ value: value });
  };

  handleFormSubmit = (): void => {
    const name = this.state.value;
    localStorage.setItem('personName', name);
    console.log('gooood', name);
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className={classes.inputwrapper}>
          <input
            type="text"
            name="name"
            placeholder="write here a name"
            onChange={this.handleChange}
          />
          <button className={classes.buttonsearch} type="submit">
            {' '}
            Search 🔎{' '}
          </button>
        </div>
      </form>
    );
  }
}

export default InputSearch;

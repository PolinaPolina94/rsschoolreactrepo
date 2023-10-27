import { Component } from 'react';
import classes from './InputSearch.module.css';
import { InputValue } from '../../types';

// type Item = {
//   id?: number;
//   name: string;
//   img?: string;
// };

class InputSearch extends Component {
  state: InputValue = {
    value: '',
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    console.log(value);
    // const value = input.value;
    this.setState({ value: value });
  };

  handleFormSubmit = (): void => {
    const name = this.state.value;
    localStorage.setItem('personName', name);
    console.log('gooood', name);
    // event.preventDefault();
  };

  //   componentDidMount() {
  //     fetch(`https://rickandmortyapi.com/api/character/?name=${this.name}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.results);
  //       });
  //   }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className={classes.inputwrapper}>
          <input
            type="text"
            name="name"
            placeholder="write here a name"
            // value={this.state.name}
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

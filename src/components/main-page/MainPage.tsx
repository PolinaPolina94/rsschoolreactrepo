import { PureComponent } from 'react';
import { Item, State } from '../../types';
import ItemOnPage from './ItemOnPage';
import classes from './ItemOnPage.module.css';
import Loader from '../loader/Loader';

class MainPage extends PureComponent {
  personName = localStorage.getItem('personName');

  state: State = {
    error: null,
    isLoaded: false,
    items: [],
  };
  componentDidMount() {
    if (!this.personName) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        });
    } else if (this.personName == null) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        });
    } else if (this.personName && this.personName.trim() == '') {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        });
    } else if (this.personName) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${this.personName}`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        });
    }
  }
  render() {
    const items = this.state.items;
    const loading = this.state.isLoaded;
    if (!loading) {
      return <Loader />;
    } else if (items) {
      return (
        <main>
          {items.map((el: Item) => (
            <ItemOnPage
              key={el.id}
              name={el.name}
              image={el.image}
              species={el.species}
              type={el.type}
              gender={el.gender}
              planet={el.origin!.name}
            />
          ))}
        </main>
      );
    } else {
      return <div className={classes.notfound}> no such name </div>;
    }
  }
}

export default MainPage;

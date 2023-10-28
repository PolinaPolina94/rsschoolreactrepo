import { Component } from 'react';
import { Item, State } from '../../types';
import ItemOnPage from './ItemOnPage';

class MainPage extends Component {
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
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          }
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          // (error) => {
          //   this.setState({
          //     isLoaded: true,
          //     error,
          //   });
          // }
        );
    } else if (this.personName == null) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          }
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          // (error) => {
          //   this.setState({
          //     isLoaded: true,
          //     error,
          //   });
          // }
        );
    } else if (this.personName && this.personName.trim() == '') {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              // isLoaded: true,
              items: result.results,
            });
          }
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          // (error) => {
          //   this.setState({
          //     isLoaded: true,
          //     error,
          //   });
          // }
        );
    } else if (this.personName) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${this.personName}`)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          }
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          // (error: Error) => {
          //   this.setState({
          //     isLoaded: true,
          //     error,
          //     // items: [],
          //   });
          //   console.log('ERRRROOOOORRR');
          // }
        );
    }
    console.log(this.personName);
  }
  render() {
    const items = this.state.items;
    if (items) {
      return (
        <>
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
        </>
      );
    } else {
      return <div>no such name</div>;
    }
  }
}

export default MainPage;

import { Component } from 'react';
import InputSearch from './components/input-search/InputSearch';
// import { Item, State } from './types';
// import ItemOnPage from './components/main-page/ItemOnPage';
import MainPage from './components/main-page/MainPage';

class App extends Component {
  render() {
    return (
      <>
        <InputSearch />
        <MainPage />
      </>
    );
  }
}

export default App;

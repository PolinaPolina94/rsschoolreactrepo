import { Component } from 'react';
import InputSearch from './components/input-search/InputSearch';
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

import { Component } from 'react';
import classes from './MainPage.module.css';

class MainPage extends Component {
  render() {
    return (
      <div className={classes.pagewrapper}>
        <div className={classes.view}>
          <span> Name of Pokemon </span>
          <img
            className={classes.pokemonphoto}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
            alt="pokemon name"
          ></img>
        </div>
        <div className={classes.description}>
          <span> Description </span>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, labore error. Non vitae
            consequatur, enim neque corporis inventore eaque eum aspernatur sint, laboriosam fugit,
            repudiandae tempora accusantium voluptatum nobis debitis!
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

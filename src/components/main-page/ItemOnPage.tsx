import classes from './ItemOnPage.module.css';
import { Item } from '../../types';
import { NavLink } from 'react-router-dom';

const ItemOnPage = (props: Item) => {
  return (
    <div className={classes.itemwrapper}>
      <div className={classes.view}>
        <span> {props.name} </span>
        <NavLink to={`character/${props.id}`} className={classes.link}>
          <img className={classes.itemimg} src={props.image} alt="person name"></img>
        </NavLink>
      </div>
      <div className={classes.description}>
        <span> Description 👾 </span>
        <div className={classes.descriptionList}>
          <span>species: {props.species}</span>
          <span>planet: {props.planet} 🪐</span>
          <span>gender: {props.gender} </span>
        </div>
      </div>
    </div>
  );
};

export default ItemOnPage;

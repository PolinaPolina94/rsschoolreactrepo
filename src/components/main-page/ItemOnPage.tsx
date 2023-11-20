import classes from './ItemOnPage.module.css';
import { Item } from '../../types';
import { NavLink } from 'react-router-dom';
const ItemOnPage = (props: Item) => {
  const activeFilter = (): void => {
    localStorage.setItem('active', 'rockNew');
  };
  const activeStyle = localStorage.getItem('active');

  return (
    <div className={classes.itemwrapper} id={'itemPerson'}>
      <div className={classes.view}>
        <span> {props.name} </span>
        <NavLink
          to={`details/${props.id}`}
          className={
            activeStyle === 'rockNew' ? `${classes.link} ${classes.disabled}` : `${classes.link}`
          }
          onClick={activeFilter}
          role="img"
        >
          <img className={classes.itemimg} src={props.image} alt="person name" id="rockNew"></img>
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

import { Component } from 'react';
import classes from './ItemOnPage.module.css';
import { Item } from '../../types';

class ItemOnPage extends Component<Item, { planet: string }> {
  constructor(props: Item) {
    super(props);
  }
  render() {
    return (
      <div className={classes.pagewrapper}>
        <div className={classes.view}>
          <span> {this.props.name} </span>
          <img className={classes.itemimg} src={this.props.image} alt="person name"></img>
        </div>
        <div className={classes.description}>
          <span> Description 👾 </span>
          <div className={classes.descriptionList}>
            <span>species: {this.props.species}</span>
            <span>planet: {this.props.planet} 🪐</span>
            <span>gender: {this.props.gender} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemOnPage;

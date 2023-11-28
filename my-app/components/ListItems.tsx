import { Item } from '@/types/types';
import ItemOnPage from './ItemOnPage';

type Person = {
  items: Item[];
};

const ListItems = (props: Person) => {
  const items = props.items;
  if (items && items.length) {
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
            id={el.id}
          />
        ))}
      </>
    );
  } else {
    return <div> no such person </div>;
  }
};

export default ListItems;

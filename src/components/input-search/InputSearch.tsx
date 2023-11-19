import classes from './InputSearch.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { itemSlice } from '../../store/reducers/ItemSlice';

const InputSearch = () => {
  let person = '';
  person = useAppSelector((state) => state.itemReducer.person);
  const { personNameReduser } = itemSlice.actions;
  const dispatch = useAppDispatch();
  const activeStyle = localStorage.getItem('active');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newvalue = event.currentTarget.value.toLowerCase();
    person = newvalue;
  };

  const handleFormSubmit = (): void => {
    if (person) {
      const name = person;
      localStorage.setItem('personName', name);
      dispatch(personNameReduser(person.toString()));
    } else {
      localStorage.setItem('personName', '');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className={
          activeStyle === 'rockNew'
            ? `${classes.inputwrapper} ${classes.disabled}`
            : `${classes.inputwrapper}`
        }
      >
        <input type="text" name="name" placeholder="write here a name" onChange={handleChange} />
        <button className={classes.buttonsearch} type="submit">
          {' '}
          Search 🔎{' '}
        </button>
      </div>
    </form>
  );
};

export default InputSearch;

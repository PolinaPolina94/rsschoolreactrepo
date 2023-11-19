import classes from './InputSearch.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { itemSlice } from '../../store/reducers/ItemSlice';

const InputSearch = () => {
  let person: string;
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
      dispatch(personNameReduser(person));
      localStorage.setItem('personName', name);
    } else {
      localStorage.setItem('personName', '');
    }
  };

  const handleReset = () => {
    console.log('reset');
    dispatch(personNameReduser(''));
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
        <button className={classes.buttonsearch} type="submit" onClick={handleReset}>
          {' '}
          Reset 👌{' '}
        </button>
      </div>
    </form>
  );
};

export default InputSearch;

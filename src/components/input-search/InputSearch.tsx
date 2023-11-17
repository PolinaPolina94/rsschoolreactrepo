import classes from './InputSearch.module.css';
import { InputContext, InputContextApp } from '../Context/InputContext';
import { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { itemSlice } from '../../store/reducers/ItemSlice';

const InputSearch = () => {
  const person = useAppSelector((state) => state.itemReducer.person);
  console.log(person);
  const { personNameReduser } = itemSlice.actions;
  const dispatch = useAppDispatch();

  const { state, setValue } = useContext<InputContextApp>(InputContext);
  const activeStyle = localStorage.getItem('active');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newvalue = event.currentTarget.value.toLowerCase();
    setValue({ value: newvalue });
  };

  const handleFormSubmit = (): void => {
    if (state) {
      const name = state.value.toString();
      localStorage.setItem('personName', name);
      dispatch(personNameReduser(state.value.toString()));
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

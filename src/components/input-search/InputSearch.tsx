import { useState } from 'react';
import classes from './InputSearch.module.css';
import { InputValue } from '../../types';
import { useParams } from 'react-router-dom';

const InputSearch = () => {
  const [state, setValue] = useState<InputValue | null>(null);
  const { id } = useParams();
  console.log(id);
  // state: InputValue = {
  //   value: '',
  // };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newvalue = event.currentTarget.value.toLowerCase();
    setValue({ value: newvalue });
  };

  const handleFormSubmit = (): void => {
    if (state) {
      const name = state.value.toString();
      localStorage.setItem('personName', name);
    } else {
      localStorage.setItem('personName', '');
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={classes.inputwrapper}>
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

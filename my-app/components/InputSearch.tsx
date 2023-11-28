import { useAppDispatch, useAppSelector } from '@/store/hooks/redux';
import { itemSlice } from '@/store/reducers/ItemsSlice';
import styles from '@/styles/InputSearch.module.css';
import { Item } from '@/types/types';
import { useRouter } from 'next/router';

export interface PokemonsRequestProps {
  pokemonsRequest: {
    count: number;
    items: Item[];
  };
}

const InputSearch = () => {
  const router = useRouter();
  const { personNameReduser } = itemSlice.actions;
  const dispatch = useAppDispatch();
  let person: string;

  person = useAppSelector((state) => state.itemReducer.person);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newvalue = event.currentTarget.value.toLowerCase();
    person = newvalue;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (person) {
      dispatch(personNameReduser(person));
      router.push(`?page=1&name=${person}`);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.inputwrapper}>
        <input
          type="text"
          name="name"
          placeholder="write here a name"
          className={styles.input}
          onChange={handleChange}
        />
        <button type="submit" className={styles.buttonsearch}>
          {' '}
          Search 🔎{' '}
        </button>
        {/* <button type="submit" onClick={showElement} className={styles.buttonsearch}>
            {' '}
            Reset 👌{' '}
          </button> */}
      </div>
    </form>
  );
};

export default InputSearch;

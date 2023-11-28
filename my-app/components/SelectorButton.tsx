import { itemSlice } from '@/store/reducers/ItemsSlice';
import styles from '../styles/SelectorButton.module.css';
import { useAppDispatch } from '@/store/hooks/redux';

const SelectorButton = () => {
  //   const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { itemsCountReducer } = itemSlice.actions;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.currentTarget.value;
    dispatch(itemsCountReducer(Number(value)));
    // navigate('/page/1');
  };
  return (
    <form name="select-form" role="selector">
      <div className={styles.btncontainer}>
        <select className={styles.buttonbtn} onChange={handleSelectChange}>
          <option value="" className={styles.option}>
            Choose items count 🖖
          </option>
          <option value={5} className={styles.option}>
            {' '}
            5 items{' '}
          </option>
          <option value={10} className={styles.option}>
            {' '}
            10 items
          </option>
          <option value={20} className={styles.option}>
            {' '}
            20 items
          </option>
        </select>
      </div>
    </form>
  );
};

export default SelectorButton;

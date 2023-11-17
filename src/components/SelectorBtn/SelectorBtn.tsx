// import { useContext } from 'react';
import classes from './SelectorBtn.module.css';
// import { ApiContext } from '../Context/ApiContext';

const SelectorBtn = () => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.currentTarget.value;
    localStorage.setItem('countPages', value);
  };
  const activeStyle = localStorage.getItem('active');
  // const y = useContext(ApiContext);
  // console.log('lnasc', y);
  return (
    <form name="select-form" role="selector">
      <div className={classes.btncontainer}>
        <select
          className={
            activeStyle === 'rockNew'
              ? `${classes.buttonbtn} ${classes.disabled}`
              : `${classes.buttonbtn}`
          }
          onChange={handleSelectChange}
        >
          <option value="">Choose items count 🖖</option>
          <option value={5}> 5 items </option>
          <option value={10}> 10 items</option>
          <option value={20}> 20 items</option>
        </select>
      </div>
    </form>
  );
};

export default SelectorBtn;

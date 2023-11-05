import classes from './SelectorBtn.module.css';

const SelectorBtn = () => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.currentTarget.value;
    localStorage.setItem('countPages', value);
  };
  const activeStyle = localStorage.getItem('active');

  return (
    <form name="select-form">
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

import classes from './SelectorBtn.module.css';

const SelectorBtn = () => {
  const handleSelectChange = (event): void => {
    const value = event.target.value;
    // console.log(value);
    localStorage.setItem('countPages', value);
  };
  return (
    <form name="select-form" onChange={handleSelectChange}>
      <div className={classes.btncontainer}>
        <select className={classes.buttonbtn}>
          <option value="">Choose items count 🖖</option>
          <option value={5}> 5 items</option>
          <option value={10}> 10 items</option>
          <option value={20}> 20 items</option>
        </select>
      </div>
    </form>
  );
};

export default SelectorBtn;

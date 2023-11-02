import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.container}>
      <svg className={classes.loader} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#1E67BD" />
        <circle cx="170" cy="170" r="135" stroke="#D74DF3" />
        <circle cx="170" cy="170" r="110" stroke="#FBF076" />
        <circle cx="170" cy="170" r="85" stroke="#1E67BD" />
      </svg>
    </div>
  );
};

export default Loader;

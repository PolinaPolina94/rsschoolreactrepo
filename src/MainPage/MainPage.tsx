import styles from "./MainPage.module.css";
import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div className={styles.header}>
        <div> Form App </div>
      </div>
      <div className={styles.containerform}>
        <NavLink to={"/uncontrolled-form"}> Uncontrolled form </NavLink>
        <NavLink to={"/react-hook-form"}> React Hook Form </NavLink>
      </div>
    </>
  );
}
export default MainPage;

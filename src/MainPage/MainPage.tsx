import styles from "./MainPage.module.css";
import { NavLink } from "react-router-dom";
import UncontroledFormData from "./UncontroledFormData/UncontroledFormData";
import ReactHookFormData from "./ReactHookFormData/ReactHookFormData";

function MainPage() {
  return (
    <>
      <div className={styles.header}>
        <div> Form App </div>
      </div>
      <div className={styles.containerform}>
        <div>
          <NavLink to={"/uncontrolled-form"}> Uncontrolled form </NavLink>
          <UncontroledFormData />
        </div>
        <div>
          <div>
            <NavLink to={"/react-hook-form"}> React Hook Form </NavLink>
            <ReactHookFormData />
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;

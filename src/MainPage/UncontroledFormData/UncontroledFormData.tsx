import { useAppSelector } from "../../hooks/hooksforredux";
import styles from "../Data.module.css";

const UncontroledFormData = () => {
  const { name, age, email, password1, sex, photo, countries } = useAppSelector(
    (state) => state.UserSliceForm1,
  );
  console.log(name, age, email, password1, sex, photo, countries);
  if (name) {
    return (
      <div className={styles.data}>
        <div>
          <p className={styles.line}>
            Name is: <span className={styles.trade}> {name} </span>{" "}
          </p>
          <p className={styles.line}>
            Age is: <span className={styles.trade}> {age} </span>
          </p>
          <p className={styles.line}>
            Email is: <span className={styles.trade}> {email} </span>
          </p>
          <p className={styles.line}>
            Password is: <span className={styles.trade}> {password1} </span>
          </p>
          <p className={styles.line}>
            Gender is: <span className={styles.trade}> {sex} </span>
          </p>
          <div className={styles.photo}>
            <img src={photo || ""} alt="user photo" className={styles.src} />{" "}
          </div>
          <p className={styles.line}>
            Country is: <span className={styles.trade}> {countries} </span>{" "}
          </p>
        </div>
      </div>
    );
  }
};
export default UncontroledFormData;

import { NavLink, useNavigate } from "react-router-dom";
import styles from "./UncontrolledForm.module.css";
import { useState } from "react";
import * as yup from "yup";
import { UserSliceForm1 } from "../store/reducers/UserSliceForm1";
import { useAppDispatch } from "../hooks/hooksforredux";
import Autocomplete from "../AutocompleteSelect/Autocomplite";

function UncontrolledForm() {
  const navigate = useNavigate();
  const [button, setbutton] = useState("submit");
  const [errorName, setErrorName] = useState({
    name: "",
    age: "",
    email: "",
    password1: "",
    password2: "",
    country: "",
    sex: "",
    checkbox: false,
    photo: "",
  });
  type ErrorMessagesFields =
    | "name"
    | "age"
    | "email"
    | "password1"
    | "password2"
    | "country"
    | "sex"
    | "checkbox"
    | "photo";
  const {
    username,
    userage,
    useremail,
    userpassword1,
    userpassword2,
    usersex,
    userphoto,
    useracception,
    usercountries,
  } = UserSliceForm1.actions;

  const dispatch = useAppDispatch();

  const schema = yup
    .object()
    .shape({
      name: yup
        .string()
        .required("This name field is required")
        .matches(
          /^[A-Z][a-z]+$/,
          "First letter should be capital Latin (A-Z)!",
        ),
      age: yup
        .number()
        .positive("Number should be upper 0")
        .integer("Number should be an integer")
        .required("This age field is required"),
      email: yup
        .string()
        .email("email should be correct (use '@')")
        .required("This email field is required"),
      password1: yup
        .string()
        .required("This password1 field is required")
        .matches(
          /[\.:,;\?!@#\$%\^&\*_\-\+=]/,
          "The password must contain at least one special character ('.:,;?!@#$%^&*_-+=')!",
        )
        .matches(
          /[A-Z]/,
          "The password must contain at least one Latin capital (A-Z) letter!",
        )
        .matches(
          /[a-z]/,
          "The password must contain at least one Latin lowercase (a-z) letter!",
        )
        .matches(/\d/, "The password must contain at least one number!"),
      password2: yup
        .string()
        .required("This field is required")
        .matches(
          /[\.:,;\?!@#\$%\^&\*_\-\+=]/,
          "The password must contain at least one special character ('.:,;?!@#$%^&*_-+=')!",
        )
        .matches(
          /[A-Z]/,
          "The password must contain at least one Latin capital (A-Z) letter!",
        )
        .matches(
          /[a-z]/,
          "The password must contain at least one Latin lowercase (a-z) letter!",
        )
        .matches(/\d/, "The password must contain at least one number!")
        .oneOf([yup.ref("password1")], "Passwords are mismatched"),
      sex: yup.string().required("This field is required"),
      photo: yup.string().required("This field is required"),
      country: yup.string().required("This country field is required"),
      checkbox: yup
        .boolean()
        .oneOf([true], "Field must be checked")
        .oneOf([false], ""),
    })
    .required();

  const [userInfo, setUsertInfo] = useState({
    name: "",
    age: 0,
    email: "",
    password1: "",
    password2: "",
    sex: "",
    photo: "",
    country: "",
    checkbox: false,
  });

  function handleChange(key: string, val: string | number | boolean) {
    setUsertInfo({ ...userInfo, [key]: val });
    setbutton("submit");
  }
  function errorChange(
    key: ErrorMessagesFields[],
    val: string | number | boolean,
  ) {
    setErrorName({ ...errorName, [key as unknown as string]: val });
  }

  async function validateValues(e: React.FormEvent) {
    e.preventDefault();
    try {
      await schema.validate(userInfo);
      setErrorName({
        name: "",
        age: "",
        email: "",
        password1: "",
        password2: "",
        country: "",
        sex: "",
        checkbox: true,
        photo: "",
      });
      if (
        userInfo.name &&
        userInfo.age &&
        userInfo.email &&
        userInfo.password1 &&
        userInfo.password2 &&
        userInfo.photo &&
        userInfo.sex &&
        userInfo.country
      ) {
        dispatch(username(userInfo.name.toString()));
        dispatch(userage(userInfo.age));
        dispatch(useremail(userInfo.email.toString()));
        dispatch(userpassword1(userInfo.password1.toString()));
        dispatch(userpassword2(userInfo.password2.toString()));
        dispatch(usersex(userInfo.sex.toString()));
        dispatch(userphoto(userInfo.photo));
        dispatch(useracception(userInfo.checkbox));
        dispatch(usercountries([userInfo.country]));
      }
      navigate("/");
    } catch (error) {
      const errorCur = error as unknown as yup.ValidationError;
      errorChange([errorCur.path as ErrorMessagesFields], errorCur.message);
      setbutton("disabled");
    }
  }

  return (
    <div className="container">
      <NavLink to={"/"}> return to main </NavLink>
      <section id="content">
        <form action="" onSubmit={validateValues} className={styles.form}>
          <h1>Form</h1>
          <div className={styles.inputwrapper}>
            <label htmlFor="username"></label>
            <input
              className={styles.input}
              type="text"
              placeholder="name"
              id="username"
              name="name"
              value={userInfo.name}
              onChange={(e) => handleChange("name", e.currentTarget.value)}
            />
            <div className={styles.error}>{errorName.name}</div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="userage"></label>
            <input
              className={styles.input}
              placeholder="age"
              id="userage"
              value={userInfo.age}
              onChange={(e) => handleChange("age", e.currentTarget.value)}
            />
            <div className={styles.error}>{errorName.age}</div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="useremail"></label>
            <input
              className={styles.input}
              placeholder="email"
              id="useremail"
              value={userInfo.email}
              onChange={(e) => handleChange("email", e.currentTarget.value)}
            />
            <div className={styles.error}>{errorName.email}</div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="password"></label>
            <input
              className={styles.input}
              placeholder="password1"
              id="password1"
              value={userInfo.password1}
              onChange={(e) => handleChange("password1", e.currentTarget.value)}
            />
            <div className={styles.error}>{errorName.password1}</div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="password"></label>
            <input
              className={styles.input}
              placeholder="password2"
              id="password2"
              value={userInfo.password2}
              onChange={(e) => handleChange("password2", e.currentTarget.value)}
            />
            <div className={styles.error}>{errorName.password2}</div>
          </div>
          <div className={styles.inputwrapper1}>
            <input
              className={styles.inputsex}
              type="radio"
              id="female"
              name="sex"
              value="female"
              onChange={(e) => handleChange("sex", e.currentTarget.value)}
            />
            <label htmlFor="female" className={styles.label}>
              female 👩🏻
            </label>
            <input
              className={styles.inputsex}
              type="radio"
              id="male"
              name="sex"
              value="male"
              onChange={(e) => handleChange("sex", e.currentTarget.value)}
            />
            <label htmlFor="male">male 👨🏻</label>
            <div className={styles.error}>{errorName.sex}</div>
          </div>
          <div>
            <Autocomplete />
            <div className={styles.inputwrapper}>
              <label htmlFor="country" className={styles.label1}>
                choose a country
              </label>{" "}
              <input
                className={styles.inputcountry}
                type="text"
                list="countrydata"
                id="country"
                name="country"
                autoComplete="off"
                value={userInfo.country}
                onChange={(e) => handleChange("country", e.currentTarget.value)}
              />
              <div className={styles.error}>{errorName.country}</div>
            </div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="photo" className={styles.label1}>
              choose a photo (jpeg/png)
            </label>{" "}
            <input
              className={styles.inputphoto}
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              id="photo"
              value={userInfo.photo}
              onChange={(e) => {
                handleChange("photo", e.currentTarget.value);
              }}
            />
            <div className={styles.error}>{errorName.photo}</div>
          </div>
          <div className={styles.inputwrapper1}>
            <input
              className={styles.inputagree}
              type="checkbox"
              id="checkbox"
              name="checkbox"
            />
            <label htmlFor="checkbox">
              {" "}
              By checking this box, I agree with Terms and Conditions.{" "}
            </label>
            <div className={styles.error}>{errorName.checkbox}</div>
          </div>
          <div className={styles[button]}>
            <input type="submit" />
          </div>
        </form>
      </section>
    </div>
  );
}
export default UncontrolledForm;

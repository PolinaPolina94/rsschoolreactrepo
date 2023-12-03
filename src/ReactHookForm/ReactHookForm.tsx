import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../UncontroledForm/UncontrolledForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserSliceForm2 } from "../store/reducers/UserSliceForm2";
import { useAppDispatch } from "../hooks/hooksforredux";
import Autocomplete from "../AutocompleteSelect/Autocomplite";

type Inputs = {
  name: string;
  age: number;
  email: string;
  password1: string;
  password2: string;
  sex: string;
  photo?: string | undefined;
  country: string;
  checkbox: boolean;
};

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("This field is required")
      .matches(/^[A-Z][a-z]+$/, "First letter should be capital Latin (A-Z)!"),
    age: yup
      .number()
      .positive("number should be upper 0")
      .integer()
      .required("This field is required"),
    email: yup
      .string()
      .email("email should be correct (use '@')")
      .required("This field is required"),
    password1: yup
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
    photo: yup.string(),
    country: yup.string().required("This field is required"),
    checkbox: yup
      .boolean()
      .oneOf([true], "Field must be checked")
      .required("This field is required"),
  })
  .required();

function ReactHookForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const {
    username2,
    userage2,
    useremail2,
    userpassword11,
    userpassword22,
    usersex2,
    userphoto2,
    useracception2,
    usercountries2,
  } = UserSliceForm2.actions;
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    age,
    email,
    password1,
    password2,
    sex,
    country,
    photo,
    checkbox,
  }) => {
    if (
      name &&
      age &&
      email &&
      password1 &&
      password2 &&
      sex &&
      photo &&
      checkbox &&
      country
    ) {
      dispatch(username2(name.toString()));
      dispatch(userage2(age));
      dispatch(useremail2(email.toString()));
      dispatch(userpassword11(password1.toString()));
      dispatch(userpassword22(password2.toString()));
      dispatch(usersex2(sex.toString()));
      dispatch(userphoto2(photo.toString()));
      dispatch(useracception2(checkbox));
      dispatch(usercountries2([country]));
    }
    navigate("/");
  };

  return (
    <div className="container">
      <NavLink to={"/"}> return to main </NavLink>
      <section id="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Form</h1>
          <div className={styles.inputwrapper}>
            <label htmlFor="username"></label>
            <input
              className={styles.input}
              placeholder="name"
              {...register("name")}
              type="text"
              id="username"
              name="name"
            />
            <div className={styles.error}>
              {errors.name && <span> {errors.name.message} </span>}
            </div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="userage"></label>
            <input
              className={styles.input}
              {...register("age")}
              type="number"
              id="userage"
              placeholder="age"
              name="age"
            />
            <div className={styles.error}>
              {errors.age && <span> {errors.age.message} </span>}
            </div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="useremail"></label>
            <input
              className={styles.input}
              placeholder="email"
              {...register("email")}
              type="email"
              id="useremail"
              name="email"
            />
            <div className={styles.error}>
              {errors.email && <span> {errors.email.message} </span>}
            </div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="password1"></label>
            <input
              className={styles.input}
              {...register("password1")}
              placeholder="password1"
              id="password1"
              name="password1"
            />
            <div className={styles.error}>
              {errors.password1 && <span> {errors.password1.message} </span>}
            </div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="password2"></label>
            <input
              className={styles.input}
              {...register("password2")}
              id="password1"
              placeholder="password2"
              name="password2"
            />
            <div className={styles.error}>
              {errors.password2 && <span> {errors.password2.message} </span>}
            </div>
          </div>
          <div className={styles.inputwrapper1}>
            <input
              className={styles.inputsex}
              type="radio"
              id="female"
              value="female"
              {...register("sex")}
              name="sex"
            />
            <label htmlFor="female" className={styles.label}>
              female 👩🏻
            </label>
            <input
              className={styles.inputsex}
              type="radio"
              id="male"
              value="male"
              {...register("sex")}
              name="sex"
            />
            <label htmlFor="male">male 👨🏻</label>
            <span className={styles.error}>
              {errors.sex && <span> {errors.sex.message} </span>}
            </span>{" "}
          </div>
          <div>
            <Autocomplete />
            <div className={styles.inputwrapper}>
              <label htmlFor="country" className={styles.label1}>
                choose a country
              </label>
              <input
                className={styles.inputcountry}
                type="text"
                list="countrydata"
                id="country"
                autoComplete="off"
                {...register("country")}
                name="country"
              />
              <div className={styles.error}>
                {errors.country && <span> {errors.country.message} </span>}
              </div>
            </div>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="photo" className={styles.label1}>
              choose a photo (jpeg/png)
            </label>{" "}
            <input
              className={styles.inputphoto}
              type="file"
              accept="image/jpeg,image/png"
              id="photo"
              {...register("photo")}
              name="photo"
            />
            <div className={styles.error}>
              {errors.photo && <span> {errors.photo.message} </span>}
            </div>
          </div>
          <div className={styles.inputwrapper1}>
            <input
              className={styles.inputagree}
              type="checkbox"
              {...register("checkbox")}
              id="checkbox"
              name="checkbox"
            />
            <label htmlFor="checkbox">
              By checking this box, I agree with Terms and Conditions.
            </label>
            <div className={styles.error}>
              {errors.checkbox && <span> {errors.checkbox.message} </span>}
            </div>
          </div>
          <input type="submit" disabled={!isValid} />
        </form>
      </section>
    </div>
  );
}

export default ReactHookForm;

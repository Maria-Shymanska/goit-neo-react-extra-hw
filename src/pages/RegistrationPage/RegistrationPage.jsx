import { useDispatch } from "react-redux";
import { RegistrationForm } from "../../components/RegisterForm/RegistrationForm";
import { registerOperation } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const register = (userData) => {
    dispatch(registerOperation(userData));
  };
  return (
    <div className={css.register}>
      <p className={css.title}>Registration</p>
      <RegistrationForm submit={register} />
    </div>
  );
};
export default RegistrationPage;

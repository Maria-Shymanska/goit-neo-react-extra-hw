import { useDispatch } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logInOperation } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const login = (userData) => {
    dispatch(logInOperation(userData));
  };

  return (
    <div className={css.login}>
      <p className={css.title}>Login</p>
      <LoginForm submit={login} />
    </div>
  );
}

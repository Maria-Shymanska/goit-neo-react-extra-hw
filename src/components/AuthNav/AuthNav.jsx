import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : "link";
  };

  return (
    <div className={css.auth}>
      <NavLink className={getActiveClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getActiveClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;

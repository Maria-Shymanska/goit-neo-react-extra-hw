import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : "link";
  };

  return (
    <nav className={css.nav}>
      <NavLink className={getActiveClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getActiveClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

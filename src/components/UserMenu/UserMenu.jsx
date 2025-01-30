import { useDispatch, useSelector } from "react-redux";
import { logOutOperation } from "../../redux/auth/operations.js";
import { selectUser } from "../../redux/auth/selectors.js";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <span>Welcome, {user.name}!</span>
      <button onClick={() => dispatch(logOutOperation())}>Logout</button>
    </div>
  );
};

export default UserMenu;

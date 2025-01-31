import css from "./HomePage.module.css";
import { FcContacts } from "react-icons/fc";

const HomePage = () => {
  return (
    <>
      <div className={css.home}>
        <h1 className={css.title}>
          Contacts book welcome page
          <span role="img" aria-label="Greeting icon">
            <FcContacts />
          </span>
        </h1>
      </div>
    </>
  );
};

export default HomePage;


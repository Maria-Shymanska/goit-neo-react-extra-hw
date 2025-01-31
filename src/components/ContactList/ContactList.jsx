import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts ? (
        filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
};

export default ContactList;

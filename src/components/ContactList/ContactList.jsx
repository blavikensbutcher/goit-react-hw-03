import styles from './ContactList.module.css';

import { Contact } from '../Contact/Contact.jsx';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.box}>
      {contacts.map(item => {
        return (
          <Contact
            name={item.name}
            phone={item.number}
            id={item.id}
            key={item.id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

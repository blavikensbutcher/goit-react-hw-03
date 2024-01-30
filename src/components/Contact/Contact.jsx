import styles from './Contact.module.css';
import { MdPeopleAlt } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

export const Contact = ({ name, phone, id, onDelete }) => {
  return (
    <li className={styles.container} data-id={id}>
      <div>
        <p className={styles.text}>
          <MdPeopleAlt size={15} /> {name}
        </p>
        <p className={styles.text}>
          <FaPhoneAlt size={15} /> {phone}
        </p>
      </div>
      <div>
        <button className={styles.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
